/**
 * composables/useWarpTransition.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * "Spherical Barrel Warp" transition effect.
 *
 * Kỹ thuật: WebGL fragment shader barrel distortion
 * - Ảnh hiện tại "phình ra" từ trung tâm (barrel distortion tăng dần)
 * - Đồng thời zoom nhẹ vào trung tâm (giả lập đang lao về phía trước)
 * - Ảnh sáng dần rồi fade → cảm giác xuyên qua không gian
 *
 * Tương tự kỹ thuật được dùng bởi Matterport, Google Street View (Pegman anim).
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── GLSL shaders ─────────────────────────────────────────────────────────────

const VERTEX_SRC = /* glsl */`
  attribute vec2 aPosition;
  attribute vec2 aTexCoord;
  varying vec2 vUv;
  void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
    vUv = aTexCoord;
  }
`;

const FRAGMENT_SRC = /* glsl */`
  precision mediump float;

  uniform sampler2D uTexture;
  uniform float uProgress;   /* 0.0 = flat, 1.0 = fully warped + faded */

  varying vec2 vUv;

  void main() {
    vec2 uv     = vUv;
    vec2 center = vec2(0.5, 0.5);
    vec2 delta  = uv - center;
    float r     = length(delta);

    /* ── Barrel distortion ─────────────────────────────────────────────────
       k=0  → no warp (normal flat image)
       k=2.8→ heavy barrel (edges rush outward = "lao vào" effect)         */
    float k = uProgress * 2.8;
    vec2 warpedDelta = delta * (1.0 + k * r * r);

    /* ── Zoom-in toward center (simulate rushing forward) ───────────────── */
    float zoom = 1.0 + uProgress * 0.22;
    vec2 warpedUv = center + warpedDelta / zoom;

    /* ── Out-of-bounds → black bleed (realistic sphere edge) ─────────────── */
    if (warpedUv.x < 0.0 || warpedUv.x > 1.0 ||
        warpedUv.y < 0.0 || warpedUv.y > 1.0) {
      float edgeAlpha = 1.0 - smoothstep(0.65, 1.0, uProgress);
      gl_FragColor = vec4(0.0, 0.0, 0.0, edgeAlpha);
      return;
    }

    vec4 color = texture2D(uTexture, warpedUv);

    /* ── Subtle "rushing into light" brightness boost ─────────────────────── */
    color.rgb *= 1.0 + uProgress * 0.18;

    /* ── Fade out: hold solid for 60% then snap-fade ─────────────────────── */
    float alpha = 1.0 - smoothstep(0.58, 1.0, uProgress);

    gl_FragColor = vec4(color.rgb, alpha);
  }
`;

// ── WebGL helpers ─────────────────────────────────────────────────────────────

function compileShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('[Warp] Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function linkProgram(gl: WebGLRenderingContext, vertSrc: string, fragSrc: string): WebGLProgram | null {
  const vs = compileShader(gl, gl.VERTEX_SHADER,   vertSrc);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  if (!vs || !fs) return null;
  const prog = gl.createProgram();
  if (!prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('[Warp] Program link error:', gl.getProgramInfoLog(prog));
    gl.deleteProgram(prog);
    return null;
  }
  return prog;
}

// ── Main composable ───────────────────────────────────────────────────────────

export function useWarpTransition() {
  /**
   * Run the sphere-warp barrel distortion transition.
   *
   * @param imageUrl   URL of the image to warp (current scene thumbnail or canvas capture)
   * @param container  Parent element to overlay the warp canvas onto
   * @param duration   Animation duration in ms (default 750)
   */
  function warpOut(
    imageUrl: string,
    container: HTMLElement,
    duration = 750,
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!imageUrl) { resolve(); return; }

      const dpr = window.devicePixelRatio || 1;

      // ── Create overlay canvas ─────────────────────────────────────────────
      const canvas        = document.createElement('canvas');
      canvas.width        = container.clientWidth  * dpr;
      canvas.height       = container.clientHeight * dpr;
      canvas.style.cssText = `
        position:absolute; inset:0; z-index:95;
        width:100%; height:100%;
        pointer-events:none;
      `;
      container.appendChild(canvas);

      // ── Try WebGL ─────────────────────────────────────────────────────────
      const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false }) as WebGLRenderingContext | null;

      if (!gl) {
        // CSS fallback — simple fade + scale
        canvas.style.backgroundImage    = `url(${imageUrl})`;
        canvas.style.backgroundSize     = 'cover';
        canvas.style.backgroundPosition = 'center';
        canvas.style.opacity            = '1';
        canvas.style.transition         = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        canvas.style.transformOrigin    = 'center';
        requestAnimationFrame(() => {
          canvas.style.opacity   = '0';
          canvas.style.transform = 'scale(1.12)';
        });
        setTimeout(() => { canvas.remove(); resolve(); }, duration);
        return;
      }

      // ── Build shader program ──────────────────────────────────────────────
      const prog = linkProgram(gl, VERTEX_SRC, FRAGMENT_SRC);
      if (!prog) { canvas.remove(); resolve(); return; }

      // Full-screen quad: 2 triangles (triangle strip), position + UV
      //  pos(-1..1)   uv(0..1, flipped Y because WebGL vs image coords)
      const verts = new Float32Array([
        -1, -1,   0, 1,  // bottom-left
         1, -1,   1, 1,  // bottom-right
        -1,  1,   0, 0,  // top-left
         1,  1,   1, 0,  // top-right
      ]);
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

      const aPosLoc  = gl.getAttribLocation(prog,  'aPosition');
      const aUvLoc   = gl.getAttribLocation(prog,  'aTexCoord');
      const uTexLoc  = gl.getUniformLocation(prog, 'uTexture');
      const uProgLoc = gl.getUniformLocation(prog, 'uProgress');

      gl.enableVertexAttribArray(aPosLoc);
      gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 16, 0);
      gl.enableVertexAttribArray(aUvLoc);
      gl.vertexAttribPointer(aUvLoc,  2, gl.FLOAT, false, 16, 8);

      gl.useProgram(prog);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      // ── Load texture ──────────────────────────────────────────────────────
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      // Placeholder 1×1 pixel while image loads
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
        new Uint8Array([0, 0, 0, 255]));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S,     gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T,     gl.CLAMP_TO_EDGE);

      const img    = new Image();
      img.crossOrigin = 'anonymous';
      let rafId: number;
      let startTime: number | null = null;

      img.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

        function frame(now: number) {
          if (startTime === null) startTime = now;
          const progress = Math.min((now - startTime) / duration, 1);

          gl!.viewport(0, 0, canvas.width, canvas.height);
          gl!.clearColor(0, 0, 0, 0);
          gl!.clear(gl!.COLOR_BUFFER_BIT);

          gl!.uniform1i(uTexLoc,  0);
          gl!.uniform1f(uProgLoc, progress);
          gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);

          if (progress < 1) {
            rafId = requestAnimationFrame(frame);
          } else {
            canvas.remove();
            resolve();
          }
        }
        rafId = requestAnimationFrame(frame);
      };

      img.onerror = () => { canvas.remove(); resolve(); };
      img.src = imageUrl;

      // Safety timeout — resolve even if image fails to load
      setTimeout(() => {
        cancelAnimationFrame(rafId);
        canvas.remove();
        resolve();
      }, duration + 500);
    });
  }

  return { warpOut };
}

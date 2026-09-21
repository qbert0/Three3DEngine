import type { TourMarker, TourScene } from '../../../types/tour';
import type { View360Plugin, PluginContext, PluginMarker } from '../types';

/** HTML for the forward-arrow navigation button (3D Top-Down Ground Perspective) */
const navHtml = (destTitle: string): string => `
<button class="nav-hotspot-btn" aria-label="Đến: ${destTitle}"
  style="position:relative;width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;">
  <div class="hotspot-circle nav" style="width:56px;height:56px;border-radius:50%;background:rgba(31,111,139,0.9);
    border:2.5px solid rgba(255,255,255,0.85);
    box-shadow:0 10px 30px rgba(31,111,139,0.6),inset 0 2px 8px rgba(255,255,255,0.4);
    display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);
    transform:perspective(350px) rotateX(42deg);transform-style:preserve-3d;">
    <div class="hotspot-arrow" style="width:32px;height:32px;filter:drop-shadow(0 3px 6px rgba(0,0,0,0.45));">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
        <defs>
          <linearGradient id="arrowGradNavCore" x1="18" y1="4" x2="18" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="55%" stop-color="#e0f2fe"/>
            <stop offset="100%" stop-color="#38bdf8"/>
          </linearGradient>
        </defs>
        <!-- Ground Shadow -->
        <path d="M18 5.5L31 27.5L18 21.5L5 27.5Z" fill="rgba(0,0,0,0.35)"/>
        <!-- Top-Down 3D Perspective Chevron -->
        <path d="M18 4L31 26L18 20L5 26Z" fill="url(#arrowGradNavCore)" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round"/>
        <!-- Center Crease / 3D Ridge Highlight -->
        <path d="M18 4V20" stroke="rgba(255,255,255,0.9)" stroke-width="1.6" stroke-linecap="round"/>
        <!-- Inner Highlight Chevron -->
        <path d="M18 9.5L24.5 20.5L18 16.5L11.5 20.5Z" fill="rgba(255,255,255,0.45)"/>
      </svg>
    </div>
  </div>
  <span style="position:absolute;top:calc(100% + 5px);left:50%;transform:translateX(-50%);
    font-size:10px;font-weight:700;color:#fff;background:rgba(15,15,15,0.7);
    padding:3px 9px;border-radius:20px;white-space:nowrap;backdrop-filter:blur(6px);
    letter-spacing:0.04em;max-width:130px;overflow:hidden;text-overflow:ellipsis;
    border:1px solid rgba(255,255,255,0.1);pointer-events:none;">${destTitle}</span>
</button>`;

export const NavigationPlugin: View360Plugin = {
  name: 'navigation',

  getMarkers(scene: TourScene, _ctx: PluginContext): PluginMarker[] {
    return scene.markers
      .filter((m): m is Extract<TourMarker, { plugin: 'navigation' }> => m.plugin === 'navigation')
      .map((m) => ({
        id: m.id,
        position: { yaw: m.yaw, pitch: m.pitch },
        html: navHtml(m.label),
        anchor: 'center center',
        data: { plugin: 'navigation', targetScene: m.targetScene },
      }));
  },

  onMarkerClick(marker: TourMarker, ctx: PluginContext): void {
    if (marker.plugin === 'navigation' && marker.targetScene) {
      ctx.navigate(marker.targetScene);
    }
  },
};

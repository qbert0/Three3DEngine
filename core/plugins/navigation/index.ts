import type { TourMarker, TourScene } from '../../../types/tour';
import type { View360Plugin, PluginContext, PluginMarker } from '../types';

/** HTML for the forward-arrow navigation button */
const navHtml = (destTitle: string): string => `
<button class="nav-hotspot-btn" aria-label="Đến: ${destTitle}"
  style="display:flex;flex-direction:column;align-items:center;gap:5px;background:none;border:none;cursor:pointer;padding:0;position:relative;">
  <span class="nav-hotspot-tooltip" style="
    position:absolute;bottom:calc(100% + 10px);left:50%;
    transform:translateX(-50%) translateY(6px);
    background:rgba(10,10,10,0.88);color:#fff;font-size:11px;font-weight:600;
    padding:5px 11px;border-radius:8px;white-space:nowrap;pointer-events:none;
    opacity:0;transition:opacity 0.2s ease,transform 0.2s ease;
    border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(8px);
    letter-spacing:0.03em;box-shadow:0 4px 16px rgba(0,0,0,0.4);">
    ↑ ${destTitle}
    <span style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);
      width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;
      border-top:5px solid rgba(10,10,10,0.88);"></span>
  </span>
  <div style="width:54px;height:54px;border-radius:50%;background:rgba(31,111,139,0.88);
    border:2.5px solid rgba(255,255,255,0.8);
    box-shadow:0 4px 24px rgba(31,111,139,0.6),0 0 0 6px rgba(31,111,139,0.2);
    display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4 L12 18" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M6 11 L12 5 L18 11" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="9" cy="20.5" r="1.6" fill="rgba(255,255,255,0.65)"/>
      <circle cx="15" cy="20.5" r="1.6" fill="rgba(255,255,255,0.65)"/>
    </svg>
  </div>
  <span style="font-size:10px;font-weight:700;color:#fff;background:rgba(15,15,15,0.7);
    padding:3px 9px;border-radius:20px;white-space:nowrap;backdrop-filter:blur(6px);
    letter-spacing:0.04em;max-width:130px;overflow:hidden;text-overflow:ellipsis;
    border:1px solid rgba(255,255,255,0.1);">${destTitle}</span>
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
        anchor: 'bottom center',
        data: { plugin: 'navigation', targetScene: m.targetScene },
      }));
  },

  onMarkerClick(marker: TourMarker, ctx: PluginContext): void {
    if (marker.plugin === 'navigation' && marker.targetScene) {
      ctx.navigate(marker.targetScene);
    }
  },
};

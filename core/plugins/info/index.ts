import type { TourMarker, TourScene } from '../../../types/tour';
import type { View360Plugin, PluginContext, PluginMarker } from '../types';

const infoHtml = (label: string): string => `
<button aria-label="${label}"
  style="position:relative;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;padding:0;">
  <div style="width:44px;height:44px;border-radius:50%;background:rgba(168,88,63,0.88);
    border:2.5px solid rgba(255,255,255,0.8);
    box-shadow:0 4px 20px rgba(168,88,63,0.55),0 0 0 6px rgba(168,88,63,0.18);
    display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="5" r="1.5" fill="white"/>
      <path d="M9 8 L9 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    </svg>
  </div>
  <span style="position:absolute;top:calc(100% + 5px);left:50%;transform:translateX(-50%);
    font-size:10px;font-weight:700;color:#fff;background:rgba(15,15,15,0.7);
    padding:3px 9px;border-radius:20px;white-space:nowrap;backdrop-filter:blur(6px);
    letter-spacing:0.04em;border:1px solid rgba(255,255,255,0.1);pointer-events:none;">${label}</span>
</button>`;

export const InfoPlugin: View360Plugin = {
  name: 'info',

  getMarkers(scene: TourScene, _ctx: PluginContext): PluginMarker[] {
    return scene.markers
      .filter((m): m is Extract<TourMarker, { plugin: 'info' }> => m.plugin === 'info')
      .map((m) => ({
        id: m.id,
        position: { yaw: m.yaw, pitch: m.pitch },
        html: infoHtml(m.label),
        anchor: 'center center',
        data: { plugin: 'info', content: m.content, label: m.label },
      }));
  },

  onMarkerClick(marker: TourMarker, ctx: PluginContext): void {
    if (marker.plugin === 'info') {
      ctx.openInfo(marker.content, marker.label);
    }
  },
};

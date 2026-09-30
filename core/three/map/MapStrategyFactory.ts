/**
 * ─────────────────────────────────────────────────────────────────
 * MapStrategyFactory — Creates the correct IMapStrategy for a mode
 * ─────────────────────────────────────────────────────────────────
 */

import type { IMapStrategy, MapConfig } from './IMapStrategy';
import { Map2DStrategy } from './Map2DStrategy';

export class MapStrategyFactory {
  /**
   * Instantiate the appropriate strategy for the given config.
   *
   * 'real' and '3d' modes return placeholder stubs that log a warning;
   * implement MapRealStrategy / Map3DStrategy when ready.
   */
  static create(config: MapConfig): IMapStrategy {
    switch (config.mode) {
      case '2d':
        return new Map2DStrategy();

      case 'real':
        console.warn('[MapStrategyFactory] "real" map mode is not yet implemented. Falling back to 2D.');
        return new Map2DStrategy();

      case '3d':
        console.warn('[MapStrategyFactory] "3d" map mode is not yet implemented. Falling back to 2D.');
        return new Map2DStrategy();

      default:
        return new Map2DStrategy();
    }
  }
}

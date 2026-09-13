import { NavigationPlugin } from './navigation';
import { InfoPlugin } from './info';
import type { View360Plugin } from './types';

/** Registry of all built-in plugins */
const REGISTRY: Record<string, View360Plugin> = {
  navigation: NavigationPlugin,
  info: InfoPlugin,
};

/**
 * Resolve a list of plugin names to their implementations.
 * Unknown plugin names are silently skipped (warn in dev).
 */
export function resolvePlugins(names: string[]): View360Plugin[] {
  return names
    .map((name) => {
      const plugin = REGISTRY[name];
      if (!plugin && process.env.NODE_ENV === 'development') {
        console.warn(`[View360] Unknown plugin: "${name}". Available: ${Object.keys(REGISTRY).join(', ')}`);
      }
      return plugin;
    })
    .filter((p): p is View360Plugin => !!p);
}

/** Register a custom plugin (for external / project-specific plugins) */
export function registerPlugin(plugin: View360Plugin): void {
  if (REGISTRY[plugin.name]) {
    console.warn(`[View360] Overwriting existing plugin: "${plugin.name}"`);
  }
  REGISTRY[plugin.name] = plugin;
}

export { NavigationPlugin, InfoPlugin };


import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const UiAvatar: typeof import("../components/ui/Avatar.vue")['default']
export const UiBadge: typeof import("../components/ui/Badge.vue")['default']
export const UiBanner: typeof import("../components/ui/Banner.vue")['default']
export const UiButton: typeof import("../components/ui/Button.vue")['default']
export const UiCard: typeof import("../components/ui/Card.vue")['default']
export const UiDivider: typeof import("../components/ui/Divider.vue")['default']
export const UiEmptyState: typeof import("../components/ui/EmptyState.vue")['default']
export const UiKbd: typeof import("../components/ui/Kbd.vue")['default']
export const UiSkeleton: typeof import("../components/ui/Skeleton.vue")['default']
export const UiSpinner: typeof import("../components/ui/Spinner.vue")['default']
export const UiStatusDot: typeof import("../components/ui/StatusDot.vue")['default']
export const UiSwitch: typeof import("../components/ui/Switch.vue")['default']
export const UiTextInput: typeof import("../components/ui/TextInput.vue")['default']
export const UiToast: typeof import("../components/ui/Toast.vue")['default']
export const UiToastProvider: typeof import("../components/ui/ToastProvider.vue")['default']
export const UiTooltip: typeof import("../components/ui/Tooltip.vue")['default']
export const HotspotPanel: typeof import("../components/experience/HotspotPanel.vue")['default']
export const SceneList: typeof import("../components/experience/SceneList.vue")['default']
export const ThreeViewer360: typeof import("../components/experience/ThreeViewer360.vue")['default']
export const TourSidebar: typeof import("../components/experience/TourSidebar.vue")['default']
export const Viewer360: typeof import("../components/experience/Viewer360.vue")['default']
export const SceneGraph: typeof import("../components/editor/SceneGraph.vue")['default']
export const SceneGraphNode: typeof import("../components/editor/SceneGraphNode.vue")['default']
export const TourCard: typeof import("../components/catalog/TourCard.vue")['default']
export const MorphIcon: typeof import("../components/MorphIcon.vue")['default']
export const SceneViewer: typeof import("../components/SceneViewer.vue")['default']
export const ThemeToggle: typeof import("../components/ThemeToggle.vue")['default']
export const ThemeToggleSelector: typeof import("../components/ThemeToggleSelector.vue")['default']
export const MinimalTourSidebar: typeof import("../themes/minimal/TourSidebar.vue")['default']
export const NatureTourSidebar: typeof import("../themes/nature/TourSidebar.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyUiAvatar: LazyComponent<typeof import("../components/ui/Avatar.vue")['default']>
export const LazyUiBadge: LazyComponent<typeof import("../components/ui/Badge.vue")['default']>
export const LazyUiBanner: LazyComponent<typeof import("../components/ui/Banner.vue")['default']>
export const LazyUiButton: LazyComponent<typeof import("../components/ui/Button.vue")['default']>
export const LazyUiCard: LazyComponent<typeof import("../components/ui/Card.vue")['default']>
export const LazyUiDivider: LazyComponent<typeof import("../components/ui/Divider.vue")['default']>
export const LazyUiEmptyState: LazyComponent<typeof import("../components/ui/EmptyState.vue")['default']>
export const LazyUiKbd: LazyComponent<typeof import("../components/ui/Kbd.vue")['default']>
export const LazyUiSkeleton: LazyComponent<typeof import("../components/ui/Skeleton.vue")['default']>
export const LazyUiSpinner: LazyComponent<typeof import("../components/ui/Spinner.vue")['default']>
export const LazyUiStatusDot: LazyComponent<typeof import("../components/ui/StatusDot.vue")['default']>
export const LazyUiSwitch: LazyComponent<typeof import("../components/ui/Switch.vue")['default']>
export const LazyUiTextInput: LazyComponent<typeof import("../components/ui/TextInput.vue")['default']>
export const LazyUiToast: LazyComponent<typeof import("../components/ui/Toast.vue")['default']>
export const LazyUiToastProvider: LazyComponent<typeof import("../components/ui/ToastProvider.vue")['default']>
export const LazyUiTooltip: LazyComponent<typeof import("../components/ui/Tooltip.vue")['default']>
export const LazyHotspotPanel: LazyComponent<typeof import("../components/experience/HotspotPanel.vue")['default']>
export const LazySceneList: LazyComponent<typeof import("../components/experience/SceneList.vue")['default']>
export const LazyThreeViewer360: LazyComponent<typeof import("../components/experience/ThreeViewer360.vue")['default']>
export const LazyTourSidebar: LazyComponent<typeof import("../components/experience/TourSidebar.vue")['default']>
export const LazyViewer360: LazyComponent<typeof import("../components/experience/Viewer360.vue")['default']>
export const LazySceneGraph: LazyComponent<typeof import("../components/editor/SceneGraph.vue")['default']>
export const LazySceneGraphNode: LazyComponent<typeof import("../components/editor/SceneGraphNode.vue")['default']>
export const LazyTourCard: LazyComponent<typeof import("../components/catalog/TourCard.vue")['default']>
export const LazyMorphIcon: LazyComponent<typeof import("../components/MorphIcon.vue")['default']>
export const LazySceneViewer: LazyComponent<typeof import("../components/SceneViewer.vue")['default']>
export const LazyThemeToggle: LazyComponent<typeof import("../components/ThemeToggle.vue")['default']>
export const LazyThemeToggleSelector: LazyComponent<typeof import("../components/ThemeToggleSelector.vue")['default']>
export const LazyMinimalTourSidebar: LazyComponent<typeof import("../themes/minimal/TourSidebar.vue")['default']>
export const LazyNatureTourSidebar: LazyComponent<typeof import("../themes/nature/TourSidebar.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]

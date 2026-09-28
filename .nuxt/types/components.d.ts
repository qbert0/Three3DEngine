
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

interface _GlobalComponents {
  UiAvatar: typeof import("../../components/ui/Avatar.vue")['default']
  UiBadge: typeof import("../../components/ui/Badge.vue")['default']
  UiBanner: typeof import("../../components/ui/Banner.vue")['default']
  UiButton: typeof import("../../components/ui/Button.vue")['default']
  UiCard: typeof import("../../components/ui/Card.vue")['default']
  UiDivider: typeof import("../../components/ui/Divider.vue")['default']
  UiEmptyState: typeof import("../../components/ui/EmptyState.vue")['default']
  UiKbd: typeof import("../../components/ui/Kbd.vue")['default']
  UiSkeleton: typeof import("../../components/ui/Skeleton.vue")['default']
  UiSpinner: typeof import("../../components/ui/Spinner.vue")['default']
  UiStatusDot: typeof import("../../components/ui/StatusDot.vue")['default']
  UiSwitch: typeof import("../../components/ui/Switch.vue")['default']
  UiTextInput: typeof import("../../components/ui/TextInput.vue")['default']
  UiToast: typeof import("../../components/ui/Toast.vue")['default']
  UiToastProvider: typeof import("../../components/ui/ToastProvider.vue")['default']
  UiTooltip: typeof import("../../components/ui/Tooltip.vue")['default']
  HotspotPanel: typeof import("../../components/experience/HotspotPanel.vue")['default']
  SceneList: typeof import("../../components/experience/SceneList.vue")['default']
  TourSidebar: typeof import("../../components/experience/TourSidebar.vue")['default']
  SceneGraph: typeof import("../../components/editor/SceneGraph.vue")['default']
  SceneGraphNode: typeof import("../../components/editor/SceneGraphNode.vue")['default']
  TourCard: typeof import("../../components/catalog/TourCard.vue")['default']
  MorphIcon: typeof import("../../components/MorphIcon.vue")['default']
  SceneViewer: typeof import("../../components/SceneViewer.vue")['default']
  ThemeToggle: typeof import("../../components/ThemeToggle.vue")['default']
  ThemeToggleSelector: typeof import("../../components/ThemeToggleSelector.vue")['default']
  MinimalTourSidebar: typeof import("../../themes/minimal/TourSidebar.vue")['default']
  NatureTourSidebar: typeof import("../../themes/nature/TourSidebar.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyUiAvatar: LazyComponent<typeof import("../../components/ui/Avatar.vue")['default']>
  LazyUiBadge: LazyComponent<typeof import("../../components/ui/Badge.vue")['default']>
  LazyUiBanner: LazyComponent<typeof import("../../components/ui/Banner.vue")['default']>
  LazyUiButton: LazyComponent<typeof import("../../components/ui/Button.vue")['default']>
  LazyUiCard: LazyComponent<typeof import("../../components/ui/Card.vue")['default']>
  LazyUiDivider: LazyComponent<typeof import("../../components/ui/Divider.vue")['default']>
  LazyUiEmptyState: LazyComponent<typeof import("../../components/ui/EmptyState.vue")['default']>
  LazyUiKbd: LazyComponent<typeof import("../../components/ui/Kbd.vue")['default']>
  LazyUiSkeleton: LazyComponent<typeof import("../../components/ui/Skeleton.vue")['default']>
  LazyUiSpinner: LazyComponent<typeof import("../../components/ui/Spinner.vue")['default']>
  LazyUiStatusDot: LazyComponent<typeof import("../../components/ui/StatusDot.vue")['default']>
  LazyUiSwitch: LazyComponent<typeof import("../../components/ui/Switch.vue")['default']>
  LazyUiTextInput: LazyComponent<typeof import("../../components/ui/TextInput.vue")['default']>
  LazyUiToast: LazyComponent<typeof import("../../components/ui/Toast.vue")['default']>
  LazyUiToastProvider: LazyComponent<typeof import("../../components/ui/ToastProvider.vue")['default']>
  LazyUiTooltip: LazyComponent<typeof import("../../components/ui/Tooltip.vue")['default']>
  LazyHotspotPanel: LazyComponent<typeof import("../../components/experience/HotspotPanel.vue")['default']>
  LazySceneList: LazyComponent<typeof import("../../components/experience/SceneList.vue")['default']>
  LazyTourSidebar: LazyComponent<typeof import("../../components/experience/TourSidebar.vue")['default']>
  LazySceneGraph: LazyComponent<typeof import("../../components/editor/SceneGraph.vue")['default']>
  LazySceneGraphNode: LazyComponent<typeof import("../../components/editor/SceneGraphNode.vue")['default']>
  LazyTourCard: LazyComponent<typeof import("../../components/catalog/TourCard.vue")['default']>
  LazyMorphIcon: LazyComponent<typeof import("../../components/MorphIcon.vue")['default']>
  LazySceneViewer: LazyComponent<typeof import("../../components/SceneViewer.vue")['default']>
  LazyThemeToggle: LazyComponent<typeof import("../../components/ThemeToggle.vue")['default']>
  LazyThemeToggleSelector: LazyComponent<typeof import("../../components/ThemeToggleSelector.vue")['default']>
  LazyMinimalTourSidebar: LazyComponent<typeof import("../../themes/minimal/TourSidebar.vue")['default']>
  LazyNatureTourSidebar: LazyComponent<typeof import("../../themes/nature/TourSidebar.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}

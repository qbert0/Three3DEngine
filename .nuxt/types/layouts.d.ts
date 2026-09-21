import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    default: ComponentProps<typeof import("/run/media/qbert/1C8099B8809998BA/codedao/view360/layouts/default.vue").default>,
    editor: ComponentProps<typeof import("/run/media/qbert/1C8099B8809998BA/codedao/view360/layouts/editor.vue").default>,
    experience: ComponentProps<typeof import("/run/media/qbert/1C8099B8809998BA/codedao/view360/layouts/experience.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'pinia-persist-SSR',
  enforce: 'pre',
  setup() {
    if (import.meta.server) {
      globalThis.sessionStorage = {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
        length: 0
      }
    }
  }
})

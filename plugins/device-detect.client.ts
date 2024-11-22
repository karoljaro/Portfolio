export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.hook('app:mounted', () => {
      const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

      const deviceStatus = toMatch.some((toMatchItem) => {
         return navigator.userAgent.match(toMatchItem);
      });

      

      if (deviceStatus) {
         const store = useGeneralStore();
         store.updateIsMobile(true);
      }
   });
});

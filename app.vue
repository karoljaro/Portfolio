<template>
  <div>
    <OrganismThePreloader />
    <main id="smooth-wrapper">
      <NuxtRouteAnnouncer />
      <NuxtLayout id="smooth-content" class="will-change-transform">
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup lang="ts">
const { $ScrollSmoother } = useNuxtApp();
const { smScroll, setScrollSmoother } = useGeneralStore();

const prefersReducedMotion = ref(false);

const debounce = (fn: (...args: unknown[]) => void, delay: number) => {
  let timer: number | null = null;
  return (...args: unknown[]) => {
    if (timer) clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
};

const resizeHandler = () => {
  updateScrollSmoother();
};

const debouncedResizeHandler = debounce(resizeHandler, 200);

tryOnMounted(() => {
  if (typeof window !== 'undefined') {
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      prefersReducedMotion.value = e.matches;
      updateScrollSmoother();
    });
    
    window.addEventListener('resize', debouncedResizeHandler);
    
    updateScrollSmoother();
  }
});

const updateScrollSmoother = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  if (prefersReducedMotion.value) {
    if (smScroll) {
      smScroll.kill();
      setScrollSmoother(null);
    }
    return;
  }
  
  const smoothValue = isMobile ? 0.8 : 1.2;
  const smoothTouchValue = isMobile ? 0 : 0.1;
  
  setScrollSmoother(
    $ScrollSmoother.create({
      smooth: smoothValue,
      effects: true,
      smoothTouch: smoothTouchValue,
      normalizeScroll: false,
      ignoreMobileResize: true,
    }),
  );
};

onBeforeUnmount(() => {
  if (smScroll) {
    smScroll.kill();
    setScrollSmoother(null);
  }
  
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', () => {});
    window.removeEventListener('resize', debouncedResizeHandler);
  }
});

const { siteUrl } = useAppConfig();


useSeoMeta({
  ogTitle: "Karol Jaroń | Full-Stack Web Developer",
  ogDescription: "Portfolio of Karol Jaroń, a Full-Stack Web Developer specializing in JavaScript ecosystem",
  ogUrl: "https://karoljaron.com",
  ogType: "website",
  ogSiteName: "Karol Jaroń Portfolio",
  ogLocale: "en_US",
  ogImage: [
    {
      url: `${siteUrl}ogImages/standard/og-main.png`,
      width: 1200,
      height: 630,
      alt: "Karol Jaroń - Full-Stack Web Developer",
      type: "image/png",
    },
    {
      url: `${siteUrl}ogImages/square/og-square.png`,
      width: 630,
      height: 630,
      alt: "Karol Jaroń - Full-Stack Web Developer",
      type: "image/png",
    },
  ],

  // Twitter Card Meta Tags
  twitterCard: "summary_large_image",
  twitterTitle: "Karol Jaroń | Full-Stack Web Developer",
  twitterDescription: "Portfolio of Karol Jaroń, a Full-Stack Web Developer specializing in JavaScript ecosystem",
  twitterImage: `${siteUrl}ogImages/standard/og-main.png`,
  twitterImageAlt: "Karol Jaroń - Full-Stack Web Developer",
});

useSchemaOrg({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": "#person",
      "@type": "Person",
      name: "Karol Jaroń",
      jobTitle: "Full-stack web developer",
      url: `${siteUrl}`,
      description:
        "As a Fullstack Developer with over 4 years of experience, my passion is creating modern and efficient web applications using leading frameworks.",
      sameAs: ["https://github.com/karoljaro", "https://www.linkedin.com/in/karol-jaro%C5%84-474214361/"],
      knowsAbout: [
        "Nuxt.js",
        "Vue",
        "Next.js",
        "React.js",
        "Tailwindcss",
        "Javascript",
        "Typescript",
        "Bun.js",
        "Angular",
        "Elysia.js",
        "tRPC",
        "Docker",
        "Prisma",
      ],
      skills: [
        "Frontend Development",
        "Backend Development",
        "Web Performance Optimization",
        "SEO",
        "User Interface Design",
        "User Experience Design",
        "Clean Code",
        "Clean Architecture",
      ],
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Poland",
        },
      },
    },
    // {
    //   "@id": "#breadcrumb",
    //   "@type": "BreadcrumbList",
    //   itemListElement: [
    //     {
    //       "@type": "ListItem",
    //       position: 1,
    //       item: {
    //         "@id": "/",
    //         name: "Home",
    //       },
    //     },
    //     {
    //       "@type": "ListItem",
    //       position: 2,
    //       item: {
    //         "@id": "/#about",
    //         name: "About",
    //       },
    //     },        {
    //       "@type": "ListItem",
    //       position: 3,
    //       item: {
    //         "@id": "/#projects",
    //         name: "Projects",
    //       },
    //     },
    //     {
    //       "@type": "ListItem",
    //       position: 4,
    //       item: {
    //         "@id": "/#work",
    //         name: "Work",
    //       },
    //     },
    //     {
    //       "@type": "ListItem",
    //       position: 5,
    //       item: {
    //         "@id": "/#contact",
    //         name: "Contact",
    //       },
    //     },
    //   ],
    // },
  ],
});
</script>

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

tryOnMounted(() => {
  setScrollSmoother(
    $ScrollSmoother.create({
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    }),
  );
});

onBeforeUnmount(() => {
  if (smScroll) {
    smScroll.kill();
    setScrollSmoother(null);
  }
});

useSchemaOrg({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": "#person",
      "@type": "Person",
      name: "Karol Jaroń",
      jobTitle: "Full-stack web developer",
      url: "https://karoljaron.com",
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
      mainEntityOfPage: {
        "@id": "/#page",
      },
    },
    {
      "@id": "/#page",
      "@type": "WebPage",
      name: "Karol Jaroń Portfolio",
      description: "Portfolio of Karol Jaroń, a Full-Stack Web Developer specializing in JavaScript ecosystem",
      datePublished: "2025-05-21T00:00:00Z",
      dateModified: "2025-05-21T00:00:00Z",
      mainEntity: {
        "@id": "#person",
      },
    },
    {
      "@id": "/#website",
      "@type": "WebSite",
      name: "Karol Jaroń Portfolio",
      url: "https://karoljaron.com",
      description: "Personal Portfolio Website of Karol Jaroń, Full-Stack Web Developer",
      publisher: {
        "@id": "#person",
      },
      inLanguage: "en",
    },
    {
      "@id": "#projects",
      "@type": "ItemList",
      name: "Projects",
      description: "Portfolio projects by Karol Jaroń",
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

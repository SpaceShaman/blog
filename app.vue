<script setup lang="ts">
useHead({
  bodyAttrs: {
    style: "user-select: none;",
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
useSeoMeta({
  title: "Krzysztof Stanisławski - Fullstack Developer",
  description:
    "Krzysztof Stanisławski - Fullstack Developer. I'm a fullstack developer with a passion for creating advanced web applications.",
});
</script>
<template>
  <div class="mx-auto max-w-7xl p-4">
    <ColorModeButton />
    <NuxtPage />
  </div>
</template>
<style>
.dark-mode {
  @apply bg-dark-bg-0-h text-dark-fg;
}
.light-mode {
  @apply bg-light-bg-0-h text-light-fg;
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: "Space Blog",
  description:
    "Blog about programming, web development, AI, machine learning, and more.",
});
</script>
<template>
  <main>
    <ContentList v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <a :href="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </a>
      </div>
    </ContentList>
  </main>
</template>

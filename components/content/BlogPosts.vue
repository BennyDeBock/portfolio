<template>
  <BlogLink
    v-for="{ _path: slug, title, date, tags, excerpt } in blogPosts" :key="slug"
    :path="slug!"
    :title="title!"
    :date="date"
    :excerpt="excerpt"
    :tags="tags" />
</template>

<script setup lang="ts">
const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find()
</script>

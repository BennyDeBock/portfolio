<template>
  <h1>Blog</h1>
  <ul>
    <li v-for="{ _path: slug, title, date, tags, excerpt } in blogPosts" :key="slug">
      <NuxtLink :to="slug">
        <h2>{{ title }}</h2>
        <h3>{{ date }}</h3>
        <p>{{ excerpt }}</p>
        <h4 v-for="tag in tags" :key="tag">{{ tag }}</h4>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find()
</script>

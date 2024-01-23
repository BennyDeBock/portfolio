<template>
  <div id="entry" style="min-height: 100dvh;">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s | De Bock Benny',
  title: 'Home'
})
</script>

<template>
  <NuxtLayout name="cv">
    <section class="page" size="A4">
      test
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
useHead({
  title: 'CV'
})
</script>

<style scoped>
.page[size="A4"] {
  background: white;
  width: 21cm;
  height: 29.7cm;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}

@media print {
  .page[size="A4"] {
    margin: 0;
    box-shadow: 0;
  }
}
</style>
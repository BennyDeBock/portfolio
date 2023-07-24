<template>
  <footer>
    <p>&copy; Benny De Bock - {{ year }}</p>
    
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
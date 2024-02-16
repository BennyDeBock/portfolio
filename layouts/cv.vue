<template>
  <main class="container">
    <slot />
  </main>
</template>

<style scoped>
main {
  background: rgb(204,204,204);
}

@media print {
  main {
    margin: 0;
    box-shadow: 0;
  }
}
</style>
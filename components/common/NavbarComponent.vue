<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item is-size-2" to="/">
        Benny
      </NuxtLink>

      <a role="button" 
        class="navbar-burger"
        :class="{'is-active': isActive}"
        aria-label="menu" 
        :aria-expanded="isActive"
        @click="isActive = !isActive"
        data-target="navMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-end">
        <NuxtLink class="navbar-item is-size-4" to="/blog">Blog</NuxtLink>
        <NuxtLink class="navbar-item is-size-4" to="/cv">CV</NuxtLink>
        <NuxtLink class="navbar-item is-size-4" to="/projects">Projects</NuxtLink>
        <NuxtLink class="navbar-item is-size-4" to="/release-notes">Release Notes</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
let isActive = ref(false)
</script>

<style scoped>
.navbar {
  font-family: 'Ubuntu';
  background-color: var(--primary-colour);
  transition: transform 200ms ease-out;
}

.navbar.is-transformed {
  transform: translate3d(0, -100%, 0);
}

.navbar-item {
  color: var(--text-colour);
}
</style>
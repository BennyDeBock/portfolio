<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <h1>Benny</h1>
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
        <NuxtLink class="navbar-item" to="/blog">Blog</NuxtLink>
        <NuxtLink class="navbar-item" to="/cv">CV</NuxtLink>
        <NuxtLink class="navbar-item" to="/projects">Projects</NuxtLink>
        <NuxtLink class="navbar-item" to="/release-notes">Release Notes</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
let isActive = ref(false)
let showNavBar = ref(true)
</script>

<style scoped>
.navbar {
  font-family: 'Ubuntu';
  transition: transform 200ms ease-out;
}

.navbar.is-transformed {
  transform: translate3d(0, -100%, 0);
}
</style>
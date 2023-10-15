<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item is-size-2 nav-title" to="/">
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
.nav-title {
  font-family: 'Aurebesh', sans-serif;
}

.navbar {
  font-family: 'Ubuntu', sans-serif;
  background-color: var(--primary-colour);
  transition: transform 200ms ease-out;
}

.navbar.is-transformed {
  transform: translate3d(0, -100%, 0);
}



@media screen and (max-width: 1023px) {
  .navbar-burger {
    color: var(--text-colour);
    height: unset;
  }

  .navbar-menu {
    background-color: var(--primary-colour);
  }

  .navbar-burger span:nth-child(1) {
    top: calc(50% - 8px);
  }

  .navbar-burger.is-active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .navbar-burger.is-active span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .navbar-burger span:nth-child(2) {
    top: calc(50% - 1px);
  }
  .navbar-burger span:nth-child(3) {
    top: calc(50% + 6px);
  }
  .navbar-burger span {
    height: 2px;
    width: 30px;
    left: calc(50% - 20px);
  }
}

.navbar-item {
  color: var(--text-colour);
}

.navbar-item:hover, 
.navbar-item:focus,
.navbar-item:focus-within {
  background-color: var(--secondary-colour);
  color: var(--text-colour);
}
</style>
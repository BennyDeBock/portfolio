<template>
  <p class="continue">Continue reading</p>
  <div id="article-links" class="columns">
    <div v-if="!surround[0]" class="column"></div>
    <template v-for="(other, index) in surround" :key="index">
      <div v-if="other" class="column link-div">
        <NuxtLink
          :to="other._path + '/'"
          class="is-flex is-justify-content-center is-align-content-center"
          :aria-label="other.title"
        >
          <IconsArrowUp v-if="index % 2 === 0" width="24" height="24" class="rotate-270" />
          {{ other.title }} | {{ toReadableDate(other.date) }}
          <IconsArrowUp v-if="index % 2 === 1" width="24" height="24" class="rotate-90" />
        </NuxtLink>
      </div>
    </template>
    <div v-if="!surround[1]" class="column"></div>
  </div>
</template>

<script setup>
defineProps({
  surround: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.continue {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.rotate-90 {
  rotate: 90deg;
}

.rotate-270 {
  rotate: 270deg;
  margin-right: .3rem;
}

div:has(> a) {
  color: var(--text-colour-2);

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: var(--accent-colour);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
  }

  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  a {
    position: relative;
  }

  :hover {
    color: var(--text-colour);
  }
}
</style>
<template>
    <article class="nes-container is-rounded article">
        <header>
            <NuxtLink :to="props.path">
                <h2>{{ props.title }}</h2>
                <h3>{{ props.date }}</h3>
            </NuxtLink>
        </header>
        <p>{{ excerpt }}</p>
        <footer v-if="tags">
            <a href="#" v-for="tag in props.tags" :key="tag" class="nes-badge">
                <span class="is-dark">{{ tag }}</span>
            </a>
        </footer>
    </article>
</template>

<script setup lang="ts">
interface BlogLinkProps {
    path: string,
    title: string,
    date: string,
    excerpt: string,
    tags?: string[],
}

const props = defineProps<BlogLinkProps>()
</script>

<style scoped>
/* ===== Article component ===== */
.nes-container.article {
  max-width: 90%;
  margin: 0 0 5px 5%;
}

.nes-container.article h2 {
  font-size: 1.0rem;
}

.nes-container.article h3 {
  font-size: 0.9rem;
}

.nes-container.article p {
  font-size: 0.8rem;
}

.nes-container.article footer {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.nes-container.article .nes-badge {
  width: unset;
  margin: .5em .7em;
}

.nes-container.article footer a span.is-dark:first-child {
  position: relative;
  width: fit-content;
}
</style>
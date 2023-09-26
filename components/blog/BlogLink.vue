<template>
    <article class="card column">
        <header class="card-header">
            <NuxtLink :to="props.path">
                <h2 class="card-header-title">{{ props.title }}</h2>
                <h3>{{ props.date }}</h3>
            </NuxtLink>
        </header>
        <div class="card-content">
          <p class="content">{{ excerpt }}</p>
        </div>
        <footer v-if="tags" class="tags">
            <a href="#" v-for="tag in props.tags" :key="tag" class="tag is-rounded">
                <span>{{ tag }}</span>
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
</style>
<template>
    <article>
        <header>
            <NuxtLink :to="props.path" class="card">
                <h2>{{ props.title }}</h2>
                <h3>{{ props.date }}</h3>
            </NuxtLink>
        </header>
        <p>{{ excerpt }}</p>
        <footer v-if="tags">
            <span v-for="tag in props.tags" :key="tag">
                {{ tag }}
            </span>
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
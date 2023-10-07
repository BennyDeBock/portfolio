<template>
    <div class="column">
        <article class="card">
        <header class="card-header">
            <NuxtLink :to="props.path" class="card-header-title">
                <h2 class="title is-5">
                    {{ props.title }} | <span class="subtitle is-6">{{ props.date }}</span>
                </h2>
            </NuxtLink>
        </header>
        <div class="card-content">
          <p class="content">{{ excerpt }}</p>
        </div>
        <footer v-if="tags" class="card-footer">
            <div class="tags my-2">
                <a href="#" v-for="tag in props.tags" :key="tag" class="tag is-rounded">
                    <span>{{ tag }}</span>
                </a>
            </div>
        </footer>
    </article>
    </div>
    
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
.card {
    background-color: var(--background-colour-2);
    color: var(--text-colour);
}

.card-header {
    background-color: var(--primary-colour);
}

.title {
    color: var(--text-colour);
}

.subtitle {
    color: var(--text-colour-2);
}

.card-footer {
    border-top-color: var(--primary-colour);
}
</style>
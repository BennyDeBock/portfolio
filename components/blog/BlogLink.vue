<template>
  <div class="column is-half">
    <article class="card">
      <header class="card-header">
        <NuxtLink :to="props.path" class="card-header-title">
          <h2 class="title is-5">
            {{ props.title }} | <span class="subtitle is-6">{{ toReadableDate(props.date) }}</span>
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

const toReadableDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.toLocaleDateString('default', { day: 'numeric'})
  const dayWithSuffix = 
    +day > 3 ? `${day}th` :  
    +day > 2 ? `${day}rd` :
    +day > 1 ? `${day}nd` : `${day}st` 
  const month = date.toLocaleDateString('default', { month: 'long' })
  return `${month} ${dayWithSuffix}, ${date.getFullYear()}`
}

useHead({
  title: 'Blog'
})
</script>

<style scoped>
.card {
  background-color: var(--background-colour-2);
  color: var(--text-colour);
}

.card-header {
  background-color: var(--primary-colour);

  & h2 {
    margin: 0;
  }
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

.tag {
  background-color: var(--accent-colour);
  color: var(--text-colour);
}
</style>
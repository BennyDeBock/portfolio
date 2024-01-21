<template>
  <ContentDoc :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'" tag="article" class="section">
    <template #not-found>
      <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
    </template>
  </ContentDoc>
  <section>
    <NuxtLink class="button" to="/blog">Back</NuxtLink>
  </section>
</template>

<style scoped>
a {
  background-color: var(--background-colour);
  color: var(--text-colour);
  border-color: var(--background-colour-2);
}

a:hover {
  color: var(--text-colour-2);
  border-color: var(--accent-colour);
}

a::before {
  content: "\21A9";
  margin-right: 0.2rem;
}

section {
  padding: 0 3rem;
}
</style>

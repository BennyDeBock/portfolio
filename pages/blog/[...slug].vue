<template>
  <ContentDoc :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'" tag="article" class="section">
    <template v-slot="{ doc }">
      <!-- Title -->
      <header>
        <h1>{{ doc.title }}</h1>
        <p class="subtitle is-5">{{ toReadableDate(doc.date) }}</p>
      </header>
      <section class="">
        <!-- Table of contents -->
        <aside class="">
          <BlogTableOfContents :links="doc.body?.toc?.links" />
        </aside>
        <!-- Blog content -->
        <article class="">
          <ContentRenderer :value="doc"></ContentRenderer>
        </article>
      </section>
    </template>
    <template #not-found>
      <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
    </template>
  </ContentDoc>
  <section class="article-footer">
    <BlogRelatedArticles v-if="data" :surround="data.surround"></BlogRelatedArticles>
    <NuxtLink class="button" to="/blog">Back</NuxtLink>
  </section>
</template>

<script setup lang="ts">
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, '');
const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
  let article = queryContent('/blog').where({ _path: cleanPath }).findOne();    
  // get the surround information,    
  // which is an array of documeents that come before and after the current document    
  let surround = queryContent('/blog').sort({ date: -1 }).only(['_path', 'title', 'date']).findSurround(cleanPath, { before: 1, after: 1 });   

  return {        
    article: await article,        
    surround: await surround    
  }
})

// TODO: Set metadata
console.log(data);

</script>

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

header {
  padding: 0 3rem 3rem 3rem;
}

.article-footer {
  padding: 2rem 3rem;
}
</style>

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

  let surround = queryContent('/blog').sort({ date: -1 }).only(['_path', 'title', 'date']).findSurround(cleanPath, { before: 1, after: 1 });   

  return {        
    article: await article,        
    surround: await surround    
  }
})

// Set the meta
const baseUrl = 'https://bennydebock.dev'
const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/')
const image = baseUrl + '/img/blog/default.webp'

// JSON+LD
const jsonScripts = [    
  {        
    type: 'application/ld+json',        
    children: JSON.stringify({            
      '@context': 'https://schema.org',            
      '@type': 'BlogPosting',            
      mainEntityOfPage: {                
        '@type': 'WebPage',                
        '@id': 'https://bennydebock.dev/'            
      },            
      url: canonicalPath,            
      image: image,            
      headline: data.value?.article?.title,            
      abstract: 'Hello there!' + data.value?.article.excerpt,            
      datePublished: data.value?.article?.date,
    })    
  }
]

useHead({
  title: data.value?.article.title,
  meta: [       
    { name: 'author', content: data.value?.article?.author },        
    { name: 'description', content: 'Hello there!' + data.value?.article.excerpt },  
    { property: 'article:published_time', content: data.value?.article?.date.split('T')[0] },     
    // OG        
    { hid: 'og:title', property: 'og:title', content: data.value?.article?.title },        
    { hid: 'og:url', property: 'og:url', content: canonicalPath },        
    { hid: 'og:description', property: 'og:description', content: 'Hello there!' + data.value?.article.excerpt },        
    { hid: 'og:image', name: 'image', property: 'og:image', content: image },        { hid: 'og:type', property: 'og:type', content: 'Article' },        
    { hid: 'og:image:type', property: 'og:image:type', content: `image/webp` },        
    { hid: 'og:image:width', property: 'og:image:width', content: 2048 },        
    { hid: 'og:image:height', property: 'og:image:height', content: 1152 },        
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Fushimi Inari' },        
    // Twitter        
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },       
    { hid: 'twitter:title', name: 'twitter:title', content: data.value?.article?.title },        
    { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },        
    { hid: 'twitter:description', name: 'twitter:description', content: 'Hello there!' + data.value?.article.excerpt },        
    { hid: 'twitter:image', name: 'twitter:image', content: image },        
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Fushimi Inari' }    
  ],    
  link: [        
    {            
      hid: 'canonical',            
      rel: 'canonical',            
      href: canonicalPath        
    }    
  ],    
  // script: jsonScripts
});

console.log(data.value?.article.excerpt);


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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false
  },
  modules: [
    '@nuxt/content'
  ],
  router: {
    options: {
      strict: false
    }
  },
  content: {
    highlight: {
      theme: 'monokai',
      preload: ['javascript', 'markdown', 'csharp', 'css', 'html', 'json', 'swift']
    },
    markdown: {
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer'
          }
        ]
      ]
    }
  }
})

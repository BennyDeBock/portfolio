// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'normalize.css', 
    'nes.css/css/nes.min.css',
    '~/assets/styles/main.css'
  ],
  components: [
    { path: '~/components/common'},
    '~/components'
  ],
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

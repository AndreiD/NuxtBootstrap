export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: 'Your website title is here...',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/_nuxt/assets/icon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/assets/main.css'],
  plugins: ['~/plugins/axios'],
  buildModules: ['@nuxtjs/vuetify'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/toast',
    '@nuxtjs/auth',
    '@nuxtjs/recaptcha',
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/user/login', method: 'post', propertyName: 'token' },
          user: { url: '/user/me', method: 'get', propertyName: 'email' }
        },
        tokenRequired: true,
        tokenType: 'Token'
      }
    }
  },
  router: {
    middleware: ['auth']
  },
  toast: {
    position: 'top-right',
    duration: 3000
  },
  recaptcha: {
    hideBadge: true, // Hide badge element (v3)
    language: 'en', // Recaptcha language (v2)
    siteKey: 'xxxxxxxxxxxxxxxxxxxxxx', // Site key for requests
    version: 3
  },
  axios: {
    baseURL: process.env.baseUrl || 'https://api.com',
    retries: 3
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js'
  },
  build: {
    extend(config, ctx) {}
  },
  generate: {
    fallback: true
  }
}

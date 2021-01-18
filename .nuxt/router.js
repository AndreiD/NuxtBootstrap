import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _719783ec = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _4c8ed464 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4626d9dd = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _68752b74 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _794bea7f = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _7c7f36c6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/faq",
    component: _719783ec,
    name: "faq"
  }, {
    path: "/inspire",
    component: _4c8ed464,
    name: "inspire"
  }, {
    path: "/login",
    component: _4626d9dd,
    name: "login"
  }, {
    path: "/logout",
    component: _68752b74,
    name: "logout"
  }, {
    path: "/users",
    component: _794bea7f,
    name: "users"
  }, {
    path: "/",
    component: _7c7f36c6,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}

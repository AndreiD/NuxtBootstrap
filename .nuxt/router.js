import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a25289a = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _1e11b85e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _bef13f26 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _85149494 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _5f9d75e2 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _52408554 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/faq",
    component: _1a25289a,
    name: "faq"
  }, {
    path: "/inspire",
    component: _1e11b85e,
    name: "inspire"
  }, {
    path: "/login",
    component: _bef13f26,
    name: "login"
  }, {
    path: "/logout",
    component: _85149494,
    name: "logout"
  }, {
    path: "/users",
    component: _5f9d75e2,
    name: "users"
  }, {
    path: "/",
    component: _52408554,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

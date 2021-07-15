import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _58412aaa = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account.vue' /* webpackChunkName: "pages/account" */))
const _293ebfc7 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\addresses.vue' /* webpackChunkName: "pages/account/addresses" */))
const _57d896db = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\addresses\\index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _57cf39d8 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\addresses\\add\\index.vue' /* webpackChunkName: "pages/account/addresses/add/index" */))
const _2511d240 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\addresses\\add\\_id.vue' /* webpackChunkName: "pages/account/addresses/add/_id" */))
const _30bcbb90 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\orders.vue' /* webpackChunkName: "pages/account/orders" */))
const _9ef3121c = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\orders\\index.vue' /* webpackChunkName: "pages/account/orders/index" */))
const _e66ce44c = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\orders\\_id.vue' /* webpackChunkName: "pages/account/orders/_id" */))
const _5d6db18e = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _4461b724 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\account\\recover\\password.vue' /* webpackChunkName: "pages/account/recover/password" */))
const _7e612590 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _4f08b367 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1411e228 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\newsletter-subscribe.vue' /* webpackChunkName: "pages/newsletter-subscribe" */))
const _2ae415fc = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\order-success.vue' /* webpackChunkName: "pages/order-success" */))
const _b83e7f7e = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\payment-failure.vue' /* webpackChunkName: "pages/payment-failure" */))
const _03d65815 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _3a4f476a = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _5b0059cc = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _58017e37 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _17b78746 = () => interopDefault(import('..\\.shopware-pwa\\source\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _58412aaa,
    name: "account",
    children: [{
      path: "addresses",
      component: _293ebfc7,
      children: [{
        path: "",
        component: _57d896db,
        name: "account-addresses"
      }, {
        path: "add",
        component: _57cf39d8,
        name: "account-addresses-add"
      }, {
        path: "add/:id",
        component: _2511d240,
        name: "account-addresses-add-id"
      }]
    }, {
      path: "orders",
      component: _30bcbb90,
      children: [{
        path: "",
        component: _9ef3121c,
        name: "account-orders"
      }, {
        path: ":id",
        component: _e66ce44c,
        name: "account-orders-id"
      }]
    }, {
      path: "profile",
      component: _5d6db18e,
      name: "account-profile"
    }, {
      path: "recover/password",
      component: _4461b724,
      name: "account-recover-password"
    }]
  }, {
    path: "/checkout",
    component: _7e612590,
    name: "checkout"
  }, {
    path: "/login",
    component: _4f08b367,
    name: "login"
  }, {
    path: "/newsletter-subscribe",
    component: _1411e228,
    name: "newsletter-subscribe"
  }, {
    path: "/order-success",
    component: _2ae415fc,
    name: "order-success"
  }, {
    path: "/payment-failure",
    component: _b83e7f7e,
    name: "payment-failure"
  }, {
    path: "/register",
    component: _03d65815,
    name: "register"
  }, {
    path: "/reset-password",
    component: _3a4f476a,
    name: "reset-password"
  }, {
    path: "/search",
    component: _5b0059cc,
    name: "search"
  }, {
    path: "/wishlist",
    component: _58017e37,
    name: "wishlist"
  }, {
    path: "/*",
    component: _17b78746,
    name: "all"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

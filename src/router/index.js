import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/cookie-clicker",
    name: "cookie-clicker",
    component: () => import("@/views/CookieClickerView.vue"),
  },
  {
    path: "/cookie-clicker2",
    name: "cookie-clicker2",
    component: () => import("@/views/CookieClickerView.vue"),
  },
  {
    path: "/cookie-clicker3",
    name: "cookie-clicker3",
    component: () => import("@/views/CookieClickerView.vue"),
  },
  {
    path: "/cookie-clicker4",
    name: "cookie-clicker4",
    component: () => import("@/views/CookieClickerView.vue"),
  },
  {
    path: "/cookie-clicker5",
    name: "cookie-clicker5",
    component: () => import("@/views/CookieClickerView.vue"),
  },
  {
    path: "/cookie-clicker6",
    name: "cookie-clicker6",
    component: () => import("@/views/CookieClickerView.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () => import("@/views/CookieClickerView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

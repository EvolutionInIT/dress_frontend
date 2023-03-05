import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

import ListDressCatalog from "../views/catalog/ListDressCatalog.vue";
import Dress from "../views/catalog/Dress.vue";

const routes = [
  {
    path: "/",
    component: ListDressCatalog,
    meta: { title: "Прокат платьев в Алматы" },
  },
  {
    path: "/dress",
    name: "Dress",
    component: Dress,
    props: true,
  },
];

const DEFAULT_TITLE = "Прокат платьев в Алматы";
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
  afterEach(to) {
    nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
    });
  },
});

export default router;

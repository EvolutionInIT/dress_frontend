import { createRouter, createWebHistory } from "vue-router";
import i18n from "../i18n";
import { useLangStore } from "../stores/LangStore.js";

import ListDressCatalog from "../views/catalog/ListDressCatalog.vue";
import Dress from "../views/catalog/Dress.vue";

const routes = [
  {
    path: "/",
    redirect: `/${i18n.global.locale}`,
  },
  {
    path: "/:locale",
    children: [
      {
        path: "",
        component: ListDressCatalog,
        meta: { title: "content.common_title" },
      },
      {
        path: "dress/:dress_id",
        name: "Dress",
        component: Dress,
        props: true,
      },
    ],
  },
  {
    path: "/(.*)",
    redirect: (to) => {
      return "/" + i18n.global.locale + to.path;
    },
  },
];
// console.log(i18n.global.t);
// const DEFAULT_TITLE = i18n.global.t("content.category_list_all_categories");
// document.title = DEFAULT_TITLE;

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
  // afterEach(to) {
  //   nextTick(() => {
  //     console.log("yes");
  //     //document.title = to.meta.title || DEFAULT_TITLE;
  //   });
  // },
});

router.beforeEach((to, from, next) => {
  if (to.params?.locale) {
    if (to.params.locale !== useLangStore().currentLocale)
      useLangStore().setLocale({ locale: to.params.locale }, false);
    if (to.meta?.title) document.title = i18n.global.t(to.meta.title);
  }
  next();
});

export default router;

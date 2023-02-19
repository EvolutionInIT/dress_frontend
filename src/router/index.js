import ListDressCatalog from "../views/catalog/ListDressCatalog.vue";
import Dress from "../views/catalog/Dress.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: ListDressCatalog,
  },
  {
    path: "/dress",
    name: "Dress",
    component: Dress,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
  beforeEach(to) {
    if (to.meta.shouldFetch) {
      // name `data` whatever you want
      console.log(to.meta);
      //to.meta.data = await fetchSomething()
    }
  },
});

export default router;

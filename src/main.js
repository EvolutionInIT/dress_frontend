import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
import i18n from "./i18n";
import "virtual:windi.css";

/*добавляет ссылку на роутер в каждый стор пинии*/
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App).use(router).use(pinia).use(i18n);

axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost/api";

app.mount("#app");

import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import kk from "./locales/kk.json";
import ru from "./locales/ru.json";

export default createI18n({
  locale:
    localStorage.getItem("locale") ||
    import.meta.env.VITE_DEFAULT_LOCALE ||
    "en",
  fallbackLocale: "en",
  messages: {
    en,
    kk,
    ru,
  },
});

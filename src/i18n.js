import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE_CODE || "en",
  fallbackLocale: "en",
  messages: {
    en,
    ru,
  },
});

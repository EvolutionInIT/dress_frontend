import { createI18n } from "vue-i18n";
import en from "./locales/ru.json";
import ru from "./locales/ru.json";

export default createI18n({
  locale: import.meta.env.VITE_I18N_LOCALE || "ru",
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "ru",
  messages: {
    en,
    ru,
  },
});

import { defineStore } from "pinia";
import axios from "axios";

export const useLangStore = defineStore("lang-store", {
  state: () => ({
    languages: [],
    currentLang: null,
    currentLocale:
      localStorage.getItem("local") ||
      import.meta.env.VITE_DEFAULT_LOCALE ||
      "en",

    errors: [],
    error: [],
  }),
  actions: {
    async loadLanguages() {
      await axios
        .get("/v1/language/list")
        .then((response) => {
          let languages = response.data.data;
          if (languages.length)
            languages.find((currentLang) => {
              if (currentLang.code === this.currentLocale) {
                this.$patch({
                  currentLang,
                  languages,
                });
              }
            });
        })
        .catch((error) => {
          console.log(error);
          this.errors = error.response.data.errors;
        });
    },
    setLocale(locale, redirect = true) {
      if (this.i18n.locale !== locale) this.i18n.locale = locale;
      if (this.currentLocale !== locale) this.currentLocale = locale;
      localStorage.setItem("locale", locale);
      if (redirect) this.router.push({ params: { locale } });
    },
  },
});

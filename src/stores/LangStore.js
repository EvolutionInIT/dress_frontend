import { defineStore } from "pinia";
import axios from "axios";

export const useLangStore = defineStore("lang-store", {
  state: () => ({
    languages: [],
    currentLang: null,
    currentCode: import.meta.env.VITE_DEFAULT_LOCALE_CODE || "en",

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
              if (currentLang.code === this.currentCode) {
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
    setLocale(code) {
      if (this.i18n.locale !== code) this.i18n.locale = code;
      if (this.currentCode !== code) this.currentCode = code;
    },
  },
});

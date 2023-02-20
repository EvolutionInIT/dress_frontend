import { defineStore } from "pinia";
import axios from "axios";

export const useDressCatalog = defineStore("dress-catalog", {
  state: () => ({
    dresses: [],
    dress: null,

    errors: [],
    error: [],
  }),
  actions: {
    async loadDressCatalog() {
      await axios
        .get("/dress/list")
        .then((response) => {
          this.dresses = response.data.data;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    async getDress(params) {
      if (params)
        await axios
          .get("/dress", { params: params })
          .then((response) => {
            this.dress = response.data.data;
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
    },
  },
});

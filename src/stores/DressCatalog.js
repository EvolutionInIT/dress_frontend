import { defineStore } from "pinia";
import axios from "axios";

export const useDressCatalog = defineStore("dress-catalog", {
  state: () => ({
    dresses: [],
    dress: null,

    categories: [],
    category_id: undefined,

    errors: [],
    error: [],
  }),
  actions: {
    async loadDressCatalog() {
      await axios
        .get("/v1/dress/list?per_page=100", {
          params: { category_id: this.category_id },
        })
        .then((response) => {
          this.dresses = response.data.data;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    async changeCategory(category_id) {
      this.category_id = category_id;
      this.loadDressCatalog();
    },

    async loadCategories() {
      await axios
        .get("/v1/category/list?per_page=100")
        .then((response) => {
          this.categories = [
            { category_id: undefined, title: "Все категории" },
            ...response.data.data,
          ];
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    async getDress(params) {
      if (params)
        return await axios
          .get("/v1/dress", { params: params })
          .then((response) => {
            this.dress = response.data.data;
            return this.dress;
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
    },
  },
});

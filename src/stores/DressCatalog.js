import { defineStore } from "pinia";
import { useLangStore } from "./LangStore.js";
import { useCurrencyStore } from "./CurrencyStore.js";

import axios from "axios";

export const useDressCatalog = defineStore("dress-catalog", {
  state: () => ({
    dresses: [],
    dress: null,

    categories: [],
    category: {
      category_id: undefined,
      title: "",
    },

    errors: [],
    error: [],
  }),
  actions: {
    async loadDressCatalog() {

      const lang = useLangStore().currentLocale;
      const currencyCode = useCurrencyStore().currentCode;
      //const currencySymbol = useCurrencyStore().currentSymbol;
      await axios
          .get("/v1/client/rent/dress/list?per_page=100", {
            params: {
              category_id: this.category_id,
              lang,
              currencyCode,
              //currencySymbol
            },
          })
          .then((response) => {
            this.dresses = response.data.data;
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
    },
    async changeCategory(item) {
      this.category = item;
      await this.loadDressCatalog();
    },

    async loadCategories() {
      const lang = useLangStore().currentLocale;
      await axios
          .get("/v1/client/rent/category/list?per_page=100", {
            params: {
              category_id: this.category_id,
              lang,
            },
          })
          .then((response) => {
            this.categories = [
              {
                category_id: undefined,
                title: this.i18n.t("content.category_list_all_categories"),
              },
              ...response.data.data,
            ];
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
    },

    async getDress(params) {
      if (params) {
        params.lang = useLangStore().currentLocale;
        params.currency = useCurrencyStore().currentCode;
        //params.symbol = useCurrencyStore().currentSymbol;
        return await axios
            .get("/v1/dress", { params: params })
            .then((response) => {
              this.dress = response.data.data;
              return this.dress;
            })
            .catch((error) => {
              this.errors = error.response.data.errors;
            });
      }
    },
  },
});

// import { defineStore } from "pinia";
// import { useLangStore } from "./LangStore.js";
//
// import axios from "axios";
//
// export const useDressCatalog = defineStore("dress-catalog", {
//   state: () => ({
//     dresses: [],
//     dress: null,
//
//     categories: [],
//     category_id: undefined,
//
//     errors: [],
//     error: [],
//   }),
//   actions: {
//     async loadDressCatalog() {
//       const lang = useLangStore().currentLocale;
//       await axios
//         .get("/v1/dress/list?per_page=100", {
//           params: {
//             category_id: this.category_id,
//             lang,
//           },
//         })
//         .then((response) => {
//           this.dresses = response.data.data;
//         })
//         .catch((error) => {
//           this.errors = error.response.data.errors;
//         });
//     },
//     async changeCategory(category_id) {
//       this.category_id = category_id;
//       this.loadDressCatalog();
//     },
//
//     async loadCategories() {
//       const lang = useLangStore().currentLocale;
//       await axios
//         .get("/v1/category/list?per_page=100", {
//           params: {
//             category_id: this.category_id,
//             lang,
//           },
//         })
//         .then((response) => {
//           this.categories = [
//             {
//               category_id: undefined,
//               title: this.i18n.t("content.category_list_all_categories"),
//             },
//             ...response.data.data,
//           ];
//         })
//         .catch((error) => {
//           this.errors = error.response.data.errors;
//         });
//     },
//
//     async getDress(params) {
//       if (params) {
//         params.lang = useLangStore().currentLocale;
//         return await axios
//           .get("/v1/dress", { params: params })
//           .then((response) => {
//             this.dress = response.data.data;
//             return this.dress;
//           })
//           .catch((error) => {
//             this.errors = error.response.data.errors;
//           });
//       }
//     },
//   },
// });

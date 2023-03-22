<script>
import DropDown from "../../components/DropDown.vue";
import ItemDressCatalog from "./ItemDressCatalog.vue";
import { mapActions, mapState } from "pinia";
import { useDressCatalog } from "../../stores/DressCatalog";

export default {
  components: {
    ItemDressCatalog,
    DropDown,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useDressCatalog, [
      "loadDressCatalog",
      "loadCategories",
      "changeCategory",
    ]),
  },
  computed: {
    ...mapState(useDressCatalog, ["dresses", "categories", "category"]),
  },
  created() {
    this.loadDressCatalog();
    this.loadCategories();
  },
};
</script>

<template>
  <!-- from https://tailblocks.cc/ ECOMMERCE section -->
  <section class="text-gray-600 body-font">
    <div class="container px-5 mx-auto">
      <div class="flex flex-row-reverse mb-5 <sm:mb-3">
        <DropDown
          v-if="categories.length"
          :init-item="category"
          :items="categories"
          :change="changeCategory"
          index="category_id"
        />
      </div>
      <div class="flex flex-wrap -m-4">
        <ItemDressCatalog
          v-for="(dress, key) in dresses"
          :dress="dress"
          :key="key"
        />
      </div>
    </div>
  </section>
</template>

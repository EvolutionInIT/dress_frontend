<script>
import ItemDressCatalog from "./ItemDressCatalog.vue";
import { mapActions, mapState } from "pinia";
import { useDressCatalog } from "../../stores/DressCatalog";

export default {
  components: {
    ItemDressCatalog,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useDressCatalog, ["loadDressCatalog"]),
  },
  computed: {
    ...mapState(useDressCatalog, ["dresses"]),
  },
  created() {
    this.loadDressCatalog();
  },
};
</script>

<template>
  <!-- from https://tailblocks.cc/ ECOMMERCE section -->
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
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

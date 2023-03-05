<script>
export default {
  props: {
    items: { type: Array, default: [] },
    change: { type: Function, required: true },
    index: { type: String, required: true, default: "" },
  },
  data() {
    return {
      hiddenItems: true,
      currentItem: {
        title: "",
      },
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    items(value) {
      if (value.length) this.currentItem = value[0];
    },
  },
};
</script>

<template>
  <!-- https://www.hyperui.dev/components/application-ui/dropdown -->
  <div class="relative" @mouseover="hiddenItems = false">
    <div
      class="inline-flex items-center overflow-hidden rounded-md border bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700"
    >
      <a href="#" class="px-4 py-2 text-sm leading-none">
        {{ currentItem.title }}
      </a>

      <button class="h-full p-2">
        <span class="sr-only">Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      :class="{ hidden: hiddenItems }"
      class="absolute right-0 z-1 mt-2 w-65 rounded-md border border-gray-100 bg-white shadow-lg"
      @mouseleave="hiddenItems = true"
    >
      <div v-for="(item, key) in items" :key="key" class="p-2">
        <a
          href="#"
          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          @click="
            currentItem = item;
            hiddenItems = true;
            change(item[this.index]);
          "
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

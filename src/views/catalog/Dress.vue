<script>
import { useDressCatalog } from "../../stores/DressCatalog";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      photoSelectedIndex: 0,
    };
  },
  created() {
    this.getDress({ dress_id: this.$route.query.dress_id || undefined });
  },
  methods: {
    ...mapActions(useDressCatalog, ["getDress"]),
  },
  computed: {
    ...mapState(useDressCatalog, ["dress"]),
  },
};
</script>

<template>
  <!-- take from https://www.hyperui.dev/components/ecommerce/products -->
  <section v-if="dress">
    <div class="relative mx-auto max-w-screen-xl px-4 py-8">
      <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            :alt="dress.title"
            :src="dress.photo[photoSelectedIndex].image"
            class="aspect-square w-full h-250 rounded-xl object-cover"
          />

          <ul class="mt-1 flex gap-5">
            <li v-for="(photo, key) in dress.photo" :key="key" class="h-50">
              <img
                :src="photo.image"
                class="aspect-square w-full h-full rounded-xl object-cover"
                @click="photoSelectedIndex = key"
              />
            </li>
          </ul>
        </div>

        <div class="sticky top-0">
          <div class="mt-8 flex justify-between">
            <div class="w-full space-y-2">
              <h1 class="text-xl font-bold sm:text-2xl">
                {{ dress.title }}
              </h1>

              <p class="text-sm">
                {{ dress.category.map((item) => item.title).join(", ") }}
              </p>
            </div>
          </div>

          <div class="mt-4">
            <div class="prose max-w-none">
              <p>
                {{ dress.description }}
              </p>
            </div>
          </div>

          <form class="mt-8">
            <fieldset>
              <legend class="mb-1 text-sm font-medium">Цвет:</legend>
              <div class="mt-2 flex flex-wrap gap-1">
                <label for="color_green" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_green"
                    name="color"
                    class="peer sr-only"
                    checked
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>

                <label for="color_blue" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_blue"
                    name="color"
                    class="peer sr-only"
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>

                <label for="color_pink" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_pink"
                    name="color"
                    class="peer sr-only"
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>

                <label for="color_red" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_red"
                    name="color"
                    class="peer sr-only"
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>

                <label for="color_indigo" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_indigo"
                    name="color"
                    class="peer sr-only"
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <legend class="mb-1 text-sm font-medium">Размер:</legend>

              <div class="flex flex-wrap gap-1">
                <label for="size_xs" class="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    id="size_xs"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    XS
                  </span>
                </label>

                <label for="size_s" class="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    id="size_s"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    S
                  </span>
                </label>

                <label for="size_m" class="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    id="size_m"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    M
                  </span>
                </label>

                <label for="size_l" class="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    id="size_l"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    L
                  </span>
                </label>

                <label for="size_xl" class="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    id="size_xl"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    XL
                  </span>
                </label>
              </div>
            </fieldset>

            <div class="mt-8 flex gap-4">
              <p class="text-lg">Цена:</p>
              <p class="text-lg">
                ₸{{
                  dress.price
                    .toLocaleString("kk", {
                      style: "currency",
                      currency: "KZT",
                      minimumFractionDigits: Math.ceil(dress.price % 1) * 2,
                    })
                    .replace(" ", ",")
                }}
                / сутки
              </p>
            </div>

            <div class="mt-8 flex gap-4">
              <button
                type="submit"
                class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
              >
                Забронировать
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

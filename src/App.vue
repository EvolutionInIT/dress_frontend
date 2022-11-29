<template>
  <div
    id="app"
    class="flex min-h-screen flex-col items-center justify-center gap-4"
  >
    <HelloWorld msg="Hello from Tailwind inside VueJS" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

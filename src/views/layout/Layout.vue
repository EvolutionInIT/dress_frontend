<script>
import Header from "./Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <Header />
  <router-view />
</template>

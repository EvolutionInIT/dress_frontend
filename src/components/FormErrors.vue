<script>
export default {
  props: {
    error: { type: Array, default: [] },
  },
};
</script>

<template>
  <div if="error && error.length" class="text-sm text-red-500">
    {{ error && error.map((item) => $i18n.t("validation." + item)).join(", ") }}
  </div>
</template>

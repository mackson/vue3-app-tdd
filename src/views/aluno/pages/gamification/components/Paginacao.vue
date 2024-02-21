<template>
  <button v-bind="$props">
    Página Atual {{ pagina }}
  </button>
  <button v-bind="$props">
    Proxima Página {{ pagina }}
  </button>
  <button v-bind="$props">
    Página Anterior {{ pagina }}
  </button>
</template>

<script setup>
defineProps({
  pagina: {
    type: Number,
    default: "Button",
  },
});
</script>

<template>
  <div v-bind="$props">
    {{ pontos }}
  </div>
</template>

<script setup>
defineProps({
  pontos: {
    type: Number,
    default: "Div",
  },
});
</script>

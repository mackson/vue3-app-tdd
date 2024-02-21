<template>
  <div
    class="icon-wrapper"
    :style="{ background: hexToRgb(colorSelected) }"
  >
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  name: 'IconWrapper',
  props: {
    colorSelected: {
      type: String,
      default: 'transparent', // Cor de fundo padrão é transparente
    },
  },
  methods: {
    // Função para converter cor hexadecimal em RGB
    hexToRgb(hex) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
      hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b
      })

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      const rgb = result
        ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
        : null

      if (rgb) {
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`
      }

      return null
    },
  },
}
</script>
  
<style>
.icon-wrapper {
  width: 71.027px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
}
</style>
  
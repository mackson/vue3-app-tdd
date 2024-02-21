<script setup>
  import triangleLight from '@/assets/images/misc/triangle-light.png'
  import trophy from '@/assets/images/misc/trophy.png'
</script>

<script>

  export default {
    props: ['pontos'],
  }
</script>

<template>
  <VCard
    title="Parabéns Marcelo! 🎉"
    subtitle="Você foi o melhor aluno neste semestre"
    class="card-game-container"
  >
    <VCardText>
      <h5 class="text-2xl font-weight-medium text-primary">
        1000 Pontos
      </h5>
      <p>78% de Aumento 🚀</p>
      <VBtn size="small">
        Ver pontos
      </VBtn>
    </VCardText>

    <!-- Triangle Background -->
    <VImg
      :src="triangleLight"
      class="triangle-bg flip-in-rtl"
    />

    <!-- Trophy -->
    <VImg
      :src="trophy"
      class="trophy"
    />
  </VCard>
</template>

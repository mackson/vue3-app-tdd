<script setup>
  import PontosTotais from '@/views/aluno/pages/gamification/components/PontosTotais.vue'
  import PontosDisciplinas from '@/views/aluno/pages/gamification/components/PontosDisciplinas.vue'
  import GraficoEvolucaoSemanal from '@/views/aluno/pages/gamification/components/GraficoEvolucaoSemanal.vue'
  import PontosHabilidades from '@/views/aluno/pages/gamification/components/PontosHabilidades.vue'
  import RankingAlunos from '@/views/aluno/pages/gamification/components/RankingAlunos.vue'
  import GraficoEvolucaoAnual from '@/views/aluno/pages/gamification/components/GraficoEvolucaoAnual.vue'
</script>

<template>

  <VRow class="pa-6">
    <VCol
      cols="12"
      md="4"
    >
      <PontosTotais class="mb-4" />
      <PontosDisciplinas class="mb-4"  />
    </VCol>

    <VCol cols="12" md="4">
      <GraficoEvolucaoSemanal class="mb-4" />
      <PontosHabilidades class="mb-4" />
    </VCol>

    <VCol cols="12" md="4">
      <RankingAlunos class="mb-4" />
      <GraficoEvolucaoAnual />
    </VCol>

  </VRow>

</template>

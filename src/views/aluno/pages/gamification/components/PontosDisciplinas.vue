<script>
  import { 
    IconNumbers,
    IconMessageLanguage,
    IconGlobe,
    IconTrees,
  } from '@tabler/icons-vue'

  export default {
    props: ['username'],
    data: () => ({
      topics : [
        {
          title: 'Matemática',
          subtitle: 'Números, Operações, Medidas, Lógica, Algebra, Geometria, Funções',
          stats: '599',
          icon: IconNumbers,
          color: 'primary',
        },
        {
          title: 'Linguagens',
          subtitle: 'Língua Portuguesa, Língua Inglesa, Artes',
          stats: '125',
          icon: IconMessageLanguage,
          color: 'success',
        },
        {
          title: 'Ciências da Natureza',
          subtitle: 'Biologia, Física, Química',
          stats: '1560',
          icon: IconTrees,
          color: 'warning',
        },
        {
          title: 'Ciências Humanas',
          subtitle: 'Geografia e História',
          stats: '700',
          icon: IconGlobe,
          color: 'info',
        },
        
      ]
    }),
  }
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>XP por disciplinas</VCardTitle>

      <template #append>
        <div class="me-n3">
          <VBtn
            icon
            size="x-small"
            variant="text"
            color="default"
          >
            <VIcon
              size="24"
              icon="mdi-dots-vertical"
            />
          </VBtn>
        </div>
      </template>
    </VCardItem>

   
    <VCardText class="pt-4">

      <h6 class="text-sm mb-12">
        <span>Estou mandando muito bem 😎</span>
        <span class="font-weight-regular"></span>
      </h6>
   
      <VList class="card-list mt-9">
        <VListItem
          v-for="topic in topics"
          :key="topic.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              :icon="topic.icon"
              :color="topic.color"
            />
          </template>

          <VListItemTitle class="text-sm font-weight-semibold mb-1">
            {{ topic.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ topic.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div>
              <h6 class="text-sm mb-2">
                {{ topic.stats }}
              </h6>
              <VProgressLinear
                :color="topic.color"
                model-value="80"
              />
            </div>
          </template>
        </VListItem>
        <VBtn block>
        Ver Mais
      </VBtn>
      </VList>
    </VCardText>
    
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2.625rem;
}
</style>

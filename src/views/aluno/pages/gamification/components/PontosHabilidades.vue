<script setup>
import aviato from '@/assets/images/logos/aviato.png'
import bitbank from '@/assets/images/logos/bitbank.png'
import zipcar from '@/assets/images/logos/zipcar.png'

</script>

<script>
  import { 
    IconBellRinging,
    IconLogout,
    IconDeviceGamepad2,
  } from '@tabler/icons-vue'

  export default {
    props: ['username'],
    data: () => ({
      earnings : [
        {
          avatar: IconBellRinging,
          title: 'Indentificação',
          subtitle: 'Observar, Identificar, Reconhecer',
          amount: '1200',
          progress: 'primary',
        },
        {
          avatar: IconLogout,
          title: 'Transformação',
          subtitle: 'Ordenar, Medir, Calcular, Classificar',
          amount: '350',
          progress: 'info',
        },
        {
          avatar: IconDeviceGamepad2,
          title: 'Compreensão',
          subtitle: 'Avaliar, Explicar, Criticar, Criar',
          amount: '560',
          progress: 'secondary',
        },
      ]
    }),
  }
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>XP por Habilidades</VCardTitle>

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
   
      <VList class="card-list mt-9">
        <VListItem
          v-for="earning in earnings"
          :key="earning.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              :icon="earning.avatar"
              :color="earning.progress"
            />
          </template>

          <VListItemTitle class="text-sm font-weight-semibold mb-1">
            {{ earning.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ earning.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div>
              <h6 class="text-sm mb-2">
                {{ earning.amount }}
              </h6>
              <VProgressLinear
                :color="earning.progress"
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

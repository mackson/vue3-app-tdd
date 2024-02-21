<script setup>
  import hand from '@/assets/images/fund2/hand.png'
  import UserProfile from '@/views/aluno/components/UserProfile.vue'

</script>

<script>
  export default {
    props: ['text', 'status'],
   
    data: () => ({
      openModalExit: false,
      openRightPanelGames: false,
      openRightPanelNotifications: false,
    }),
  }
</script>

<template>
 
  <div v-if="status === 'hello'" class="d-flex justify-center align-center pa-4" style="color: white;">
    <span class="mr-2">Bom dia,</span>
    <strong>{{text}}</strong>
    <v-img
      :src="hand"
      alt="hello"
      width="30"
      class="ml-4"
    ></v-img>
  </div>
  <div v-else class="d-flex justify-center align-center pa-2">
    <v-btn
      icon
      variant="tonal"
      color="grey-50"
      size="small"
      class="me-2"
      href="/"
    >
      <IconArrowLeft />
    </v-btn>
    <strong class="text-h6 text-white">{{ text }}</strong>
  </div>

  <VSpacer />

  
  
  <UserProfile :username="text" />
  <!-- Modais de Painel Direito e Sair -->
  
</template>

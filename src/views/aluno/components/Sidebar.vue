<script setup>
  import logo from '@/assets/images/fund2/logo.png'
  import avatar from '@/assets/images/avatars/avatar-1.png'
</script>
<script>
import { 
  IconHome, 
  IconNotes,
  IconUsers,
  IconPhotoHeart,
  IconBook,
  IconHelpCircle,
} from '@tabler/icons-vue';

 export default {
    props: ['username'],
    data: () => ({
        items: [
          {text:'Início', icon: IconHome, url:'/'},
          {text:'Recursos de Aprendizagem', icon: IconNotes, url:'/recursos'},
          {text:'Mural da Turma', icon: IconUsers, url:'/mural'},
          {text:'Álbum de Fotos', icon: IconPhotoHeart, url:'/album'},
          {text:'Livros Digitais', icon: IconBook, url:'/livros'},
          {text:'Ajuda', icon: IconHelpCircle, url:'/ajuda'},
        ],
    }),
 }
</script>


<template>
  <!-- 👉 Nav header -->
  
  <div class="d-flex justify-center align-center pa-4">
    <RouterLink
      to="/"
      class="app-logo d-flex align-center"
    >
      <v-avatar size="x-large">
        <v-img
          :src="logo"
          alt="logo"
        ></v-img>
      </v-avatar>
    </RouterLink>
  </div>

  <v-list class="pa-4">
    <v-list-item
      :prepend-avatar="avatar"
      :title="username"
      subtitle="Ver Perfil"
      rounded="pill"
      to="/perfil"
      height="50"
    ></v-list-item>
  </v-list>

  <v-list nav v-for="(item, i) in items" :key="i">
    <v-list-item 
      :prepend-icon="item.icon"
      :href="item.url"
      :title="item.text"
      rounded="pill"
      class="pl-6 font-weight-bold"
    >
    </v-list-item>
  </v-list>

</template>

<style lang="scss">

</style>

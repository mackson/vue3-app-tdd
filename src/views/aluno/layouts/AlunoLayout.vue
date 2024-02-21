<script setup>
  // Components
  import Sidebar from '../components/Sidebar.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'

  import { IconMenu2 } from '@tabler/icons-vue'

  import { useRoute } from 'vue-router';
  import { useDisplay } from 'vuetify'

  const route = useRoute();
  const {lgAndUp, mdAndDown} = useDisplay()
  const drawer = ref(lgAndUp.value)

</script>

<script>
  export default {
    props: ['username'],
  }
</script>

<template>
  <!-- 👉 Drawer / Sidebar content -->
  <!-- <VNavigationDrawer
    v-model="drawer"
    app
    expand-on-hover
    rail
    rail-width="85"
    style="background: #ffffff; color: rgb(63, 63, 63);"
    class="layout-vertical-nav position-fixed"
    :width="320"
  >
    <Sidebar :username="route.meta.header.text" />
  </VNavigationDrawer> -->

  <!-- 👉 navbar / header -->
  <VAppBar
    app
    flat
    class="px-6"
    color="primary"
  >
    <template
      v-if="mdAndDown"
      #prepend
    >
      <VBtn
        icon
        variant="tonal"
        color="grey-50"
        class="me-2"
        size="small"
      >
        <IconMenu2 @click="drawer = true" />
      </VBtn>
    </template>

    <Header :text="route.meta.header.text" :status="route.meta.header.status" />
  </VAppBar>

  <!-- 👉 Pages -->
  <VMain class="w-100">
    <RouterView />
  </VMain>

  <!-- 👉 Footer -->
  <VFooter
    app
    style="background: transparent"
  >
    <Footer />
  </VFooter>

</template>

<style lang="scss">
  /* @use "@layouts/styles/default-layout"; */
</style>

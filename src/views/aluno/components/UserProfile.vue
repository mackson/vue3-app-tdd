<script setup>
  import avatar1 from '@/assets/images/avatars/avatar-1.png'

  const avatarBadgeProps = {
    dot: true,
    location: 'bottom right',
    offsetX: 3,
    offsetY: 3,
    color: 'success',
    bordered: true,
  }
</script>

<script>
  import {
  IconDeviceGamepad2,
  IconBook,
  IconHelpCircle,
  IconLogout,
} from '@tabler/icons-vue';

  export default {
    props: ['username'],
  }
</script>

<template>
  <VBadge v-bind="avatarBadgeProps">
    <VAvatar
      style="cursor: pointer;"
      color="primary"
      variant="tonal"
    >
      
    <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge v-bind="avatarBadgeProps">
                  <VAvatar
                    color="primary"
                    size="40"
                    variant="tonal"
                  >
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{ username }}
            </VListItemTitle>
            <VListItemSubtitle>
                7500XP
            </VListItemSubtitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Meu Perfil -->
          <VListItem to="/">
            <template #prepend>
              <VIcon
                class="me-2"
                :icon="IconBook"
                size="22"
              />
            </template>

            <VListItemTitle>Livro</VListItemTitle>
          </VListItem>

          <!-- 👉 Gamification -->
          <VListItem to="/gamification">
            <template #prepend>
              <VIcon
                class="me-2"
                :icon="IconDeviceGamepad2"
                size="22"
              />
            </template>

            <VListItemTitle>Gamificação</VListItemTitle>
          </VListItem>

         
          <!-- 👉 Ajuda -->
          <VListItem to="/ajuda">
            <template #prepend>
              <VIcon
                class="me-2"
                :icon="IconHelpCircle"
                size="22"
              />
            </template>

            <VListItemTitle>Ajuda</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>

<script setup>
  import avatar1 from '@/assets/images/avatars/avatar-1.png'
  import avatar2 from '@/assets/images/avatars/avatar-2.png'
  import avatar3 from '@/assets/images/avatars/avatar-3.png'
  import avatar4 from '@/assets/images/avatars/avatar-4.png'
  import avatar5 from '@/assets/images/avatars/avatar-5.png'
  import avatar6 from '@/assets/images/avatars/avatar-6.png'
  import avatar7 from '@/assets/images/avatars/avatar-7.png'

  const data = [
    {
      id: 1,
      fullName: 'Marcelo Alves',
      level: 'Platinum',
      experience: 7555,
      avatar: avatar1,
    },
    {
      id: 2,
      fullName: 'Lucia Maria',
      level: 'Gold',
      experience: 6555,
      avatar: avatar2,
    },
    {
      id: 3,
      fullName: 'Juan Pedro',
      level: 'Gold',
      experience: 4005,
      avatar: avatar3,
    },
    {
      id: 4,
      fullName: 'Luana Santos',
      level: 'Silver',
      experience: 5405,
      avatar: avatar4,
    },
    {
      id: 5,
      fullName: 'Lucas Almeida',
      level: 'Bronze',
      experience: 3054,
      avatar: avatar5,
    },
    {
      id: 6,
      fullName: 'Bruna Medeiros',
      level: 'Bronze',
      experience: 2054,
      avatar: avatar6,
    },
    {
      id: 7,
      fullName: 'Gustavo Gomes',
      level: 'Bronze',
      experience: 1054,
      avatar: avatar7,
    },
  ]
  
  const headers = [
    '#',
    'NOME',
    'XP',
  ]
  const usreList = data
</script>

<template>
  <VCard>
    <VCardTitle>Ranking / Divisão Gold 🏆</VCardTitle>
    <VTable
      :headers="headers"
      :items="usreList"
      item-key="fullName"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header"
          >
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="row in data"
          :key="row.fullName"
        >
          <!-- name -->
          <td v-text="`${row.id}`" />
          <td>
            <v-list>
              <v-list-item
                :prepend-avatar="row.avatar"
                :title="row.fullName"
                :subtitle="row.level"
                rounded="pill"
                color="primary"
                to="/perfil"
              ></v-list-item>
            </v-list>
            <!-- <div class="d-flex flex-column">
              <span class="d-block font-weight-semibold text--primary text-truncate">{{ row.fullName }}</span>
              <small>{{ row.level }}</small>
            </div> -->
          </td>

          <td v-text="`${row.experience}`" />

        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

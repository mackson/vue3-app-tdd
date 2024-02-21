<script setup>
  import { 
    IconSquareRoundedX,
    IconLayoutDashboard,
  } from '@tabler/icons-vue'
</script>

<script>
  export default {
    props: {
      title: String,
      value: Boolean,
      mcolor: String,
    },
    computed: {
      show: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('update:modelValue', value)
        }
      }
    }
  }
</script>

<template>

  <v-dialog
    v-model="show"
    transition="dialog-top-transition"
    width="auto"
  >
    <v-card>
      <v-toolbar :color="mcolor">
        <v-toolbar-title>
          <div class="d-flex align-center text-center text-h5 font-weight-bold text-white">
            <IconLayoutDashboard class="mr-2" />
            {{ title }}
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          variant="text"
          color="grey-50"
          @click.stop="show=false"
        >
          <IconSquareRoundedX />
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-card-actions class="justify-end">
      </v-card-actions>
    </v-card>
    
  </v-dialog>

</template>

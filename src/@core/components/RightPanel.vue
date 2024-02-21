<script setup>
    import {
      IconSquareRoundedXFilled,
      IconLayoutDashboard,
    } from '@tabler/icons-vue'
</script>
<script>
  export default {
    props: {
      title: String,
      value: Boolean,
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
    width="400"
    color="grey-50"
    scrollable
    fullscreen
    transition="dialog-top-transition"
    class="custom-right-panel"
  >
    <v-card color="grey-100">
      <v-toolbar color="secondary">
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
          <IconSquareRoundedXFilled />
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
<style lang="scss">
  .v-dialog--fullscreen .v-overlay__content {
    top:0 !important;
    right: 0 !important;
    left:auto !important;
  }
</style>


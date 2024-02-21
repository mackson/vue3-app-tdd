<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()
const currentTheme = computed(() => {
  return vuetifyTheme.current.value.colors
})
const variableTheme = computed(() => {
  return vuetifyTheme.current.value.variables
})
const series = [{
  data: [
    200,
    2500,
    800,
    5000,
    1500,
    7555,
  ],
}]
const chartOptions = computed(() => {
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: true },
    },
    tooltip: { enabled: true },
    grid: {
      borderColor: `rgba(${ hexToRgb(String(variableTheme.value['border-color'])) },${ variableTheme.value['border-opacity'] })`,
      strokeDashArray: 6,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
      padding: {
        top: -10,
        left: -7,
        right: 5,
        bottom: 5,
      },
    },
    stroke: {
      width: 3,
      lineCap: 'butt',
      curve: 'straight',
    },
    colors: [currentTheme.value.primary],
    markers: {
      size: 6,
      offsetY: 4,
      offsetX: -2,
      strokeWidth: 3,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [{
        size: 5.5,
        seriesIndex: 0,
        strokeColor: currentTheme.value.primary,
        fillColor: currentTheme.value.surface,
        dataPointIndex: series[0].data.length - 1,
      }],
      hover: { size: 7 },
    },
    xaxis: {
      labels: { show: true },
      axisTicks: { show: true },
      axisBorder: { show: true },
    },
    yaxis: { labels: { show: true } },
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h6 class="text-h6">
        Evolução Anual
      </h6>
      <VueApexCharts
        type="line"
        :options="chartOptions"
        :series="series"
        :height="200"
      />

      <p class="text-center font-weight-semibold mb-0">
        Evolução Anual
      </p>
    </VCardText>
  </VCard>
</template>

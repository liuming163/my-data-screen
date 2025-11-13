<template>
  <div class="center-panel">
    <div id="myEChartsBar"></div>
    <div id="myEChartsLine"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, nextTick } from 'vue'

const echarts = inject('echarts')

onMounted(() => {
  nextTick(() => {
    changeBar()
    changeLine()
  })
})

const changeBar = () => {
  const myEChart = echarts.init(document.getElementById('myEChartsBar'))
  const option = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28, 25],
      },
    ],
  }
  myEChart.setOption(option)
  window.addEventListener('resize', () => {
    myEChart.resize()
  })
}

const changeLine = () => {
  const myEChart = echarts.init(document.getElementById('myEChartsLine'))
  const option = {
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 43, 49],
        type: 'line',
        stack: 'x',
      },
      {
        data: [5, 4, 3, 5, 10],
        type: 'line',
        stack: 'x',
      },
    ],
  }
  myEChart.setOption(option)
  window.addEventListener('resize', () => {
    myEChart.resize()
  })
}
</script>

<style lang="scss" scoped>
.center-panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  #myEChartsBar {
    width: 100%;
    height: 500px;
  }
  #myEChartsLine {
    width: 100%;
    height: 500px;
  }
}
</style>

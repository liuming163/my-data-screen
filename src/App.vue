// App.vue
<template>
  <div id="app" :style="scaleStyle" class="app-container">
    <Header class="header" />
    <div class="main-content">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
    <Footer class="footer" />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import LeftPanel from './views/LeftPanel.vue'
import CenterPanel from './views/CenterPanel.vue'
import RightPanel from './views/RightPanel.vue'
import Footer from './components/Footer.vue'

const scaleStyle = ref({})

const updateScale = () => {
  // 设计稿尺寸
  const baseWidth = 1920
  const baseHeight = 1080
  // 当前窗口尺寸
  const currentWidth = window.innerWidth
  const currentHeight = window.innerHeight

  // 计算缩放比例，同时考虑宽高，取最小值以保证内容完全显示
  const scaleX = currentWidth / baseWidth
  const scaleY = currentHeight / baseHeight
  const scale = Math.min(scaleX, scaleY)

  scaleStyle.value = {
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    width: `${baseWidth}px`,
    height: `${baseHeight}px`,
  }
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
})
</script>

<style lang="scss" scoped>
.app-container {
  box-sizing: border-box;

  .header {
    height: 100px;
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    height: calc(100% - 160px);
    margin: 0 10px;
  }

  .footer {
    height: 60px;
  }
}
</style>

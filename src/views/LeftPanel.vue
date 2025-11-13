<template>
  <div class="left-panel">
    <div class="left-panel-header">
      <h2>Left Panel</h2>
    </div>
    <div class="left-panel-content">
      <p>Left Panel Content</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.left-panel {
  width: 300px;
  height: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;

  .left-panel-header {
    margin-bottom: 20px;
  }
  .left-panel-content {
    height: calc(100% - 60px);
    overflow-y: auto;
  }
}
</style>

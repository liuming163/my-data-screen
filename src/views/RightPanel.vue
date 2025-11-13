<template>
  <div class="right-panel">
    <div class="right-panel__header">
      <h2>Right Panel</h2>
    </div>
    <div class="right-panel__content">
      <p>Right Panel Content</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.right-panel {
  width: 300px;
  height: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;

  .right-panel__header {
    margin-bottom: 20px;
  }

  .right-panel__content {
    height: calc(100% - 60px);
    overflow-y: auto;
  }
}
</style>

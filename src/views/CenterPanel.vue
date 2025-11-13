<template>
  <div class="center-panel">
    <div class="center-panel-content">center-panel</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.center-panel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .center-panel-content {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>

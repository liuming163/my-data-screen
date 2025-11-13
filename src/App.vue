<template>
  <div>
    <button @click="$router.push('/home')">home</button>
    <button @click="$router.push('/about')">about</button>
  </div>

  <router-view></router-view>
</template>

<style lang="scss">
@use '@/assets/styles/common.scss';
</style>

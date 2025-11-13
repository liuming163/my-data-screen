// home.vue

<template>
  <div class="common-color">home</div>
</template>

<script setup>
import { useUserStore } from '@/stores'
const userStore = useUserStore()
console.log('userStore', userStore)
</script>

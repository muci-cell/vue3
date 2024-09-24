<script setup lang="ts">
import JDay from '/@/components/three-line-pic/src/DMonth.vue'
// import { YwzChart, dayConfig, monthConfig } from '/@/components/three-line-pic'
// const options = dayConfig()
// const options = monthConfig()
const show = ref(true)
</script>
<template>
  <div class="EchartsPage">
    <!-- <YwzChart :option="options" height="800px" /> -->
     <!-- v-model 是用于双向绑定的 -->
      <!-- const show = ref(true) -->
    <JDay v-model:show="show" />
  </div>
</template>
<style scoped></style>

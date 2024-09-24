<template>
  <div>
    <div ref="myRef" :style="{ width: '100%', height: props.height }"></div>
  </div>
</template>

<script lang="ts" setup>
/*单向数据流：

Vue 采用单向数据流，即父组件通过 props 向子组件传递数据，子组件通过 emit 向父组件发送事件。
子组件通过 props 接收数据，无需直接访问或导入父组件中的变量。
    <!-- const options = ref({}) -->
    <YwzChart :option="options" height="800px" />
    这里使用的ref  所以不需要使用emit传事件
响应式系统：

当父组件中的 options 发生变化时，由于它是一个响应式的 ref，这些变化会自动反映到子组件中，触发 watch 来重新绘制图表。 */
import { ref, onMounted, markRaw } from 'vue'
import * as echarts from 'echarts'
// 需要通过 props 来接收 option
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {}
    },
  },
  height: {
    type: String,
    default: () => {
      return '300px'
    },
  },
})
const myRef = ref<HTMLElement>()
const chart = ref<any>()
onMounted(() => {
  setTimeout(() => {
    // 初始化echarts实例
    chart.value = markRaw(echarts.init(myRef.value as HTMLElement))
    drawChart()
  }, 500)
})
// 绘制折线图
const drawChart = () => {
  // 父组件传来的实例参数
  chart.value && chart.value.setOption(props.option)
}
window.addEventListener('resize', () => {
  //页面大小变化后Echarts也更改大小
  chart.value.resize()
})
watch(
  () => props.option,
  () => {
    drawChart()
  },
)
</script>

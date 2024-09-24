<script setup lang="ts">
import { defineProps, computed, defineEmits, ref } from 'vue'
import { YwzChart, dayConfig } from '..'
interface Props {
  show: boolean
}
// props 是一种自定义属性，允许父组件向子组件传递数据
// 可以用泛型来接受信息  也可以用 参数直接接受
const props = defineProps<Props>()
const emits = defineEmits(['update:show'])

// Setter：当 visible 被修改时，触发 'update:show' 事件，
// 将新的值传递给父组件，通知父组件更新 show 的状态。
// computed是只读的数据
// 子组件需要监听 props.show（父组件传递的 show），同时也要通过 emits 更新 show 的值回给父组件。
// ref 不能监听 props.show 的变化，也无法将更新传递回父组件。
// 因为visible的变化可能是在el-dialog内部实现的 如果用ref 该数据变化时没办法通知父组件修改props.show传给父类
// 但是使用 computed 在父类就设置了visible的getter和setter 实现了信息双向传递
const visible = computed({
  get: () => {
    return props.show
  },
  set: val => {
    emits('update:show', val)
  },
})
const options = ref({})
const getConfig = async () => {
  // 替换为接口
  const res = await (await import('./mockAPi/jd')).default
  if (res.message === 'success') {
    options.value = dayConfig(
      res.data.odate.map(i => i.split('.')[0].replace(/T/, ' ')),
      res.data.at,
      res.data.td,
      res.data.slp,
    )
  }
}
getConfig()
</script>
<template>
  <!-- v-model：用于需要双向绑定的场景，子组件需要通过 emit 事件通知父组件更新数据。
    :prop（如 :option）：用于单向传递数据，父子组件共享同一个引用，子组件可以直接修改数据，父组件会自动感知到。 -->
  <el-dialog v-model="visible" width="80%" top="2vh">
    <!-- const options = ref({}) -->
    <YwzChart :option="options" height="800px" />
  </el-dialog>
</template>
<style scoped></style>

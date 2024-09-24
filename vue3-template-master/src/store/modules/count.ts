import { defineStore } from 'pinia'
import type { CountInterface } from './types'
export const useCountStore = defineStore({
  id: 'count', // id必填，且需要唯一
  // statestate 定义了 Store 的响应式状态数据。
  // 在这个例子中，state 返回一个对象，包含一个 count 属性，初始值为 0。
  state: (): CountInterface => {
    return {
      count: 0,
    }
  },
  // getters 用于计算衍生状态，类似于组件中的计算属性。
  // 它们基于 state 的值进行计算，且具有缓存功能，只有当依赖的 state 发生变化时才会重新计算。
  getters: {
    doubleCount: state => {
      return state.count * 2
    },
  },
  // actions 用于定义能够修改 state 的方法，
  // 类似于 Vuex 中的 actions 和 mutations。actions 可以包含同步和异步操作。
  actions: {
    // actions 同样支持异步写法
    countAdd() {
      // 可以通过 this 访问 state 中的内容
      this.count++
    },
    countReduce() {
      this.count--
    },
  },
})

<script lang="ts" setup>
import { useUserStore } from '/@/store'
const activeIndex = computed(() => {
  return useRoute().path
})
// 这个 computed 属性本身是一个响应式的引用（ref），
// 当 useUserStore().menuList 变化时，menuList 会自动更新。
const menuList = computed(() => {
  return useUserStore().menuList
})
// 响应式：当依赖项（useRoute().path）变化时，computed 会自动重新计算。
// 缓存：computed 会缓存结果，只有在依赖项变化时才重新计算，避免不必要的计算和性能开销。
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    router
    mode="horizontal"
  >
    <template v-for="menu in menuList" :key="menu.id">
      <!-- 没有子路由的情况 -->
      <el-menu-item v-if="!menu.children" :index="'/main' + menu.path">
        <span>{{ menu.name }}</span>
      </el-menu-item>

      <!-- 存在子路由的情况 -->
      <el-sub-menu v-else :index="'/main' + menu.path">
        <template #title>{{ menu.name }}</template>
        <el-menu-item
          v-for="_menu in menu.children"
          :key="_menu.id"
          :index="'/main' + _menu.path"
          >{{ _menu.name }}</el-menu-item
        >
      </el-sub-menu>
    </template>
  </el-menu>
</template>

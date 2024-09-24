import { createPinia } from 'pinia'
import { useCountStore } from './modules/count'
import { useUserStore } from './modules/user'
import { usePriceStore } from './modules/price'
import { useNetValueStore } from './modules/value'
export default createPinia()
export { useCountStore, useUserStore,usePriceStore ,useNetValueStore}

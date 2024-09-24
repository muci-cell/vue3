import { createApp } from 'vue'
import App from './App.vue'
// 引入 vue-router
import router from './router'
// 引入 pinia
import { usePriceStore, useUserStore } from './store'
import store from './store'
import './assets/css/index.css'
import 'animate.css'
// 单独引入 ElMessage 和 ElMessageBox 的样式
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import { getNetValue, getTradePrice } from './api/data'
import { INetValueResponse, ITradePrice, PriceRequest, ValueRequest } from './api/types/data'
import { useNetValueStore } from './store/modules/value'
const app = createApp(App).use(store)

// 获取基础数据
// await useUserStore().getData()

app.use(router).mount('#app')


// 以下接口测试部分
// 默认值示例
// 默认值示例
const defaultPriceRequest: PriceRequest = {
    symbol: "159941",
    period: "daily",
    start_date: "19700101",
    end_date: "20500101",
    adjust: "hfq",
    timeout: 100,
};
const defaultFundRequest: ValueRequest = {
    fundCode: "159941",
    pageIndex: 1,
    pageSize: 10000,
    startDate: "20000101",
    endDate: "20500101",
    _: 1634567890123,
};

const data = await getNetValue(defaultFundRequest);
const netValueResponse: INetValueResponse = data as unknown as INetValueResponse; // 从响应中提取 INetValueResponse
// console.log(netValueResponse.historical_net_value);
const valueStore = useNetValueStore();
valueStore.setValue("159941",netValueResponse.historical_net_value)
console.log(valueStore.getValueByFundCode("159941"))

const data2=getTradePrice(defaultPriceRequest)
const priceStore = usePriceStore();
priceStore.setPrices('159941',data2 as unknown as ITradePrice[] );
priceStore.clearPrices('159931')
console.log(priceStore.getPricesByFundCode('159941'))



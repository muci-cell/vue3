// stores/price.ts
import { defineStore } from 'pinia';
import { ITradePrice } from '/@/api/types/data';

export const usePriceStore = defineStore('price', {
    state: () => ({
        prices: {} as Record<string, Array<ITradePrice>>,
    }),
    // 在 store 中
    getters: {
        getPricesByFundCode: (state) => (fundCode: string) => {
            return state.prices[fundCode] || [];
        },
    },

    actions: {
        setPrices(fundCode: string, prices: Array<ITradePrice>) {
            this.prices[fundCode] = prices;
        },
        clearPrices(fundCode: string) {
            delete this.prices[fundCode];
        },
        clearAllPrices() {
            this.prices = {};
        },
    },
});

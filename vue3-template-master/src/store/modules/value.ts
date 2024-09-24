// stores/value.ts
import { defineStore } from 'pinia';
import { IHistoricalNetValue, ITradePrice } from '/@/api/types/data';

export const useNetValueStore = defineStore('value', {
    state: () => ({
        value: {} as Record<string, IHistoricalNetValue[]>,
    }),
        // 在 store 中
    getters: {
        getValueByFundCode: (state) => (fundCode: string) => {
            return state.value[fundCode] || [];
        },
    },
    actions: {
        setValue(fundCode: string, values: IHistoricalNetValue[]) {
            this.value[fundCode] = values;
        },
        clearAllNetValues() {
            this.value = {};
        },
        clearNetValues(fundCode: string) {
            delete this.value[fundCode];
        },
    },
});

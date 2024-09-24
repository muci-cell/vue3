import request from '/@/service'
import type {
    INetValueResponse,
    ITradePrice,
    ITradePriceResponse,
    PriceRequest,
    ValueRequest,
} from './types/data'
export const getNetValue = (data :ValueRequest) => {
  return request<any, INetValueResponse>({
    url: '/api/historical-value',
    method: 'get',
    data
  })
}

function parseTradePrice(tradePriceStr: string[]): ITradePrice[] {
  return tradePriceStr.map(item => {
    const [
      date, open, close, high, low, volume, turnover,
      amplitude, changePct, changeAmt, turnoverRate
    ] = item.split(',').map((val, index) => index === 0 ? val : parseFloat(val)); // 日期保留为字符串，其他转换为数字

    return {
      date,
      open,
      close,
      high,
      low,
      volume,
      turnover,
      amplitude,
      changePct,
      changeAmt,
      turnoverRate
    }as ITradePrice; // 使用类型断言
  });
}

export const getTradePrice = async (data :PriceRequest) => {
  const result=await request<any, ITradePriceResponse>({
    url: '/api/trade-price',
    method: 'get',
    data
  })

  return parseTradePrice((result as unknown as ITradePriceResponse).trade_price)
}

export interface IHistoricalNetValue {
    FSRQ: string;  // 净值日期
    DWJZ: string;  // 单位净值
    LJJZ: string;  // 累计净值
    JZZZL: string; // 日增长率
    SGZT: string;  // 申购状态
    SHZT: string;  // 赎回状态
  }
  
export interface INetValueResponse {
    historical_net_value: IHistoricalNetValue[];
  }
export interface ITradePrice {
    date: string;      // 日期
    open: number;      // 开盘
    close: number;     // 收盘
    high: number;      // 最高
    low: number;       // 最低
    volume: number;    // 成交量
    turnover: number;  // 成交额
    amplitude: number; // 振幅
    changePct: number; // 涨跌幅
    changeAmt: number; // 涨跌额
    turnoverRate: number; // 换手率
  }
  
export interface ITradePriceResponse {
    trade_price: string[];
  }
  
export interface ValueRequest {
    fundCode: string; // 基金代码，必需
    pageIndex?: number; // 页码，默认为 1
    pageSize?: number; // 每页大小，默认为 10000，最大为 1000
    startDate: string; // 开始时间，必需，默认值为 20000101
    endDate: string; // 结束时间，必需，默认值为 20500101
    _: number; // 时间戳，没啥用，默认为 1634567890123
}
export interface PriceRequest {
  symbol: string; // 股票代码，必填
  period?: 'daily' | 'weekly' | 'monthly'; // 数据周期，必填，可选值为 'daily'、'weekly'、'monthly'
  start_date: string; // 开始日期，必填，格式为 YYYYMMDD
  end_date: string; // 结束日期，必填，格式为 YYYYMMDD
  adjust?: 'qfq' | 'hfq'; // 调整方式，可选值为 'qfq'、'hfq'
  timeout?: number; // 可选超时时间，单位为秒
}

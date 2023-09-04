import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolResponse, QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse } from "./query";
export class Query {
  /** Params queries the parameters of the module. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/v13/protorev/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   * has executed
   */
  static getProtoRevNumberOfTrades(request: QueryGetProtoRevNumberOfTradesRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    return fm.fetchReq(`/osmosis/v13/protorev/number_of_trades?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
  static getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    return fm.fetchReq(`/osmosis/v13/protorev/profits_by_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetProtoRevAllProfits queries all of the profits from the module */
  static getProtoRevAllProfits(request: QueryGetProtoRevAllProfitsRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevAllProfitsResponse> {
    return fm.fetchReq(`/osmosis/v13/protorev/all_profits?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
   * that have been executed for a given pool
   */
  static getProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevStatisticsByPoolResponse> {
    return fm.fetchReq(`/osmosis/v13/protorev/statistics_by_pool?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
   * against and the number of trades and profits that have been executed for
   * each pool
   */
  static getProtoRevAllStatistics(request: QueryGetProtoRevAllStatisticsRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevAllStatisticsResponse> {
    return fm.fetchReq(`/osmosis/v13/protorev/all_statistics?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   * is currently arbitraging
   */
  static getProtoRevTokenPairArbRoutes(request: QueryGetProtoRevTokenPairArbRoutesRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    return fm.fetchReq(`/osmosis/v13/protorev/token_pair_arb_routes?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Params queries the parameters of the module. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   * has executed
   */
  async getProtoRevNumberOfTrades(req: QueryGetProtoRevNumberOfTradesRequest, headers?: HeadersInit): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    return Query.getProtoRevNumberOfTrades(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
  async getProtoRevProfitsByDenom(req: QueryGetProtoRevProfitsByDenomRequest, headers?: HeadersInit): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    return Query.getProtoRevProfitsByDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetProtoRevAllProfits queries all of the profits from the module */
  async getProtoRevAllProfits(req: QueryGetProtoRevAllProfitsRequest, headers?: HeadersInit): Promise<QueryGetProtoRevAllProfitsResponse> {
    return Query.getProtoRevAllProfits(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
   * that have been executed for a given pool
   */
  async getProtoRevStatisticsByPool(req: QueryGetProtoRevStatisticsByPoolRequest, headers?: HeadersInit): Promise<QueryGetProtoRevStatisticsByPoolResponse> {
    return Query.getProtoRevStatisticsByPool(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
   * against and the number of trades and profits that have been executed for
   * each pool
   */
  async getProtoRevAllStatistics(req: QueryGetProtoRevAllStatisticsRequest, headers?: HeadersInit): Promise<QueryGetProtoRevAllStatisticsResponse> {
    return Query.getProtoRevAllStatistics(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   * is currently arbitraging
   */
  async getProtoRevTokenPairArbRoutes(req: QueryGetProtoRevTokenPairArbRoutesRequest, headers?: HeadersInit): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    return Query.getProtoRevTokenPairArbRoutes(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
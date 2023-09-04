import * as fm from "../../../grpc-gateway";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, NumPoolsRequest, NumPoolsResponse } from "./query";
export class Query {
  static params(request: ParamsRequest, initRequest?: fm.InitReq): Promise<ParamsResponse> {
    return fm.fetchReq(`/osmosis/swaprouter/v1beta1/Params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Estimates swap amount out given in. */
  static estimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest, initRequest?: fm.InitReq): Promise<EstimateSwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_in?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Estimates swap amount in given out. */
  static estimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest, initRequest?: fm.InitReq): Promise<EstimateSwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_out?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static numPools(request: NumPoolsRequest, initRequest?: fm.InitReq): Promise<NumPoolsResponse> {
    return fm.fetchReq(`/osmosis/swaprouter/v1beta1/num_pools?${fm.renderURLSearchParams({
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
  async params(req: ParamsRequest, headers?: HeadersInit): Promise<ParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Estimates swap amount out given in. */
  async estimateSwapExactAmountIn(req: EstimateSwapExactAmountInRequest, headers?: HeadersInit): Promise<EstimateSwapExactAmountInResponse> {
    return Query.estimateSwapExactAmountIn(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Estimates swap amount in given out. */
  async estimateSwapExactAmountOut(req: EstimateSwapExactAmountOutRequest, headers?: HeadersInit): Promise<EstimateSwapExactAmountOutResponse> {
    return Query.estimateSwapExactAmountOut(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async numPools(req: NumPoolsRequest, headers?: HeadersInit): Promise<NumPoolsResponse> {
    return Query.numPools(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
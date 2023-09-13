import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
export class Query {
  /** Params queries the parameters of x/feemarket module. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/feemarket/v1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** BaseFee queries the base fee of the parent block of the current block. */
  static baseFee(request: QueryBaseFeeRequest, initRequest?: fm.InitReq): Promise<QueryBaseFeeResponse> {
    return fm.fetchReq(`/evmos/feemarket/v1/base_fee?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** BlockGas queries the gas used at a given block height */
  static blockGas(request: QueryBlockGasRequest, initRequest?: fm.InitReq): Promise<QueryBlockGasResponse> {
    return fm.fetchReq(`/evmos/feemarket/v1/block_gas?${fm.renderURLSearchParams({
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
  /** Params queries the parameters of x/feemarket module. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** BaseFee queries the base fee of the parent block of the current block. */
  async baseFee(req: QueryBaseFeeRequest, headers?: HeadersInit): Promise<QueryBaseFeeResponse> {
    return Query.baseFee(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** BlockGas queries the gas used at a given block height */
  async blockGas(req: QueryBlockGasRequest, headers?: HeadersInit): Promise<QueryBlockGasResponse> {
    return Query.blockGas(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
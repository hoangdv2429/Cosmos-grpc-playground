import * as fm from "../../../grpc-gateway";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
export class Query {
  static params(request: ParamsRequest, initRequest?: fm.InitReq): Promise<ParamsResponse> {
    return fm.fetchReq(`/osmosis/twap/v1beta1/Params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static arithmeticTwap(request: ArithmeticTwapRequest, initRequest?: fm.InitReq): Promise<ArithmeticTwapResponse> {
    return fm.fetchReq(`/osmosis/twap/v1beta1/ArithmeticTwap?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static arithmeticTwapToNow(request: ArithmeticTwapToNowRequest, initRequest?: fm.InitReq): Promise<ArithmeticTwapToNowResponse> {
    return fm.fetchReq(`/osmosis/twap/v1beta1/ArithmeticTwapToNow?${fm.renderURLSearchParams({
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
  async arithmeticTwap(req: ArithmeticTwapRequest, headers?: HeadersInit): Promise<ArithmeticTwapResponse> {
    return Query.arithmeticTwap(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async arithmeticTwapToNow(req: ArithmeticTwapToNowRequest, headers?: HeadersInit): Promise<ArithmeticTwapToNowResponse> {
    return Query.arithmeticTwapToNow(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
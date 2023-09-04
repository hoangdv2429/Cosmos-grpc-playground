import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
export class Query {
  /** Params returns the total set of minting parameters. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/stargaze/mint/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** AnnualProvisions current minting annual provisions value. */
  static annualProvisions(request: QueryAnnualProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryAnnualProvisionsResponse> {
    return fm.fetchReq(`/stargaze/mint/v1beta1/annual_provisions?${fm.renderURLSearchParams({
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
  /** Params returns the total set of minting parameters. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** AnnualProvisions current minting annual provisions value. */
  async annualProvisions(req: QueryAnnualProvisionsRequest, headers?: HeadersInit): Promise<QueryAnnualProvisionsResponse> {
    return Query.annualProvisions(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
import * as fm from "../../../grpc-gateway";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export class Query {
  /** this line is used by starport scaffolding # 2 */
  static moduleAccountBalance(request: QueryModuleAccountBalanceRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountBalanceResponse> {
    return fm.fetchReq(`/stargaze/claim/v1beta1/module_account_balance?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/stargaze/claim/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static claimRecord(request: QueryClaimRecordRequest, initRequest?: fm.InitReq): Promise<QueryClaimRecordResponse> {
    return fm.fetchReq(`/stargaze/claim/v1beta1/claim_record/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static claimableForAction(request: QueryClaimableForActionRequest, initRequest?: fm.InitReq): Promise<QueryClaimableForActionResponse> {
    return fm.fetchReq(`/stargaze/claim/v1beta1/claimable_for_action/${request["address"]}/${request["action"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address", "action"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static totalClaimable(request: QueryTotalClaimableRequest, initRequest?: fm.InitReq): Promise<QueryTotalClaimableResponse> {
    return fm.fetchReq(`/stargaze/claim/v1beta1/total_claimable/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
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
  /** this line is used by starport scaffolding # 2 */
  async moduleAccountBalance(req: QueryModuleAccountBalanceRequest, headers?: HeadersInit): Promise<QueryModuleAccountBalanceResponse> {
    return Query.moduleAccountBalance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async claimRecord(req: QueryClaimRecordRequest, headers?: HeadersInit): Promise<QueryClaimRecordResponse> {
    return Query.claimRecord(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async claimableForAction(req: QueryClaimableForActionRequest, headers?: HeadersInit): Promise<QueryClaimableForActionResponse> {
    return Query.claimableForAction(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async totalClaimable(req: QueryTotalClaimableRequest, headers?: HeadersInit): Promise<QueryTotalClaimableResponse> {
    return Query.totalClaimable(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
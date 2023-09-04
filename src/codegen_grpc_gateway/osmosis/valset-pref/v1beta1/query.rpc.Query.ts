import * as fm from "../../../grpc-gateway";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesResponse } from "./query";
export class Query {
  /** Returns the list of ValidatorPreferences for the user. */
  static userValidatorPreferences(request: UserValidatorPreferencesRequest, initRequest?: fm.InitReq): Promise<UserValidatorPreferencesResponse> {
    return fm.fetchReq(`/osmosis/valset-pref/v1beta1/${request["address"]}?${fm.renderURLSearchParams({
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
  /** Returns the list of ValidatorPreferences for the user. */
  async userValidatorPreferences(req: UserValidatorPreferencesRequest, headers?: HeadersInit): Promise<UserValidatorPreferencesResponse> {
    return Query.userValidatorPreferences(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
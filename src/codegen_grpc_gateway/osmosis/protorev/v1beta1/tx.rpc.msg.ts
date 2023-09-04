import * as fm from "../../../grpc-gateway";
import { MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse } from "./tx";
export class Msg {
  /**
   * SetHotRoutes sets the hot routes that will be explored when creating
   * cyclic arbitrage routes. Can only be called by the admin account.
   */
  static setHotRoutes(request: MsgSetHotRoutes, initRequest?: fm.InitReq): Promise<MsgSetHotRoutesResponse> {
    return fm.fetchReq(`/osmosis.protorev.v1beta1/setHotRoutes`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * SetDeveloperAccount sets the account that can withdraw a portion of the
   * profits from the protorev module. This will be Skip's address.
   */
  static setDeveloperAccount(request: MsgSetDeveloperAccount, initRequest?: fm.InitReq): Promise<MsgSetDeveloperAccountResponse> {
    return fm.fetchReq(`/osmosis.protorev.v1beta1/setDeveloperAccount`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
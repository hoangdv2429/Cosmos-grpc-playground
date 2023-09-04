import * as fm from "../../../grpc-gateway";
import { MsgInitialClaim, MsgInitialClaimResponse, MsgClaimFor, MsgClaimForResponse } from "./tx";
export class Msg {
  static initialClaim(request: MsgInitialClaim, initRequest?: fm.InitReq): Promise<MsgInitialClaimResponse> {
    return fm.fetchReq(`/publicawesome.stargaze.claim.v1beta1/initialClaim`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** this line is used by starport scaffolding # proto/tx/rpc */
  static claimFor(request: MsgClaimFor, initRequest?: fm.InitReq): Promise<MsgClaimForResponse> {
    return fm.fetchReq(`/publicawesome.stargaze.claim.v1beta1/claimFor`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
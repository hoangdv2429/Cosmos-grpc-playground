import * as fm from "../../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class Msg {
  /**
   * UpdateParams defined a governance operation for updating the x/feemarket module parameters.
   * The authority is hard-coded to the Cosmos SDK x/gov module account
   */
  static updateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/ethermint.feemarket.v1/updateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
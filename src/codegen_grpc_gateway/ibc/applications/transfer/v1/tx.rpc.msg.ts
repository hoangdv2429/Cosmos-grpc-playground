import * as fm from "../../../../grpc-gateway";
import { MsgTransfer, MsgTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  static transfer(request: MsgTransfer, initRequest?: fm.InitReq): Promise<MsgTransferResponse> {
    return fm.fetchReq(`/ibc.applications.transfer.v1/transfer`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateParams defines a rpc handler for MsgUpdateParams. */
  static updateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/ibc.applications.transfer.v1/updateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
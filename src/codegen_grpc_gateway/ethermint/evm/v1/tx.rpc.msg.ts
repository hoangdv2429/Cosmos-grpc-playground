import * as fm from "../../../grpc-gateway";
import { MsgEthereumTx, MsgEthereumTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class Msg {
  /** EthereumTx defines a method submitting Ethereum transactions. */
  static ethereumTx(request: MsgEthereumTx, initRequest?: fm.InitReq): Promise<MsgEthereumTxResponse> {
    return fm.fetchReq(`/ethermint.evm.v1/ethereumTx`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * UpdateParams defined a governance operation for updating the x/evm module parameters.
   * The authority is hard-coded to the Cosmos SDK x/gov module account
   */
  static updateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/ethermint.evm.v1/updateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
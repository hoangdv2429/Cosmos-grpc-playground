import * as fm from "../../../grpc-gateway";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse } from "./tx";
export class Msg {
  static swapExactAmountIn(request: MsgSwapExactAmountIn, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis.swaprouter.v1beta1/swapExactAmountIn`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static swapExactAmountOut(request: MsgSwapExactAmountOut, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis.swaprouter.v1beta1/swapExactAmountOut`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
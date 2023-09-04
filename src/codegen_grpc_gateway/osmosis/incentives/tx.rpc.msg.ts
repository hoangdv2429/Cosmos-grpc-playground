import * as fm from "../../grpc-gateway";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse } from "./tx";
export class Msg {
  static createGauge(request: MsgCreateGauge, initRequest?: fm.InitReq): Promise<MsgCreateGaugeResponse> {
    return fm.fetchReq(`/osmosis.incentives/createGauge`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static addToGauge(request: MsgAddToGauge, initRequest?: fm.InitReq): Promise<MsgAddToGaugeResponse> {
    return fm.fetchReq(`/osmosis.incentives/addToGauge`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
import * as fm from "../../../../../grpc-gateway";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx";
export class Msg {
  static createBalancerPool(request: MsgCreateBalancerPool, initRequest?: fm.InitReq): Promise<MsgCreateBalancerPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.poolmodels.balancer.v1beta1/createBalancerPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
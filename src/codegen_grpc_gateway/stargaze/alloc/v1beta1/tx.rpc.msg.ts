import * as fm from "../../../grpc-gateway";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse } from "./tx";
export class Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  static createVestingAccount(request: MsgCreateVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreateVestingAccountResponse> {
    return fm.fetchReq(`/publicawesome.stargaze.alloc.v1beta1/createVestingAccount`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
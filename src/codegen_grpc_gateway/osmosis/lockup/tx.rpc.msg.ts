import * as fm from "../../grpc-gateway";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, MsgExtendLockup, MsgExtendLockupResponse, MsgForceUnlock, MsgForceUnlockResponse } from "./tx";
export class Msg {
  /** LockTokens lock tokens */
  static lockTokens(request: MsgLockTokens, initRequest?: fm.InitReq): Promise<MsgLockTokensResponse> {
    return fm.fetchReq(`/osmosis.lockup/lockTokens`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** BeginUnlockingAll begin unlocking all tokens */
  static beginUnlockingAll(request: MsgBeginUnlockingAll, initRequest?: fm.InitReq): Promise<MsgBeginUnlockingAllResponse> {
    return fm.fetchReq(`/osmosis.lockup/beginUnlockingAll`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** MsgBeginUnlocking begins unlocking tokens by lock ID */
  static beginUnlocking(request: MsgBeginUnlocking, initRequest?: fm.InitReq): Promise<MsgBeginUnlockingResponse> {
    return fm.fetchReq(`/osmosis.lockup/beginUnlocking`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** MsgEditLockup edits the existing lockups by lock ID */
  static extendLockup(request: MsgExtendLockup, initRequest?: fm.InitReq): Promise<MsgExtendLockupResponse> {
    return fm.fetchReq(`/osmosis.lockup/extendLockup`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static forceUnlock(request: MsgForceUnlock, initRequest?: fm.InitReq): Promise<MsgForceUnlockResponse> {
    return fm.fetchReq(`/osmosis.lockup/forceUnlock`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
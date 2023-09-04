import * as fm from "../../../grpc-gateway";
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceResponse, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetResponse, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetResponse, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetResponse, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsResponse } from "./tx";
export class Msg {
  /**
   * SetValidatorSetPreference creates a set of validator preference.
   * This message will process both create + update request.
   */
  static setValidatorSetPreference(request: MsgSetValidatorSetPreference, initRequest?: fm.InitReq): Promise<MsgSetValidatorSetPreferenceResponse> {
    return fm.fetchReq(`/osmosis.valsetpref.v1beta1/setValidatorSetPreference`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * DelegateToValidatorSet gets the owner, coins and delegates to a
   * validator-set.
   */
  static delegateToValidatorSet(request: MsgDelegateToValidatorSet, initRequest?: fm.InitReq): Promise<MsgDelegateToValidatorSetResponse> {
    return fm.fetchReq(`/osmosis.valsetpref.v1beta1/delegateToValidatorSet`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * UndelegateFromValidatorSet gets the owner and coins and undelegates from
   * validator-set. The unbonding logic will follow the `Undelegate` logic from
   * the sdk.
   */
  static undelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet, initRequest?: fm.InitReq): Promise<MsgUndelegateFromValidatorSetResponse> {
    return fm.fetchReq(`/osmosis.valsetpref.v1beta1/undelegateFromValidatorSet`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * RedelegateValidatorSet takes the existing validator set and redelegates to
   * a new set.
   */
  static redelegateValidatorSet(request: MsgRedelegateValidatorSet, initRequest?: fm.InitReq): Promise<MsgRedelegateValidatorSetResponse> {
    return fm.fetchReq(`/osmosis.valsetpref.v1beta1/redelegateValidatorSet`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * WithdrawDelegationRewards allows users to claim rewards from the
   * validator-set.
   */
  static withdrawDelegationRewards(request: MsgWithdrawDelegationRewards, initRequest?: fm.InitReq): Promise<MsgWithdrawDelegationRewardsResponse> {
    return fm.fetchReq(`/osmosis.valsetpref.v1beta1/withdrawDelegationRewards`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
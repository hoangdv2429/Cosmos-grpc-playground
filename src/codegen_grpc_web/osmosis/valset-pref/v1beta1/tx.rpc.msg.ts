import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceSDKType, MsgSetValidatorSetPreferenceResponse, MsgSetValidatorSetPreferenceResponseSDKType, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetSDKType, MsgDelegateToValidatorSetResponse, MsgDelegateToValidatorSetResponseSDKType, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetSDKType, MsgUndelegateFromValidatorSetResponse, MsgUndelegateFromValidatorSetResponseSDKType, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetSDKType, MsgRedelegateValidatorSetResponse, MsgRedelegateValidatorSetResponseSDKType, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsSDKType, MsgWithdrawDelegationRewardsResponse, MsgWithdrawDelegationRewardsResponseSDKType } from "./tx";
/** Msg defines the valset-pref modules's gRPC message service. */
export interface Msg {
  /**
   * SetValidatorSetPreference creates a set of validator preference.
   * This message will process both create + update request.
   */
  setValidatorSetPreference(request: DeepPartial<MsgSetValidatorSetPreference>, metadata?: grpc.Metadata): Promise<MsgSetValidatorSetPreferenceResponse>;
  /**
   * DelegateToValidatorSet gets the owner, coins and delegates to a
   * validator-set.
   */
  delegateToValidatorSet(request: DeepPartial<MsgDelegateToValidatorSet>, metadata?: grpc.Metadata): Promise<MsgDelegateToValidatorSetResponse>;
  /**
   * UndelegateFromValidatorSet gets the owner and coins and undelegates from
   * validator-set. The unbonding logic will follow the `Undelegate` logic from
   * the sdk.
   */
  undelegateFromValidatorSet(request: DeepPartial<MsgUndelegateFromValidatorSet>, metadata?: grpc.Metadata): Promise<MsgUndelegateFromValidatorSetResponse>;
  /**
   * RedelegateValidatorSet takes the existing validator set and redelegates to
   * a new set.
   */
  redelegateValidatorSet(request: DeepPartial<MsgRedelegateValidatorSet>, metadata?: grpc.Metadata): Promise<MsgRedelegateValidatorSetResponse>;
  /**
   * WithdrawDelegationRewards allows users to claim rewards from the
   * validator-set.
   */
  withdrawDelegationRewards(request: DeepPartial<MsgWithdrawDelegationRewards>, metadata?: grpc.Metadata): Promise<MsgWithdrawDelegationRewardsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setValidatorSetPreference = this.setValidatorSetPreference.bind(this);
    this.delegateToValidatorSet = this.delegateToValidatorSet.bind(this);
    this.undelegateFromValidatorSet = this.undelegateFromValidatorSet.bind(this);
    this.redelegateValidatorSet = this.redelegateValidatorSet.bind(this);
    this.withdrawDelegationRewards = this.withdrawDelegationRewards.bind(this);
  }
  setValidatorSetPreference(request: DeepPartial<MsgSetValidatorSetPreference>, metadata?: grpc.Metadata): Promise<MsgSetValidatorSetPreferenceResponse> {
    return this.rpc.unary(MsgSetValidatorSetPreferenceDesc, MsgSetValidatorSetPreference.fromPartial(request), metadata);
  }
  delegateToValidatorSet(request: DeepPartial<MsgDelegateToValidatorSet>, metadata?: grpc.Metadata): Promise<MsgDelegateToValidatorSetResponse> {
    return this.rpc.unary(MsgDelegateToValidatorSetDesc, MsgDelegateToValidatorSet.fromPartial(request), metadata);
  }
  undelegateFromValidatorSet(request: DeepPartial<MsgUndelegateFromValidatorSet>, metadata?: grpc.Metadata): Promise<MsgUndelegateFromValidatorSetResponse> {
    return this.rpc.unary(MsgUndelegateFromValidatorSetDesc, MsgUndelegateFromValidatorSet.fromPartial(request), metadata);
  }
  redelegateValidatorSet(request: DeepPartial<MsgRedelegateValidatorSet>, metadata?: grpc.Metadata): Promise<MsgRedelegateValidatorSetResponse> {
    return this.rpc.unary(MsgRedelegateValidatorSetDesc, MsgRedelegateValidatorSet.fromPartial(request), metadata);
  }
  withdrawDelegationRewards(request: DeepPartial<MsgWithdrawDelegationRewards>, metadata?: grpc.Metadata): Promise<MsgWithdrawDelegationRewardsResponse> {
    return this.rpc.unary(MsgWithdrawDelegationRewardsDesc, MsgWithdrawDelegationRewards.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "osmosis.valsetpref.v1beta1.Msg"
};
export const MsgSetValidatorSetPreferenceDesc: UnaryMethodDefinitionish = {
  methodName: "SetValidatorSetPreference",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSetValidatorSetPreference.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetValidatorSetPreferenceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgDelegateToValidatorSetDesc: UnaryMethodDefinitionish = {
  methodName: "DelegateToValidatorSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDelegateToValidatorSet.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDelegateToValidatorSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUndelegateFromValidatorSetDesc: UnaryMethodDefinitionish = {
  methodName: "UndelegateFromValidatorSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUndelegateFromValidatorSet.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUndelegateFromValidatorSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgRedelegateValidatorSetDesc: UnaryMethodDefinitionish = {
  methodName: "RedelegateValidatorSet",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgRedelegateValidatorSet.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRedelegateValidatorSetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgWithdrawDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "WithdrawDelegationRewards",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgWithdrawDelegationRewards.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWithdrawDelegationRewardsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}
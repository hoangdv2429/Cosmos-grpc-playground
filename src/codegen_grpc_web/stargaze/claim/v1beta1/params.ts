import { Action, ActionSDKType, actionFromJSON, actionToJSON } from "./claim_record";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
export const protobufPackage = "publicawesome.stargaze.claim.v1beta1";
export interface ClaimAuthorization {
  contractAddress: string;
  action: Action;
}
export interface ClaimAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization";
  value: Uint8Array;
}
export interface ClaimAuthorizationAmino {
  contract_address: string;
  action: Action;
}
export interface ClaimAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization";
  value: ClaimAuthorizationAmino;
}
export interface ClaimAuthorizationSDKType {
  contract_address: string;
  action: Action;
}
/** Params defines the claim module's parameters. */
export interface Params {
  airdropEnabled: boolean;
  airdropStartTime: Date;
  durationUntilDecay: Duration;
  durationOfDecay: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  /** list of contracts and their allowed claim actions */
  allowedClaimers: ClaimAuthorization[];
}
export interface ParamsProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the claim module's parameters. */
export interface ParamsAmino {
  airdrop_enabled: boolean;
  airdrop_start_time?: Date;
  duration_until_decay?: DurationAmino;
  duration_of_decay?: DurationAmino;
  /** denom of claimable asset */
  claim_denom: string;
  /** list of contracts and their allowed claim actions */
  allowed_claimers: ClaimAuthorizationAmino[];
}
export interface ParamsAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_enabled: boolean;
  airdrop_start_time: Date;
  duration_until_decay: DurationSDKType;
  duration_of_decay: DurationSDKType;
  claim_denom: string;
  allowed_claimers: ClaimAuthorizationSDKType[];
}
function createBaseClaimAuthorization(): ClaimAuthorization {
  return {
    contractAddress: "",
    action: 0
  };
}
export const ClaimAuthorization = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization",
  encode(message: ClaimAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.action = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimAuthorization {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toJSON(message: ClaimAuthorization): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },
  fromPartial(object: DeepPartial<ClaimAuthorization>): ClaimAuthorization {
    const message = createBaseClaimAuthorization();
    message.contractAddress = object.contractAddress ?? "";
    message.action = object.action ?? 0;
    return message;
  },
  fromSDK(object: ClaimAuthorizationSDKType): ClaimAuthorization {
    return {
      contractAddress: object?.contract_address,
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toSDK(message: ClaimAuthorization): ClaimAuthorizationSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },
  fromAmino(object: ClaimAuthorizationAmino): ClaimAuthorization {
    return {
      contractAddress: object.contract_address,
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toAmino(message: ClaimAuthorization): ClaimAuthorizationAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.action = message.action;
    return obj;
  },
  fromAminoMsg(object: ClaimAuthorizationAminoMsg): ClaimAuthorization {
    return ClaimAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimAuthorizationProtoMsg): ClaimAuthorization {
    return ClaimAuthorization.decode(message.value);
  },
  toProto(message: ClaimAuthorization): Uint8Array {
    return ClaimAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ClaimAuthorization): ClaimAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.ClaimAuthorization",
      value: ClaimAuthorization.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    airdropEnabled: false,
    airdropStartTime: new Date(),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimDenom: "",
    allowedClaimers: []
  };
}
export const Params = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropEnabled === true) {
      writer.uint32(8).bool(message.airdropEnabled);
    }
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(42).string(message.claimDenom);
    }
    for (const v of message.allowedClaimers) {
      ClaimAuthorization.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.airdropEnabled = reader.bool();
          break;
        case 2:
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.claimDenom = reader.string();
          break;
        case 6:
          message.allowedClaimers.push(ClaimAuthorization.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      airdropEnabled: isSet(object.airdropEnabled) ? Boolean(object.airdropEnabled) : false,
      airdropStartTime: isSet(object.airdropStartTime) ? fromJsonTimestamp(object.airdropStartTime) : undefined,
      durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
      claimDenom: isSet(object.claimDenom) ? String(object.claimDenom) : "",
      allowedClaimers: Array.isArray(object?.allowedClaimers) ? object.allowedClaimers.map((e: any) => ClaimAuthorization.fromJSON(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.airdropEnabled !== undefined && (obj.airdropEnabled = message.airdropEnabled);
    message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
    message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? Duration.toJSON(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
    message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
    if (message.allowedClaimers) {
      obj.allowedClaimers = message.allowedClaimers.map(e => e ? ClaimAuthorization.toJSON(e) : undefined);
    } else {
      obj.allowedClaimers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.airdropEnabled = object.airdropEnabled ?? false;
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.allowedClaimers = object.allowedClaimers?.map(e => ClaimAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      airdropEnabled: object?.airdrop_enabled,
      airdropStartTime: object.airdrop_start_time ? Timestamp.fromSDK(object.airdrop_start_time) : undefined,
      durationUntilDecay: object.duration_until_decay ? Duration.fromSDK(object.duration_until_decay) : undefined,
      durationOfDecay: object.duration_of_decay ? Duration.fromSDK(object.duration_of_decay) : undefined,
      claimDenom: object?.claim_denom,
      allowedClaimers: Array.isArray(object?.allowed_claimers) ? object.allowed_claimers.map((e: any) => ClaimAuthorization.fromSDK(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.airdrop_enabled = message.airdropEnabled;
    message.airdropStartTime !== undefined && (obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toSDK(message.airdropStartTime) : undefined);
    message.durationUntilDecay !== undefined && (obj.duration_until_decay = message.durationUntilDecay ? Duration.toSDK(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.duration_of_decay = message.durationOfDecay ? Duration.toSDK(message.durationOfDecay) : undefined);
    obj.claim_denom = message.claimDenom;
    if (message.allowedClaimers) {
      obj.allowed_claimers = message.allowedClaimers.map(e => e ? ClaimAuthorization.toSDK(e) : undefined);
    } else {
      obj.allowed_claimers = [];
    }
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      airdropEnabled: object.airdrop_enabled,
      airdropStartTime: object.airdrop_start_time,
      durationUntilDecay: object?.duration_until_decay ? Duration.fromAmino(object.duration_until_decay) : undefined,
      durationOfDecay: object?.duration_of_decay ? Duration.fromAmino(object.duration_of_decay) : undefined,
      claimDenom: object.claim_denom,
      allowedClaimers: Array.isArray(object?.allowed_claimers) ? object.allowed_claimers.map((e: any) => ClaimAuthorization.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.airdrop_enabled = message.airdropEnabled;
    obj.airdrop_start_time = message.airdropStartTime;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
    obj.claim_denom = message.claimDenom;
    if (message.allowedClaimers) {
      obj.allowed_claimers = message.allowedClaimers.map(e => e ? ClaimAuthorization.toAmino(e) : undefined);
    } else {
      obj.allowed_claimers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
import { Action, ActionSDKType, actionFromJSON, actionToJSON } from "./claim_record";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "publicawesome.stargaze.claim.v1beta1";
export interface MsgInitialClaim {
  sender: string;
}
export interface MsgInitialClaimProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim";
  value: Uint8Array;
}
export interface MsgInitialClaimAmino {
  sender: string;
}
export interface MsgInitialClaimAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim";
  value: MsgInitialClaimAmino;
}
export interface MsgInitialClaimSDKType {
  sender: string;
}
export interface MsgInitialClaimResponse {
  /** total initial claimable amount for the user */
  claimedAmount: Coin[];
}
export interface MsgInitialClaimResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse";
  value: Uint8Array;
}
export interface MsgInitialClaimResponseAmino {
  /** total initial claimable amount for the user */
  claimed_amount: CoinAmino[];
}
export interface MsgInitialClaimResponseAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse";
  value: MsgInitialClaimResponseAmino;
}
export interface MsgInitialClaimResponseSDKType {
  claimed_amount: CoinSDKType[];
}
export interface MsgClaimFor {
  sender: string;
  address: string;
  action: Action;
}
export interface MsgClaimForProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor";
  value: Uint8Array;
}
export interface MsgClaimForAmino {
  sender: string;
  address: string;
  action: Action;
}
export interface MsgClaimForAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor";
  value: MsgClaimForAmino;
}
export interface MsgClaimForSDKType {
  sender: string;
  address: string;
  action: Action;
}
export interface MsgClaimForResponse {
  address: string;
  /** total initial claimable amount for the user */
  claimedAmount: Coin[];
}
export interface MsgClaimForResponseProtoMsg {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse";
  value: Uint8Array;
}
export interface MsgClaimForResponseAmino {
  address: string;
  /** total initial claimable amount for the user */
  claimed_amount: CoinAmino[];
}
export interface MsgClaimForResponseAminoMsg {
  type: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse";
  value: MsgClaimForResponseAmino;
}
export interface MsgClaimForResponseSDKType {
  address: string;
  claimed_amount: CoinSDKType[];
}
function createBaseMsgInitialClaim(): MsgInitialClaim {
  return {
    sender: ""
  };
}
export const MsgInitialClaim = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
  encode(message: MsgInitialClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitialClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitialClaim {
    return {
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message: MsgInitialClaim): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInitialClaim>): MsgInitialClaim {
    const message = createBaseMsgInitialClaim();
    message.sender = object.sender ?? "";
    return message;
  },
  fromSDK(object: MsgInitialClaimSDKType): MsgInitialClaim {
    return {
      sender: object?.sender
    };
  },
  toSDK(message: MsgInitialClaim): MsgInitialClaimSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    return obj;
  },
  fromAmino(object: MsgInitialClaimAmino): MsgInitialClaim {
    return {
      sender: object.sender
    };
  },
  toAmino(message: MsgInitialClaim): MsgInitialClaimAmino {
    const obj: any = {};
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgInitialClaimAminoMsg): MsgInitialClaim {
    return MsgInitialClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInitialClaimProtoMsg): MsgInitialClaim {
    return MsgInitialClaim.decode(message.value);
  },
  toProto(message: MsgInitialClaim): Uint8Array {
    return MsgInitialClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgInitialClaim): MsgInitialClaimProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
      value: MsgInitialClaim.encode(message).finish()
    };
  }
};
function createBaseMsgInitialClaimResponse(): MsgInitialClaimResponse {
  return {
    claimedAmount: []
  };
}
export const MsgInitialClaimResponse = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse",
  encode(message: MsgInitialClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitialClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitialClaimResponse {
    return {
      claimedAmount: Array.isArray(object?.claimedAmount) ? object.claimedAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgInitialClaimResponse): unknown {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimedAmount = message.claimedAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimedAmount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgInitialClaimResponse>): MsgInitialClaimResponse {
    const message = createBaseMsgInitialClaimResponse();
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgInitialClaimResponseSDKType): MsgInitialClaimResponse {
    return {
      claimedAmount: Array.isArray(object?.claimed_amount) ? object.claimed_amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgInitialClaimResponse): MsgInitialClaimResponseSDKType {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.claimed_amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgInitialClaimResponseAmino): MsgInitialClaimResponse {
    return {
      claimedAmount: Array.isArray(object?.claimed_amount) ? object.claimed_amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgInitialClaimResponse): MsgInitialClaimResponseAmino {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed_amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgInitialClaimResponseAminoMsg): MsgInitialClaimResponse {
    return MsgInitialClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInitialClaimResponseProtoMsg): MsgInitialClaimResponse {
    return MsgInitialClaimResponse.decode(message.value);
  },
  toProto(message: MsgInitialClaimResponse): Uint8Array {
    return MsgInitialClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInitialClaimResponse): MsgInitialClaimResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse",
      value: MsgInitialClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimFor(): MsgClaimFor {
  return {
    sender: "",
    address: "",
    action: 0
  };
}
export const MsgClaimFor = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
  encode(message: MsgClaimFor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimFor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.action = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimFor {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toJSON(message: MsgClaimFor): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.address !== undefined && (obj.address = message.address);
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClaimFor>): MsgClaimFor {
    const message = createBaseMsgClaimFor();
    message.sender = object.sender ?? "";
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },
  fromSDK(object: MsgClaimForSDKType): MsgClaimFor {
    return {
      sender: object?.sender,
      address: object?.address,
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toSDK(message: MsgClaimFor): MsgClaimForSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.address = message.address;
    message.action !== undefined && (obj.action = actionToJSON(message.action));
    return obj;
  },
  fromAmino(object: MsgClaimForAmino): MsgClaimFor {
    return {
      sender: object.sender,
      address: object.address,
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toAmino(message: MsgClaimFor): MsgClaimForAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.address = message.address;
    obj.action = message.action;
    return obj;
  },
  fromAminoMsg(object: MsgClaimForAminoMsg): MsgClaimFor {
    return MsgClaimFor.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimForProtoMsg): MsgClaimFor {
    return MsgClaimFor.decode(message.value);
  },
  toProto(message: MsgClaimFor): Uint8Array {
    return MsgClaimFor.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimFor): MsgClaimForProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
      value: MsgClaimFor.encode(message).finish()
    };
  }
};
function createBaseMsgClaimForResponse(): MsgClaimForResponse {
  return {
    address: "",
    claimedAmount: []
  };
}
export const MsgClaimForResponse = {
  typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse",
  encode(message: MsgClaimForResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimForResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimForResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimForResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      claimedAmount: Array.isArray(object?.claimedAmount) ? object.claimedAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgClaimForResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.claimedAmount) {
      obj.claimedAmount = message.claimedAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimedAmount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClaimForResponse>): MsgClaimForResponse {
    const message = createBaseMsgClaimForResponse();
    message.address = object.address ?? "";
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgClaimForResponseSDKType): MsgClaimForResponse {
    return {
      address: object?.address,
      claimedAmount: Array.isArray(object?.claimed_amount) ? object.claimed_amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgClaimForResponse): MsgClaimForResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.claimed_amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgClaimForResponseAmino): MsgClaimForResponse {
    return {
      address: object.address,
      claimedAmount: Array.isArray(object?.claimed_amount) ? object.claimed_amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimForResponse): MsgClaimForResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed_amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimForResponseAminoMsg): MsgClaimForResponse {
    return MsgClaimForResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimForResponseProtoMsg): MsgClaimForResponse {
    return MsgClaimForResponse.decode(message.value);
  },
  toProto(message: MsgClaimForResponse): Uint8Array {
    return MsgClaimForResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimForResponse): MsgClaimForResponseProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse",
      value: MsgClaimForResponse.encode(message).finish()
    };
  }
};
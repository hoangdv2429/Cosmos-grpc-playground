import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */
  hotRoutes: TokenPairArbRoutes[];
}
export interface MsgSetHotRoutesProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes";
  value: Uint8Array;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesAmino {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */
  hot_routes: TokenPairArbRoutesAmino[];
}
export interface MsgSetHotRoutesAminoMsg {
  type: "osmosis/MsgSetHotRoutes";
  value: MsgSetHotRoutesAmino;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
  admin: string;
  hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {}
export interface MsgSetHotRoutesResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
  value: Uint8Array;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseAmino {}
export interface MsgSetHotRoutesResponseAminoMsg {
  type: "osmosis/protorev/set-hot-routes-response";
  value: MsgSetHotRoutesResponseAmino;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseSDKType {}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */
  developerAccount: string;
}
export interface MsgSetDeveloperAccountProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
  value: Uint8Array;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountAmino {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */
  developer_account: string;
}
export interface MsgSetDeveloperAccountAminoMsg {
  type: "osmosis/MsgSetDeveloperAccount";
  value: MsgSetDeveloperAccountAmino;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
  admin: string;
  developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {}
export interface MsgSetDeveloperAccountResponseProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
  value: Uint8Array;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseAmino {}
export interface MsgSetDeveloperAccountResponseAminoMsg {
  type: "osmosis/protorev/set-developer-account-response";
  value: MsgSetDeveloperAccountResponseAmino;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {}
function createBaseMsgSetHotRoutes(): MsgSetHotRoutes {
  return {
    admin: "",
    hotRoutes: []
  };
}
export const MsgSetHotRoutes = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
  aminoType: "osmosis/MsgSetHotRoutes",
  encode(message: MsgSetHotRoutes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.hotRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.hotRoutes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetHotRoutes {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      hotRoutes: Array.isArray(object?.hotRoutes) ? object.hotRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetHotRoutes): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.hotRoutes) {
      obj.hotRoutes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
    } else {
      obj.hotRoutes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetHotRoutes>): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    message.admin = object.admin ?? "";
    message.hotRoutes = object.hotRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSetHotRoutesSDKType): MsgSetHotRoutes {
    return {
      admin: object?.admin,
      hotRoutes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e: any) => TokenPairArbRoutes.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgSetHotRoutes): MsgSetHotRoutesSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.hotRoutes) {
      obj.hot_routes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toSDK(e) : undefined);
    } else {
      obj.hot_routes = [];
    }
    return obj;
  },
  fromAmino(object: MsgSetHotRoutesAmino): MsgSetHotRoutes {
    return {
      admin: object.admin,
      hotRoutes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e: any) => TokenPairArbRoutes.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgSetHotRoutes): MsgSetHotRoutesAmino {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.hotRoutes) {
      obj.hot_routes = message.hotRoutes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
    } else {
      obj.hot_routes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetHotRoutesAminoMsg): MsgSetHotRoutes {
    return MsgSetHotRoutes.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesAminoMsg {
    return {
      type: "osmosis/MsgSetHotRoutes",
      value: MsgSetHotRoutes.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetHotRoutesProtoMsg): MsgSetHotRoutes {
    return MsgSetHotRoutes.decode(message.value);
  },
  toProto(message: MsgSetHotRoutes): Uint8Array {
    return MsgSetHotRoutes.encode(message).finish();
  },
  toProtoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
      value: MsgSetHotRoutes.encode(message).finish()
    };
  }
};
function createBaseMsgSetHotRoutesResponse(): MsgSetHotRoutesResponse {
  return {};
}
export const MsgSetHotRoutesResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
  aminoType: "osmosis/protorev/set-hot-routes-response",
  encode(_: MsgSetHotRoutesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetHotRoutesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetHotRoutesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetHotRoutesResponse {
    return {};
  },
  toJSON(_: MsgSetHotRoutesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  },
  fromSDK(_: MsgSetHotRoutesResponseSDKType): MsgSetHotRoutesResponse {
    return {};
  },
  toSDK(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetHotRoutesResponseAmino): MsgSetHotRoutesResponse {
    return {};
  },
  toAmino(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetHotRoutesResponseAminoMsg): MsgSetHotRoutesResponse {
    return MsgSetHotRoutesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-hot-routes-response",
      value: MsgSetHotRoutesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetHotRoutesResponseProtoMsg): MsgSetHotRoutesResponse {
    return MsgSetHotRoutesResponse.decode(message.value);
  },
  toProto(message: MsgSetHotRoutesResponse): Uint8Array {
    return MsgSetHotRoutesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
      value: MsgSetHotRoutesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDeveloperAccount(): MsgSetDeveloperAccount {
  return {
    admin: "",
    developerAccount: ""
  };
}
export const MsgSetDeveloperAccount = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
  aminoType: "osmosis/MsgSetDeveloperAccount",
  encode(message: MsgSetDeveloperAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.developerAccount !== "") {
      writer.uint32(18).string(message.developerAccount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.developerAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDeveloperAccount {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      developerAccount: isSet(object.developerAccount) ? String(object.developerAccount) : ""
    };
  },
  toJSON(message: MsgSetDeveloperAccount): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.developerAccount !== undefined && (obj.developerAccount = message.developerAccount);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    message.admin = object.admin ?? "";
    message.developerAccount = object.developerAccount ?? "";
    return message;
  },
  fromSDK(object: MsgSetDeveloperAccountSDKType): MsgSetDeveloperAccount {
    return {
      admin: object?.admin,
      developerAccount: object?.developer_account
    };
  },
  toSDK(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountSDKType {
    const obj: any = {};
    obj.admin = message.admin;
    obj.developer_account = message.developerAccount;
    return obj;
  },
  fromAmino(object: MsgSetDeveloperAccountAmino): MsgSetDeveloperAccount {
    return {
      admin: object.admin,
      developerAccount: object.developer_account
    };
  },
  toAmino(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.developer_account = message.developerAccount;
    return obj;
  },
  fromAminoMsg(object: MsgSetDeveloperAccountAminoMsg): MsgSetDeveloperAccount {
    return MsgSetDeveloperAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAminoMsg {
    return {
      type: "osmosis/MsgSetDeveloperAccount",
      value: MsgSetDeveloperAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDeveloperAccountProtoMsg): MsgSetDeveloperAccount {
    return MsgSetDeveloperAccount.decode(message.value);
  },
  toProto(message: MsgSetDeveloperAccount): Uint8Array {
    return MsgSetDeveloperAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
      value: MsgSetDeveloperAccount.encode(message).finish()
    };
  }
};
function createBaseMsgSetDeveloperAccountResponse(): MsgSetDeveloperAccountResponse {
  return {};
}
export const MsgSetDeveloperAccountResponse = {
  typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
  aminoType: "osmosis/protorev/set-developer-account-response",
  encode(_: MsgSetDeveloperAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDeveloperAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetDeveloperAccountResponse {
    return {};
  },
  toJSON(_: MsgSetDeveloperAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  },
  fromSDK(_: MsgSetDeveloperAccountResponseSDKType): MsgSetDeveloperAccountResponse {
    return {};
  },
  toSDK(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetDeveloperAccountResponseAmino): MsgSetDeveloperAccountResponse {
    return {};
  },
  toAmino(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDeveloperAccountResponseAminoMsg): MsgSetDeveloperAccountResponse {
    return MsgSetDeveloperAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAminoMsg {
    return {
      type: "osmosis/protorev/set-developer-account-response",
      value: MsgSetDeveloperAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDeveloperAccountResponseProtoMsg): MsgSetDeveloperAccountResponse {
    return MsgSetDeveloperAccountResponse.decode(message.value);
  },
  toProto(message: MsgSetDeveloperAccountResponse): Uint8Array {
    return MsgSetDeveloperAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
      value: MsgSetDeveloperAccountResponse.encode(message).finish()
    };
  }
};
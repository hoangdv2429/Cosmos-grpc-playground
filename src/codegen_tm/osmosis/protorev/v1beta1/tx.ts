import { TokenPairArbRoutes, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */

export interface MsgSetHotRoutes {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */

  hotRoutes: TokenPairArbRoutes[];
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */

export interface MsgSetHotRoutesSDKType {
  /** admin is the account that is authorized to set the hot routes. */
  admin: string;
  /** hot_routes is the list of hot routes to set. */

  hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */

export interface MsgSetHotRoutesResponse {}
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
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */

export interface MsgSetDeveloperAccountSDKType {
  /** admin is the account that is authorized to set the developer account. */
  admin: string;
  /**
   * developer_account is the account that will receive a portion of the profits
   * from the protorev module.
   */

  developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */

export interface MsgSetDeveloperAccountResponse {}
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

  fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes {
    const message = createBaseMsgSetHotRoutes();
    message.admin = object.admin ?? "";
    message.hotRoutes = object.hotRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgSetHotRoutesResponse(): MsgSetHotRoutesResponse {
  return {};
}

export const MsgSetHotRoutesResponse = {
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

  fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse {
    const message = createBaseMsgSetHotRoutesResponse();
    return message;
  }

};

function createBaseMsgSetDeveloperAccount(): MsgSetDeveloperAccount {
  return {
    admin: "",
    developerAccount: ""
  };
}

export const MsgSetDeveloperAccount = {
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

  fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount {
    const message = createBaseMsgSetDeveloperAccount();
    message.admin = object.admin ?? "";
    message.developerAccount = object.developerAccount ?? "";
    return message;
  }

};

function createBaseMsgSetDeveloperAccountResponse(): MsgSetDeveloperAccountResponse {
  return {};
}

export const MsgSetDeveloperAccountResponse = {
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

  fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse {
    const message = createBaseMsgSetDeveloperAccountResponse();
    return message;
  }

};
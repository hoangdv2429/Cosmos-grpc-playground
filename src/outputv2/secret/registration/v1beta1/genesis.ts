import { RegistrationNodeInfo, RegistrationNodeInfoAmino, RegistrationNodeInfoSDKType } from "./types";
import { MasterKey, MasterKeyAmino, MasterKeySDKType } from "./msg";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "secret.registration.v1beta1";
export interface GenesisState {
  registration: RegistrationNodeInfo[];
  nodeExchMasterKey?: MasterKey;
  ioMasterKey?: MasterKey;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/secret.registration.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  registration: RegistrationNodeInfoAmino[];
  node_exch_master_key?: MasterKeyAmino;
  io_master_key?: MasterKeyAmino;
}
export interface GenesisStateAminoMsg {
  type: "/secret.registration.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  registration: RegistrationNodeInfoSDKType[];
  node_exch_master_key?: MasterKeySDKType;
  io_master_key?: MasterKeySDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    registration: [],
    nodeExchMasterKey: undefined,
    ioMasterKey: undefined
  };
}

export const GenesisState = {
  typeUrl: "/secret.registration.v1beta1.GenesisState",

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.registration) {
      RegistrationNodeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.nodeExchMasterKey !== undefined) {
      MasterKey.encode(message.nodeExchMasterKey, writer.uint32(18).fork()).ldelim();
    }

    if (message.ioMasterKey !== undefined) {
      MasterKey.encode(message.ioMasterKey, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.registration.push(RegistrationNodeInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.nodeExchMasterKey = MasterKey.decode(reader, reader.uint32());
          break;

        case 3:
          message.ioMasterKey = MasterKey.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      registration: Array.isArray(object?.registration) ? object.registration.map((e: any) => RegistrationNodeInfo.fromJSON(e)) : [],
      nodeExchMasterKey: isSet(object.nodeExchMasterKey) ? MasterKey.fromJSON(object.nodeExchMasterKey) : undefined,
      ioMasterKey: isSet(object.ioMasterKey) ? MasterKey.fromJSON(object.ioMasterKey) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.registration) {
      obj.registration = message.registration.map(e => e ? RegistrationNodeInfo.toJSON(e) : undefined);
    } else {
      obj.registration = [];
    }

    message.nodeExchMasterKey !== undefined && (obj.nodeExchMasterKey = message.nodeExchMasterKey ? MasterKey.toJSON(message.nodeExchMasterKey) : undefined);
    message.ioMasterKey !== undefined && (obj.ioMasterKey = message.ioMasterKey ? MasterKey.toJSON(message.ioMasterKey) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.registration = object.registration?.map(e => RegistrationNodeInfo.fromPartial(e)) || [];
    message.nodeExchMasterKey = object.nodeExchMasterKey !== undefined && object.nodeExchMasterKey !== null ? MasterKey.fromPartial(object.nodeExchMasterKey) : undefined;
    message.ioMasterKey = object.ioMasterKey !== undefined && object.ioMasterKey !== null ? MasterKey.fromPartial(object.ioMasterKey) : undefined;
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      registration: Array.isArray(object?.registration) ? object.registration.map((e: any) => RegistrationNodeInfo.fromSDK(e)) : [],
      nodeExchMasterKey: object.node_exch_master_key ? MasterKey.fromSDK(object.node_exch_master_key) : undefined,
      ioMasterKey: object.io_master_key ? MasterKey.fromSDK(object.io_master_key) : undefined
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};

    if (message.registration) {
      obj.registration = message.registration.map(e => e ? RegistrationNodeInfo.toSDK(e) : undefined);
    } else {
      obj.registration = [];
    }

    message.nodeExchMasterKey !== undefined && (obj.node_exch_master_key = message.nodeExchMasterKey ? MasterKey.toSDK(message.nodeExchMasterKey) : undefined);
    message.ioMasterKey !== undefined && (obj.io_master_key = message.ioMasterKey ? MasterKey.toSDK(message.ioMasterKey) : undefined);
    return obj;
  },

  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      registration: Array.isArray(object?.registration) ? object.registration.map((e: any) => RegistrationNodeInfo.fromAmino(e)) : [],
      nodeExchMasterKey: object?.node_exch_master_key ? MasterKey.fromAmino(object.node_exch_master_key) : undefined,
      ioMasterKey: object?.io_master_key ? MasterKey.fromAmino(object.io_master_key) : undefined
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};

    if (message.registration) {
      obj.registration = message.registration.map(e => e ? RegistrationNodeInfo.toAmino(e) : undefined);
    } else {
      obj.registration = [];
    }

    obj.node_exch_master_key = message.nodeExchMasterKey ? MasterKey.toAmino(message.nodeExchMasterKey) : undefined;
    obj.io_master_key = message.ioMasterKey ? MasterKey.toAmino(message.ioMasterKey) : undefined;
    return obj;
  },

  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },

  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },

  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },

  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }

};
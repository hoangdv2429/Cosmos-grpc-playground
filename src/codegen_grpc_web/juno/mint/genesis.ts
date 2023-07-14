import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "juno.mint";
/** GenesisState defines the mint module's genesis state. */

export interface GenesisState {
  /** minter is a space for holding current inflation information. */
  minter: Minter;
  /** params defines all the paramaters of the module. */

  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/juno.mint.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */

export interface GenesisStateAmino {
  /** minter is a space for holding current inflation information. */
  minter?: MinterAmino;
  /** params defines all the paramaters of the module. */

  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/juno.mint.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */

export interface GenesisStateSDKType {
  minter: MinterSDKType;
  params: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    minter: Minter.fromPartial({}),
    params: Params.fromPartial({})
  };
}

export const GenesisState = {
  typeUrl: "/juno.mint.GenesisState",

  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32());
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
      minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      minter: object.minter ? Minter.fromSDK(object.minter) : undefined,
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toSDK(message.minter) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },

  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      minter: object?.minter ? Minter.fromAmino(object.minter) : undefined,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.minter = message.minter ? Minter.toAmino(message.minter) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/juno.mint.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }

};
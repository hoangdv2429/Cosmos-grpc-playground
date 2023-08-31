import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** Params defines the parameters for the module. */
export interface Params {
  /** Boolean whether the module is going to be enabled */
  enabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** Boolean whether the module is going to be enabled */
  enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "osmosis/protorev/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  enabled: boolean;
}
function createBaseParams(): Params {
  return {
    enabled: false
  };
}
export const Params = {
  typeUrl: "/osmosis.protorev.v1beta1.Params",
  aminoType: "osmosis/protorev/params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
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
          message.enabled = reader.bool();
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
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      enabled: object?.enabled
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.enabled = message.enabled;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      enabled: object.enabled
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/protorev/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
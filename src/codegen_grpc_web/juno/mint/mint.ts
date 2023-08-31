import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "juno.mint";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  phase: Long;
  startPhaseBlock: Long;
  /** current annual expected provisions */
  annualProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/juno.mint.Minter";
  value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
  /** current annual inflation rate */
  inflation: string;
  phase: string;
  start_phase_block: string;
  /** current annual expected provisions */
  annual_provisions: string;
}
export interface MinterAminoMsg {
  type: "/juno.mint.Minter";
  value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  inflation: string;
  phase: Long;
  start_phase_block: Long;
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** expected blocks per year */
  blocksPerYear: Long;
}
export interface ParamsProtoMsg {
  typeUrl: "/juno.mint.Params";
  value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom: string;
  /** expected blocks per year */
  blocks_per_year: string;
}
export interface ParamsAminoMsg {
  type: "/juno.mint.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  blocks_per_year: Long;
}
function createBaseMinter(): Minter {
  return {
    inflation: "",
    phase: Long.UZERO,
    startPhaseBlock: Long.UZERO,
    annualProvisions: ""
  };
}
export const Minter = {
  typeUrl: "/juno.mint.Minter",
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }
    if (!message.phase.isZero()) {
      writer.uint32(16).uint64(message.phase);
    }
    if (!message.startPhaseBlock.isZero()) {
      writer.uint32(24).uint64(message.startPhaseBlock);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(34).string(message.annualProvisions);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;
        case 2:
          message.phase = (reader.uint64() as Long);
          break;
        case 3:
          message.startPhaseBlock = (reader.uint64() as Long);
          break;
        case 4:
          message.annualProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Minter {
    return {
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      phase: isSet(object.phase) ? Long.fromValue(object.phase) : Long.UZERO,
      startPhaseBlock: isSet(object.startPhaseBlock) ? Long.fromValue(object.startPhaseBlock) : Long.UZERO,
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : ""
    };
  },
  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.phase !== undefined && (obj.phase = (message.phase || Long.UZERO).toString());
    message.startPhaseBlock !== undefined && (obj.startPhaseBlock = (message.startPhaseBlock || Long.UZERO).toString());
    message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
    return obj;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.phase = object.phase !== undefined && object.phase !== null ? Long.fromValue(object.phase) : Long.UZERO;
    message.startPhaseBlock = object.startPhaseBlock !== undefined && object.startPhaseBlock !== null ? Long.fromValue(object.startPhaseBlock) : Long.UZERO;
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },
  fromSDK(object: MinterSDKType): Minter {
    return {
      inflation: object?.inflation,
      phase: object?.phase,
      startPhaseBlock: object?.start_phase_block,
      annualProvisions: object?.annual_provisions
    };
  },
  toSDK(message: Minter): MinterSDKType {
    const obj: any = {};
    obj.inflation = message.inflation;
    obj.phase = message.phase;
    obj.start_phase_block = message.startPhaseBlock;
    obj.annual_provisions = message.annualProvisions;
    return obj;
  },
  fromAmino(object: MinterAmino): Minter {
    return {
      inflation: object.inflation,
      phase: Long.fromString(object.phase),
      startPhaseBlock: Long.fromString(object.start_phase_block),
      annualProvisions: object.annual_provisions
    };
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.inflation = message.inflation;
    obj.phase = message.phase ? message.phase.toString() : undefined;
    obj.start_phase_block = message.startPhaseBlock ? message.startPhaseBlock.toString() : undefined;
    obj.annual_provisions = message.annualProvisions;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/juno.mint.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    blocksPerYear: Long.UZERO
  };
}
export const Params = {
  typeUrl: "/juno.mint.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (!message.blocksPerYear.isZero()) {
      writer.uint32(16).uint64(message.blocksPerYear);
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.blocksPerYear = (reader.uint64() as Long);
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
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      blocksPerYear: isSet(object.blocksPerYear) ? Long.fromValue(object.blocksPerYear) : Long.UZERO
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.blocksPerYear !== undefined && (obj.blocksPerYear = (message.blocksPerYear || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? Long.fromValue(object.blocksPerYear) : Long.UZERO;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      mintDenom: object?.mint_denom,
      blocksPerYear: object?.blocks_per_year
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    obj.blocks_per_year = message.blocksPerYear;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      mintDenom: object.mint_denom,
      blocksPerYear: Long.fromString(object.blocks_per_year)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    obj.blocks_per_year = message.blocksPerYear ? message.blocksPerYear.toString() : undefined;
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
      typeUrl: "/juno.mint.Params",
      value: Params.encode(message).finish()
    };
  }
};
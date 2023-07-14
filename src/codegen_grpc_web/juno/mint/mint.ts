import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "juno.mint";
/** Minter represents the minting state. */

export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  phase: bigint;
  startPhaseBlock: bigint;
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
  phase: bigint;
  start_phase_block: bigint;
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */

export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** expected blocks per year */

  blocksPerYear: bigint;
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
  blocks_per_year: bigint;
}

function createBaseMinter(): Minter {
  return {
    inflation: "",
    phase: BigInt(0),
    startPhaseBlock: BigInt(0),
    annualProvisions: ""
  };
}

export const Minter = {
  typeUrl: "/juno.mint.Minter",

  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }

    if (message.phase !== BigInt(0)) {
      writer.uint32(16).uint64(message.phase);
    }

    if (message.startPhaseBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.startPhaseBlock);
    }

    if (message.annualProvisions !== "") {
      writer.uint32(34).string(message.annualProvisions);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;

        case 2:
          message.phase = reader.uint64();
          break;

        case 3:
          message.startPhaseBlock = reader.uint64();
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
      phase: isSet(object.phase) ? BigInt(object.phase.toString()) : BigInt(0),
      startPhaseBlock: isSet(object.startPhaseBlock) ? BigInt(object.startPhaseBlock.toString()) : BigInt(0),
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : ""
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.phase !== undefined && (obj.phase = (message.phase || BigInt(0)).toString());
    message.startPhaseBlock !== undefined && (obj.startPhaseBlock = (message.startPhaseBlock || BigInt(0)).toString());
    message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.phase = object.phase !== undefined && object.phase !== null ? BigInt(object.phase.toString()) : BigInt(0);
    message.startPhaseBlock = object.startPhaseBlock !== undefined && object.startPhaseBlock !== null ? BigInt(object.startPhaseBlock.toString()) : BigInt(0);
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
      phase: BigInt(object.phase),
      startPhaseBlock: BigInt(object.start_phase_block),
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
    blocksPerYear: BigInt(0)
  };
}

export const Params = {
  typeUrl: "/juno.mint.Params",

  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(16).uint64(message.blocksPerYear);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;

        case 2:
          message.blocksPerYear = reader.uint64();
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
      blocksPerYear: isSet(object.blocksPerYear) ? BigInt(object.blocksPerYear.toString()) : BigInt(0)
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.blocksPerYear !== undefined && (obj.blocksPerYear = (message.blocksPerYear || BigInt(0)).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
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
      blocksPerYear: BigInt(object.blocks_per_year)
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
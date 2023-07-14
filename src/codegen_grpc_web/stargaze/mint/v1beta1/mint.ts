import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
export const protobufPackage = "stargaze.mint.v1beta1";
/** Minter represents the minting state. */

export interface Minter {
  /** current annual expected provisions */
  annualProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/stargaze.mint.v1beta1.Minter";
  value: Uint8Array;
}
/** Minter represents the minting state. */

export interface MinterAmino {
  /** current annual expected provisions */
  annual_provisions: string;
}
export interface MinterAminoMsg {
  type: "/stargaze.mint.v1beta1.Minter";
  value: MinterAmino;
}
/** Minter represents the minting state. */

export interface MinterSDKType {
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */

export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** the time the chain starts */

  startTime: Date;
  /** initial annual provisions */

  initialAnnualProvisions: string;
  /** factor to reduce inflation by each year */

  reductionFactor: string;
  /** expected blocks per year */

  blocksPerYear: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/stargaze.mint.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the mint module. */

export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom: string;
  /** the time the chain starts */

  start_time?: Date;
  /** initial annual provisions */

  initial_annual_provisions: string;
  /** factor to reduce inflation by each year */

  reduction_factor: string;
  /** expected blocks per year */

  blocks_per_year: string;
}
export interface ParamsAminoMsg {
  type: "/stargaze.mint.v1beta1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the mint module. */

export interface ParamsSDKType {
  mint_denom: string;
  start_time: Date;
  initial_annual_provisions: string;
  reduction_factor: string;
  blocks_per_year: bigint;
}

function createBaseMinter(): Minter {
  return {
    annualProvisions: ""
  };
}

export const Minter = {
  typeUrl: "/stargaze.mint.v1beta1.Minter",

  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions !== "") {
      writer.uint32(10).string(message.annualProvisions);
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
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : ""
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
    return obj;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },

  fromSDK(object: MinterSDKType): Minter {
    return {
      annualProvisions: object?.annual_provisions
    };
  },

  toSDK(message: Minter): MinterSDKType {
    const obj: any = {};
    obj.annual_provisions = message.annualProvisions;
    return obj;
  },

  fromAmino(object: MinterAmino): Minter {
    return {
      annualProvisions: object.annual_provisions
    };
  },

  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
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
      typeUrl: "/stargaze.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }

};

function createBaseParams(): Params {
  return {
    mintDenom: "",
    startTime: undefined,
    initialAnnualProvisions: "",
    reductionFactor: "",
    blocksPerYear: BigInt(0)
  };
}

export const Params = {
  typeUrl: "/stargaze.mint.v1beta1.Params",

  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.initialAnnualProvisions !== "") {
      writer.uint32(26).string(message.initialAnnualProvisions);
    }

    if (message.reductionFactor !== "") {
      writer.uint32(34).string(message.reductionFactor);
    }

    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(40).uint64(message.blocksPerYear);
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
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.initialAnnualProvisions = reader.string();
          break;

        case 4:
          message.reductionFactor = reader.string();
          break;

        case 5:
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
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      initialAnnualProvisions: isSet(object.initialAnnualProvisions) ? String(object.initialAnnualProvisions) : "",
      reductionFactor: isSet(object.reductionFactor) ? String(object.reductionFactor) : "",
      blocksPerYear: isSet(object.blocksPerYear) ? BigInt(object.blocksPerYear.toString()) : BigInt(0)
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.initialAnnualProvisions !== undefined && (obj.initialAnnualProvisions = message.initialAnnualProvisions);
    message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
    message.blocksPerYear !== undefined && (obj.blocksPerYear = (message.blocksPerYear || BigInt(0)).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.startTime = object.startTime ?? undefined;
    message.initialAnnualProvisions = object.initialAnnualProvisions ?? "";
    message.reductionFactor = object.reductionFactor ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      mintDenom: object?.mint_denom,
      startTime: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined,
      initialAnnualProvisions: object?.initial_annual_provisions,
      reductionFactor: object?.reduction_factor,
      blocksPerYear: object?.blocks_per_year
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    message.startTime !== undefined && (obj.start_time = message.startTime ? Timestamp.toSDK(message.startTime) : undefined);
    obj.initial_annual_provisions = message.initialAnnualProvisions;
    obj.reduction_factor = message.reductionFactor;
    obj.blocks_per_year = message.blocksPerYear;
    return obj;
  },

  fromAmino(object: ParamsAmino): Params {
    return {
      mintDenom: object.mint_denom,
      startTime: object.start_time,
      initialAnnualProvisions: object.initial_annual_provisions,
      reductionFactor: object.reduction_factor,
      blocksPerYear: BigInt(object.blocks_per_year)
    };
  },

  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    obj.start_time = message.startTime;
    obj.initial_annual_provisions = message.initialAnnualProvisions;
    obj.reduction_factor = message.reductionFactor;
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
      typeUrl: "/stargaze.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }

};
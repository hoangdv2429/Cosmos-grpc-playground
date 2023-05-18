import { CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType, ContractCustomInfo, ContractCustomInfoAmino, ContractCustomInfoSDKType } from "./types";
import { Long, DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "secret.compute.v1beta1";
/** GenesisState - genesis state of x/wasm */

export interface GenesisState {
  /** Params params = 1 [(gogoproto.nullable) = false]; */
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/secret.compute.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */

export interface GenesisStateAmino {
  /** Params params = 1 [(gogoproto.nullable) = false]; */
  codes: CodeAmino[];
  contracts: ContractAmino[];
  sequences: SequenceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/secret.compute.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/wasm */

export interface GenesisStateSDKType {
  codes: CodeSDKType[];
  contracts: ContractSDKType[];
  sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */

export interface Code {
  codeId: Long;
  codeInfo?: CodeInfo;
  codeBytes: Uint8Array;
}
export interface CodeProtoMsg {
  typeUrl: "/secret.compute.v1beta1.Code";
  value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */

export interface CodeAmino {
  code_id: string;
  code_info?: CodeInfoAmino;
  code_bytes: Uint8Array;
}
export interface CodeAminoMsg {
  type: "/secret.compute.v1beta1.Code";
  value: CodeAmino;
}
/** Code struct encompasses CodeInfo and CodeBytes */

export interface CodeSDKType {
  code_id: Long;
  code_info?: CodeInfoSDKType;
  code_bytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface Contract {
  contractAddress: Uint8Array;
  contractInfo?: ContractInfo;
  contractState: Model[];
  contractCustomInfo?: ContractCustomInfo;
}
export interface ContractProtoMsg {
  typeUrl: "/secret.compute.v1beta1.Contract";
  value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface ContractAmino {
  contract_address: Uint8Array;
  contract_info?: ContractInfoAmino;
  contract_state: ModelAmino[];
  contract_custom_info?: ContractCustomInfoAmino;
}
export interface ContractAminoMsg {
  type: "/secret.compute.v1beta1.Contract";
  value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface ContractSDKType {
  contract_address: Uint8Array;
  contract_info?: ContractInfoSDKType;
  contract_state: ModelSDKType[];
  contract_custom_info?: ContractCustomInfoSDKType;
}
/** Sequence id and value of a counter */

export interface Sequence {
  idKey: Uint8Array;
  value: Long;
}
export interface SequenceProtoMsg {
  typeUrl: "/secret.compute.v1beta1.Sequence";
  value: Uint8Array;
}
/** Sequence id and value of a counter */

export interface SequenceAmino {
  id_key: Uint8Array;
  value: string;
}
export interface SequenceAminoMsg {
  type: "/secret.compute.v1beta1.Sequence";
  value: SequenceAmino;
}
/** Sequence id and value of a counter */

export interface SequenceSDKType {
  id_key: Uint8Array;
  value: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    codes: [],
    contracts: [],
    sequences: []
  };
}

export const GenesisState = {
  typeUrl: "/secret.compute.v1beta1.GenesisState",

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;

        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;

        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toJSON(e) : undefined);
    } else {
      obj.codes = [];
    }

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromSDK(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromSDK(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};

    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toSDK(e) : undefined);
    } else {
      obj.codes = [];
    }

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toSDK(e) : undefined);
    } else {
      obj.contracts = [];
    }

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toSDK(e) : undefined);
    } else {
      obj.sequences = [];
    }

    return obj;
  },

  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromAmino(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromAmino(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromAmino(e)) : []
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};

    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toAmino(e) : undefined);
    } else {
      obj.codes = [];
    }

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toAmino(e) : undefined);
    } else {
      obj.contracts = [];
    }

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toAmino(e) : undefined);
    } else {
      obj.sequences = [];
    }

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
      typeUrl: "/secret.compute.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }

};

function createBaseCode(): Code {
  return {
    codeId: Long.UZERO,
    codeInfo: undefined,
    codeBytes: new Uint8Array()
  };
}

export const Code = {
  typeUrl: "/secret.compute.v1beta1.Code",

  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.codeBytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Code {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array()
    };
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined && (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Code>): Code {
    const message = createBaseCode();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    return message;
  },

  fromSDK(object: CodeSDKType): Code {
    return {
      codeId: object?.code_id,
      codeInfo: object.code_info ? CodeInfo.fromSDK(object.code_info) : undefined,
      codeBytes: object?.code_bytes
    };
  },

  toSDK(message: Code): CodeSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? CodeInfo.toSDK(message.codeInfo) : undefined);
    obj.code_bytes = message.codeBytes;
    return obj;
  },

  fromAmino(object: CodeAmino): Code {
    return {
      codeId: Long.fromString(object.code_id),
      codeInfo: object?.code_info ? CodeInfo.fromAmino(object.code_info) : undefined,
      codeBytes: object.code_bytes
    };
  },

  toAmino(message: Code): CodeAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.code_info = message.codeInfo ? CodeInfo.toAmino(message.codeInfo) : undefined;
    obj.code_bytes = message.codeBytes;
    return obj;
  },

  fromAminoMsg(object: CodeAminoMsg): Code {
    return Code.fromAmino(object.value);
  },

  fromProtoMsg(message: CodeProtoMsg): Code {
    return Code.decode(message.value);
  },

  toProto(message: Code): Uint8Array {
    return Code.encode(message).finish();
  },

  toProtoMsg(message: Code): CodeProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.Code",
      value: Code.encode(message).finish()
    };
  }

};

function createBaseContract(): Contract {
  return {
    contractAddress: new Uint8Array(),
    contractInfo: undefined,
    contractState: [],
    contractCustomInfo: undefined
  };
}

export const Contract = {
  typeUrl: "/secret.compute.v1beta1.Contract",

  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress.length !== 0) {
      writer.uint32(10).bytes(message.contractAddress);
    }

    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.contractCustomInfo !== undefined) {
      ContractCustomInfo.encode(message.contractCustomInfo, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.bytes();
          break;

        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;

        case 4:
          message.contractCustomInfo = ContractCustomInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Contract {
    return {
      contractAddress: isSet(object.contractAddress) ? bytesFromBase64(object.contractAddress) : new Uint8Array(),
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
      contractState: Array.isArray(object?.contractState) ? object.contractState.map((e: any) => Model.fromJSON(e)) : [],
      contractCustomInfo: isSet(object.contractCustomInfo) ? ContractCustomInfo.fromJSON(object.contractCustomInfo) : undefined
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = base64FromBytes(message.contractAddress !== undefined ? message.contractAddress : new Uint8Array()));
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);

    if (message.contractState) {
      obj.contractState = message.contractState.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.contractState = [];
    }

    message.contractCustomInfo !== undefined && (obj.contractCustomInfo = message.contractCustomInfo ? ContractCustomInfo.toJSON(message.contractCustomInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? new Uint8Array();
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
    message.contractCustomInfo = object.contractCustomInfo !== undefined && object.contractCustomInfo !== null ? ContractCustomInfo.fromPartial(object.contractCustomInfo) : undefined;
    return message;
  },

  fromSDK(object: ContractSDKType): Contract {
    return {
      contractAddress: object?.contract_address,
      contractInfo: object.contract_info ? ContractInfo.fromSDK(object.contract_info) : undefined,
      contractState: Array.isArray(object?.contract_state) ? object.contract_state.map((e: any) => Model.fromSDK(e)) : [],
      contractCustomInfo: object.contract_custom_info ? ContractCustomInfo.fromSDK(object.contract_custom_info) : undefined
    };
  },

  toSDK(message: Contract): ContractSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    message.contractInfo !== undefined && (obj.contract_info = message.contractInfo ? ContractInfo.toSDK(message.contractInfo) : undefined);

    if (message.contractState) {
      obj.contract_state = message.contractState.map(e => e ? Model.toSDK(e) : undefined);
    } else {
      obj.contract_state = [];
    }

    message.contractCustomInfo !== undefined && (obj.contract_custom_info = message.contractCustomInfo ? ContractCustomInfo.toSDK(message.contractCustomInfo) : undefined);
    return obj;
  },

  fromAmino(object: ContractAmino): Contract {
    return {
      contractAddress: object.contract_address,
      contractInfo: object?.contract_info ? ContractInfo.fromAmino(object.contract_info) : undefined,
      contractState: Array.isArray(object?.contract_state) ? object.contract_state.map((e: any) => Model.fromAmino(e)) : [],
      contractCustomInfo: object?.contract_custom_info ? ContractCustomInfo.fromAmino(object.contract_custom_info) : undefined
    };
  },

  toAmino(message: Contract): ContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : undefined;

    if (message.contractState) {
      obj.contract_state = message.contractState.map(e => e ? Model.toAmino(e) : undefined);
    } else {
      obj.contract_state = [];
    }

    obj.contract_custom_info = message.contractCustomInfo ? ContractCustomInfo.toAmino(message.contractCustomInfo) : undefined;
    return obj;
  },

  fromAminoMsg(object: ContractAminoMsg): Contract {
    return Contract.fromAmino(object.value);
  },

  fromProtoMsg(message: ContractProtoMsg): Contract {
    return Contract.decode(message.value);
  },

  toProto(message: Contract): Uint8Array {
    return Contract.encode(message).finish();
  },

  toProtoMsg(message: Contract): ContractProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.Contract",
      value: Contract.encode(message).finish()
    };
  }

};

function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: Long.UZERO
  };
}

export const Sequence = {
  typeUrl: "/secret.compute.v1beta1.Sequence",

  encode(message: Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;

        case 2:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Sequence {
    return {
      idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },

  toJSON(message: Sequence): unknown {
    const obj: any = {};
    message.idKey !== undefined && (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },

  fromSDK(object: SequenceSDKType): Sequence {
    return {
      idKey: object?.id_key,
      value: object?.value
    };
  },

  toSDK(message: Sequence): SequenceSDKType {
    const obj: any = {};
    obj.id_key = message.idKey;
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: SequenceAmino): Sequence {
    return {
      idKey: object.id_key,
      value: Long.fromString(object.value)
    };
  },

  toAmino(message: Sequence): SequenceAmino {
    const obj: any = {};
    obj.id_key = message.idKey;
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },

  fromAminoMsg(object: SequenceAminoMsg): Sequence {
    return Sequence.fromAmino(object.value);
  },

  fromProtoMsg(message: SequenceProtoMsg): Sequence {
    return Sequence.decode(message.value);
  },

  toProto(message: Sequence): Uint8Array {
    return Sequence.encode(message).finish();
  },

  toProtoMsg(message: Sequence): SequenceProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }

};
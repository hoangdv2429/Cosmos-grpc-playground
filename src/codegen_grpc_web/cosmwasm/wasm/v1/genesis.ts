import { Params, ParamsAmino, ParamsSDKType, CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntryAmino, ContractCodeHistoryEntrySDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmwasm.wasm.v1";
/** GenesisState - genesis state of x/wasm */

export interface GenesisState {
  params: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */

export interface GenesisStateAmino {
  params?: ParamsAmino;
  codes: CodeAmino[];
  contracts: ContractAmino[];
  sequences: SequenceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "wasm/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/wasm */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
  codes: CodeSDKType[];
  contracts: ContractSDKType[];
  sequences: SequenceSDKType[];
}
/** Code struct encompasses CodeInfo and CodeBytes */

export interface Code {
  codeId: bigint;
  codeInfo: CodeInfo;
  codeBytes: Uint8Array;
  /** Pinned to wasmvm cache */

  pinned: boolean;
}
export interface CodeProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Code";
  value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */

export interface CodeAmino {
  code_id: string;
  code_info?: CodeInfoAmino;
  code_bytes: Uint8Array;
  /** Pinned to wasmvm cache */

  pinned: boolean;
}
export interface CodeAminoMsg {
  type: "wasm/Code";
  value: CodeAmino;
}
/** Code struct encompasses CodeInfo and CodeBytes */

export interface CodeSDKType {
  code_id: bigint;
  code_info: CodeInfoSDKType;
  code_bytes: Uint8Array;
  pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface Contract {
  contractAddress: string;
  contractInfo: ContractInfo;
  contractState: Model[];
  contractCodeHistory: ContractCodeHistoryEntry[];
}
export interface ContractProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Contract";
  value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface ContractAmino {
  contract_address: string;
  contract_info?: ContractInfoAmino;
  contract_state: ModelAmino[];
  contract_code_history: ContractCodeHistoryEntryAmino[];
}
export interface ContractAminoMsg {
  type: "wasm/Contract";
  value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface ContractSDKType {
  contract_address: string;
  contract_info: ContractInfoSDKType;
  contract_state: ModelSDKType[];
  contract_code_history: ContractCodeHistoryEntrySDKType[];
}
/** Sequence key and value of an id generation counter */

export interface Sequence {
  idKey: Uint8Array;
  value: bigint;
}
export interface SequenceProtoMsg {
  typeUrl: "/cosmwasm.wasm.v1.Sequence";
  value: Uint8Array;
}
/** Sequence key and value of an id generation counter */

export interface SequenceAmino {
  id_key: Uint8Array;
  value: string;
}
export interface SequenceAminoMsg {
  type: "wasm/Sequence";
  value: SequenceAmino;
}
/** Sequence key and value of an id generation counter */

export interface SequenceSDKType {
  id_key: Uint8Array;
  value: bigint;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: []
  };
}

export const GenesisState = {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState",
  aminoType: "wasm/GenesisState",

  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

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

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromSDK(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromSDK(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);

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
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromAmino(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromAmino(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromAmino(e)) : []
    };
  },

  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;

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

  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "wasm/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },

  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },

  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },

  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }

};

function createBaseCode(): Code {
  return {
    codeId: BigInt(0),
    codeInfo: CodeInfo.fromPartial({}),
    codeBytes: new Uint8Array(),
    pinned: false
  };
}

export const Code = {
  typeUrl: "/cosmwasm.wasm.v1.Code",
  aminoType: "wasm/Code",

  encode(message: Code, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }

    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Code {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;

        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.codeBytes = reader.bytes();
          break;

        case 4:
          message.pinned = reader.bool();
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
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array(),
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false
    };
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined && (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },

  fromPartial(object: DeepPartial<Code>): Code {
    const message = createBaseCode();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },

  fromSDK(object: CodeSDKType): Code {
    return {
      codeId: object?.code_id,
      codeInfo: object.code_info ? CodeInfo.fromSDK(object.code_info) : undefined,
      codeBytes: object?.code_bytes,
      pinned: object?.pinned
    };
  },

  toSDK(message: Code): CodeSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? CodeInfo.toSDK(message.codeInfo) : undefined);
    obj.code_bytes = message.codeBytes;
    obj.pinned = message.pinned;
    return obj;
  },

  fromAmino(object: CodeAmino): Code {
    return {
      codeId: BigInt(object.code_id),
      codeInfo: object?.code_info ? CodeInfo.fromAmino(object.code_info) : undefined,
      codeBytes: object.code_bytes,
      pinned: object.pinned
    };
  },

  toAmino(message: Code): CodeAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.code_info = message.codeInfo ? CodeInfo.toAmino(message.codeInfo) : undefined;
    obj.code_bytes = message.codeBytes;
    obj.pinned = message.pinned;
    return obj;
  },

  fromAminoMsg(object: CodeAminoMsg): Code {
    return Code.fromAmino(object.value);
  },

  toAminoMsg(message: Code): CodeAminoMsg {
    return {
      type: "wasm/Code",
      value: Code.toAmino(message)
    };
  },

  fromProtoMsg(message: CodeProtoMsg): Code {
    return Code.decode(message.value);
  },

  toProto(message: Code): Uint8Array {
    return Code.encode(message).finish();
  },

  toProtoMsg(message: Code): CodeProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Code",
      value: Code.encode(message).finish()
    };
  }

};

function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: ContractInfo.fromPartial({}),
    contractState: [],
    contractCodeHistory: []
  };
}

export const Contract = {
  typeUrl: "/cosmwasm.wasm.v1.Contract",
  aminoType: "wasm/Contract",

  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.contractCodeHistory) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Contract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;

        case 4:
          message.contractCodeHistory.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
      contractState: Array.isArray(object?.contractState) ? object.contractState.map((e: any) => Model.fromJSON(e)) : [],
      contractCodeHistory: Array.isArray(object?.contractCodeHistory) ? object.contractCodeHistory.map((e: any) => ContractCodeHistoryEntry.fromJSON(e)) : []
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);

    if (message.contractState) {
      obj.contractState = message.contractState.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.contractState = [];
    }

    if (message.contractCodeHistory) {
      obj.contractCodeHistory = message.contractCodeHistory.map(e => e ? ContractCodeHistoryEntry.toJSON(e) : undefined);
    } else {
      obj.contractCodeHistory = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    message.contractState = object.contractState?.map(e => Model.fromPartial(e)) || [];
    message.contractCodeHistory = object.contractCodeHistory?.map(e => ContractCodeHistoryEntry.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ContractSDKType): Contract {
    return {
      contractAddress: object?.contract_address,
      contractInfo: object.contract_info ? ContractInfo.fromSDK(object.contract_info) : undefined,
      contractState: Array.isArray(object?.contract_state) ? object.contract_state.map((e: any) => Model.fromSDK(e)) : [],
      contractCodeHistory: Array.isArray(object?.contract_code_history) ? object.contract_code_history.map((e: any) => ContractCodeHistoryEntry.fromSDK(e)) : []
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

    if (message.contractCodeHistory) {
      obj.contract_code_history = message.contractCodeHistory.map(e => e ? ContractCodeHistoryEntry.toSDK(e) : undefined);
    } else {
      obj.contract_code_history = [];
    }

    return obj;
  },

  fromAmino(object: ContractAmino): Contract {
    return {
      contractAddress: object.contract_address,
      contractInfo: object?.contract_info ? ContractInfo.fromAmino(object.contract_info) : undefined,
      contractState: Array.isArray(object?.contract_state) ? object.contract_state.map((e: any) => Model.fromAmino(e)) : [],
      contractCodeHistory: Array.isArray(object?.contract_code_history) ? object.contract_code_history.map((e: any) => ContractCodeHistoryEntry.fromAmino(e)) : []
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

    if (message.contractCodeHistory) {
      obj.contract_code_history = message.contractCodeHistory.map(e => e ? ContractCodeHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.contract_code_history = [];
    }

    return obj;
  },

  fromAminoMsg(object: ContractAminoMsg): Contract {
    return Contract.fromAmino(object.value);
  },

  toAminoMsg(message: Contract): ContractAminoMsg {
    return {
      type: "wasm/Contract",
      value: Contract.toAmino(message)
    };
  },

  fromProtoMsg(message: ContractProtoMsg): Contract {
    return Contract.decode(message.value);
  },

  toProto(message: Contract): Uint8Array {
    return Contract.encode(message).finish();
  },

  toProtoMsg(message: Contract): ContractProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Contract",
      value: Contract.encode(message).finish()
    };
  }

};

function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: BigInt(0)
  };
}

export const Sequence = {
  typeUrl: "/cosmwasm.wasm.v1.Sequence",
  aminoType: "wasm/Sequence",

  encode(message: Sequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }

    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }

    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;

        case 2:
          message.value = reader.uint64();
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
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },

  toJSON(message: Sequence): unknown {
    const obj: any = {};
    message.idKey !== undefined && (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
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
      value: BigInt(object.value)
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

  toAminoMsg(message: Sequence): SequenceAminoMsg {
    return {
      type: "wasm/Sequence",
      value: Sequence.toAmino(message)
    };
  },

  fromProtoMsg(message: SequenceProtoMsg): Sequence {
    return Sequence.decode(message.value);
  },

  toProto(message: Sequence): Uint8Array {
    return Sequence.encode(message).finish();
  },

  toProtoMsg(message: Sequence): SequenceProtoMsg {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }

};
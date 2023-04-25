import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "secret.compute.v1beta1";
export enum AccessType {
  UNDEFINED = 0,
  NOBODY = 1,
  ONLY_ADDRESS = 2,
  EVERYBODY = 3,
  UNRECOGNIZED = -1,
}
export const AccessTypeSDKType = AccessType;
export const AccessTypeAmino = AccessType;
export function accessTypeFromJSON(object: any): AccessType {
  switch (object) {
    case 0:
    case "UNDEFINED":
      return AccessType.UNDEFINED;

    case 1:
    case "NOBODY":
      return AccessType.NOBODY;

    case 2:
    case "ONLY_ADDRESS":
      return AccessType.ONLY_ADDRESS;

    case 3:
    case "EVERYBODY":
      return AccessType.EVERYBODY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
export function accessTypeToJSON(object: AccessType): string {
  switch (object) {
    case AccessType.UNDEFINED:
      return "UNDEFINED";

    case AccessType.NOBODY:
      return "NOBODY";

    case AccessType.ONLY_ADDRESS:
      return "ONLY_ADDRESS";

    case AccessType.EVERYBODY:
      return "EVERYBODY";

    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface AccessTypeParam {
  value: AccessType;
}
export interface AccessTypeParamProtoMsg {
  typeUrl: "/secret.compute.v1beta1.AccessTypeParam";
  value: Uint8Array;
}
export interface AccessTypeParamAmino {
  value: AccessType;
}
export interface AccessTypeParamAminoMsg {
  type: "/secret.compute.v1beta1.AccessTypeParam";
  value: AccessTypeParamAmino;
}
export interface AccessTypeParamSDKType {
  value: AccessType;
}
/** CodeInfo is data for the uploaded contract WASM code */

export interface CodeInfo {
  codeHash: Uint8Array;
  creator: Uint8Array;
  source: string;
  builder: string;
}
export interface CodeInfoProtoMsg {
  typeUrl: "/secret.compute.v1beta1.CodeInfo";
  value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */

export interface CodeInfoAmino {
  code_hash: Uint8Array;
  creator: Uint8Array;
  source: string;
  builder: string;
}
export interface CodeInfoAminoMsg {
  type: "/secret.compute.v1beta1.CodeInfo";
  value: CodeInfoAmino;
}
/** CodeInfo is data for the uploaded contract WASM code */

export interface CodeInfoSDKType {
  code_hash: Uint8Array;
  creator: Uint8Array;
  source: string;
  builder: string;
}
export interface ContractCustomInfo {
  enclaveKey: Uint8Array;
  label: string;
}
export interface ContractCustomInfoProtoMsg {
  typeUrl: "/secret.compute.v1beta1.ContractCustomInfo";
  value: Uint8Array;
}
export interface ContractCustomInfoAmino {
  enclave_key: Uint8Array;
  label: string;
}
export interface ContractCustomInfoAminoMsg {
  type: "/secret.compute.v1beta1.ContractCustomInfo";
  value: ContractCustomInfoAmino;
}
export interface ContractCustomInfoSDKType {
  enclave_key: Uint8Array;
  label: string;
}
/** ContractInfo stores a WASM contract instance */

export interface ContractInfo {
  codeId: Long;
  creator: Uint8Array;
  label: string;
  /**
   * never show this in query results, just use for sorting
   * (Note: when using json tag "-" amino refused to serialize it...)
   */

  created?: AbsoluteTxPosition;
  ibcPortId: string;
}
export interface ContractInfoProtoMsg {
  typeUrl: "/secret.compute.v1beta1.ContractInfo";
  value: Uint8Array;
}
/** ContractInfo stores a WASM contract instance */

export interface ContractInfoAmino {
  code_id: string;
  creator: Uint8Array;
  label: string;
  /**
   * never show this in query results, just use for sorting
   * (Note: when using json tag "-" amino refused to serialize it...)
   */

  created?: AbsoluteTxPositionAmino;
  ibc_port_id: string;
}
export interface ContractInfoAminoMsg {
  type: "/secret.compute.v1beta1.ContractInfo";
  value: ContractInfoAmino;
}
/** ContractInfo stores a WASM contract instance */

export interface ContractInfoSDKType {
  code_id: Long;
  creator: Uint8Array;
  label: string;
  created?: AbsoluteTxPositionSDKType;
  ibc_port_id: string;
}
/** AbsoluteTxPosition can be used to sort contracts */

export interface AbsoluteTxPosition {
  /** BlockHeight is the block the contract was created at */
  blockHeight: Long;
  /** TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) */

  txIndex: Long;
}
export interface AbsoluteTxPositionProtoMsg {
  typeUrl: "/secret.compute.v1beta1.AbsoluteTxPosition";
  value: Uint8Array;
}
/** AbsoluteTxPosition can be used to sort contracts */

export interface AbsoluteTxPositionAmino {
  /** BlockHeight is the block the contract was created at */
  block_height: string;
  /** TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) */

  tx_index: string;
}
export interface AbsoluteTxPositionAminoMsg {
  type: "/secret.compute.v1beta1.AbsoluteTxPosition";
  value: AbsoluteTxPositionAmino;
}
/** AbsoluteTxPosition can be used to sort contracts */

export interface AbsoluteTxPositionSDKType {
  block_height: Long;
  tx_index: Long;
}
/** Model is a struct that holds a KV pair */

export interface Model {
  /** hex-encode key to read it better (this is often ascii) */
  Key: Uint8Array;
  /** base64-encode raw value */

  Value: Uint8Array;
}
export interface ModelProtoMsg {
  typeUrl: "/secret.compute.v1beta1.Model";
  value: Uint8Array;
}
/** Model is a struct that holds a KV pair */

export interface ModelAmino {
  /** hex-encode key to read it better (this is often ascii) */
  Key: Uint8Array;
  /** base64-encode raw value */

  Value: Uint8Array;
}
export interface ModelAminoMsg {
  type: "/secret.compute.v1beta1.Model";
  value: ModelAmino;
}
/** Model is a struct that holds a KV pair */

export interface ModelSDKType {
  Key: Uint8Array;
  Value: Uint8Array;
}

function createBaseAccessTypeParam(): AccessTypeParam {
  return {
    value: 0
  };
}

export const AccessTypeParam = {
  typeUrl: "/secret.compute.v1beta1.AccessTypeParam",

  encode(message: AccessTypeParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessTypeParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTypeParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0
    };
  },

  toJSON(message: AccessTypeParam): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = accessTypeToJSON(message.value));
    return obj;
  },

  fromPartial(object: DeepPartial<AccessTypeParam>): AccessTypeParam {
    const message = createBaseAccessTypeParam();
    message.value = object.value ?? 0;
    return message;
  },

  fromSDK(object: AccessTypeParamSDKType): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0
    };
  },

  toSDK(message: AccessTypeParam): AccessTypeParamSDKType {
    const obj: any = {};
    message.value !== undefined && (obj.value = accessTypeToJSON(message.value));
    return obj;
  },

  fromAmino(object: AccessTypeParamAmino): AccessTypeParam {
    return {
      value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0
    };
  },

  toAmino(message: AccessTypeParam): AccessTypeParamAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAminoMsg(object: AccessTypeParamAminoMsg): AccessTypeParam {
    return AccessTypeParam.fromAmino(object.value);
  },

  fromProtoMsg(message: AccessTypeParamProtoMsg): AccessTypeParam {
    return AccessTypeParam.decode(message.value);
  },

  toProto(message: AccessTypeParam): Uint8Array {
    return AccessTypeParam.encode(message).finish();
  },

  toProtoMsg(message: AccessTypeParam): AccessTypeParamProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.AccessTypeParam",
      value: AccessTypeParam.encode(message).finish()
    };
  }

};

function createBaseCodeInfo(): CodeInfo {
  return {
    codeHash: new Uint8Array(),
    creator: new Uint8Array(),
    source: "",
    builder: ""
  };
}

export const CodeInfo = {
  typeUrl: "/secret.compute.v1beta1.CodeInfo",

  encode(message: CodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }

    if (message.creator.length !== 0) {
      writer.uint32(18).bytes(message.creator);
    }

    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }

    if (message.builder !== "") {
      writer.uint32(34).string(message.builder);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;

        case 2:
          message.creator = reader.bytes();
          break;

        case 3:
          message.source = reader.string();
          break;

        case 4:
          message.builder = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeInfo {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : ""
    };
  },

  toJSON(message: CodeInfo): unknown {
    const obj: any = {};
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    message.creator !== undefined && (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    return obj;
  },

  fromPartial(object: DeepPartial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? new Uint8Array();
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    return message;
  },

  fromSDK(object: CodeInfoSDKType): CodeInfo {
    return {
      codeHash: object?.code_hash,
      creator: object?.creator,
      source: object?.source,
      builder: object?.builder
    };
  },

  toSDK(message: CodeInfo): CodeInfoSDKType {
    const obj: any = {};
    obj.code_hash = message.codeHash;
    obj.creator = message.creator;
    obj.source = message.source;
    obj.builder = message.builder;
    return obj;
  },

  fromAmino(object: CodeInfoAmino): CodeInfo {
    return {
      codeHash: object.code_hash,
      creator: object.creator,
      source: object.source,
      builder: object.builder
    };
  },

  toAmino(message: CodeInfo): CodeInfoAmino {
    const obj: any = {};
    obj.code_hash = message.codeHash;
    obj.creator = message.creator;
    obj.source = message.source;
    obj.builder = message.builder;
    return obj;
  },

  fromAminoMsg(object: CodeInfoAminoMsg): CodeInfo {
    return CodeInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: CodeInfoProtoMsg): CodeInfo {
    return CodeInfo.decode(message.value);
  },

  toProto(message: CodeInfo): Uint8Array {
    return CodeInfo.encode(message).finish();
  },

  toProtoMsg(message: CodeInfo): CodeInfoProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.CodeInfo",
      value: CodeInfo.encode(message).finish()
    };
  }

};

function createBaseContractCustomInfo(): ContractCustomInfo {
  return {
    enclaveKey: new Uint8Array(),
    label: ""
  };
}

export const ContractCustomInfo = {
  typeUrl: "/secret.compute.v1beta1.ContractCustomInfo",

  encode(message: ContractCustomInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enclaveKey.length !== 0) {
      writer.uint32(10).bytes(message.enclaveKey);
    }

    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractCustomInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCustomInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.enclaveKey = reader.bytes();
          break;

        case 2:
          message.label = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractCustomInfo {
    return {
      enclaveKey: isSet(object.enclaveKey) ? bytesFromBase64(object.enclaveKey) : new Uint8Array(),
      label: isSet(object.label) ? String(object.label) : ""
    };
  },

  toJSON(message: ContractCustomInfo): unknown {
    const obj: any = {};
    message.enclaveKey !== undefined && (obj.enclaveKey = base64FromBytes(message.enclaveKey !== undefined ? message.enclaveKey : new Uint8Array()));
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  fromPartial(object: DeepPartial<ContractCustomInfo>): ContractCustomInfo {
    const message = createBaseContractCustomInfo();
    message.enclaveKey = object.enclaveKey ?? new Uint8Array();
    message.label = object.label ?? "";
    return message;
  },

  fromSDK(object: ContractCustomInfoSDKType): ContractCustomInfo {
    return {
      enclaveKey: object?.enclave_key,
      label: object?.label
    };
  },

  toSDK(message: ContractCustomInfo): ContractCustomInfoSDKType {
    const obj: any = {};
    obj.enclave_key = message.enclaveKey;
    obj.label = message.label;
    return obj;
  },

  fromAmino(object: ContractCustomInfoAmino): ContractCustomInfo {
    return {
      enclaveKey: object.enclave_key,
      label: object.label
    };
  },

  toAmino(message: ContractCustomInfo): ContractCustomInfoAmino {
    const obj: any = {};
    obj.enclave_key = message.enclaveKey;
    obj.label = message.label;
    return obj;
  },

  fromAminoMsg(object: ContractCustomInfoAminoMsg): ContractCustomInfo {
    return ContractCustomInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: ContractCustomInfoProtoMsg): ContractCustomInfo {
    return ContractCustomInfo.decode(message.value);
  },

  toProto(message: ContractCustomInfo): Uint8Array {
    return ContractCustomInfo.encode(message).finish();
  },

  toProtoMsg(message: ContractCustomInfo): ContractCustomInfoProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.ContractCustomInfo",
      value: ContractCustomInfo.encode(message).finish()
    };
  }

};

function createBaseContractInfo(): ContractInfo {
  return {
    codeId: Long.UZERO,
    creator: new Uint8Array(),
    label: "",
    created: undefined,
    ibcPortId: ""
  };
}

export const ContractInfo = {
  typeUrl: "/secret.compute.v1beta1.ContractInfo",

  encode(message: ContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.creator.length !== 0) {
      writer.uint32(18).bytes(message.creator);
    }

    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }

    if (message.created !== undefined) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }

    if (message.ibcPortId !== "") {
      writer.uint32(50).string(message.ibcPortId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.bytes();
          break;

        case 4:
          message.label = reader.string();
          break;

        case 5:
          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;

        case 6:
          message.ibcPortId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractInfo {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      label: isSet(object.label) ? String(object.label) : "",
      created: isSet(object.created) ? AbsoluteTxPosition.fromJSON(object.created) : undefined,
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : ""
    };
  },

  toJSON(message: ContractInfo): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.label !== undefined && (obj.label = message.label);
    message.created !== undefined && (obj.created = message.created ? AbsoluteTxPosition.toJSON(message.created) : undefined);
    message.ibcPortId !== undefined && (obj.ibcPortId = message.ibcPortId);
    return obj;
  },

  fromPartial(object: DeepPartial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.creator = object.creator ?? new Uint8Array();
    message.label = object.label ?? "";
    message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
    message.ibcPortId = object.ibcPortId ?? "";
    return message;
  },

  fromSDK(object: ContractInfoSDKType): ContractInfo {
    return {
      codeId: object?.code_id,
      creator: object?.creator,
      label: object?.label,
      created: object.created ? AbsoluteTxPosition.fromSDK(object.created) : undefined,
      ibcPortId: object?.ibc_port_id
    };
  },

  toSDK(message: ContractInfo): ContractInfoSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    obj.creator = message.creator;
    obj.label = message.label;
    message.created !== undefined && (obj.created = message.created ? AbsoluteTxPosition.toSDK(message.created) : undefined);
    obj.ibc_port_id = message.ibcPortId;
    return obj;
  },

  fromAmino(object: ContractInfoAmino): ContractInfo {
    return {
      codeId: Long.fromString(object.code_id),
      creator: object.creator,
      label: object.label,
      created: object?.created ? AbsoluteTxPosition.fromAmino(object.created) : undefined,
      ibcPortId: object.ibc_port_id
    };
  },

  toAmino(message: ContractInfo): ContractInfoAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.creator = message.creator;
    obj.label = message.label;
    obj.created = message.created ? AbsoluteTxPosition.toAmino(message.created) : undefined;
    obj.ibc_port_id = message.ibcPortId;
    return obj;
  },

  fromAminoMsg(object: ContractInfoAminoMsg): ContractInfo {
    return ContractInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: ContractInfoProtoMsg): ContractInfo {
    return ContractInfo.decode(message.value);
  },

  toProto(message: ContractInfo): Uint8Array {
    return ContractInfo.encode(message).finish();
  },

  toProtoMsg(message: ContractInfo): ContractInfoProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.ContractInfo",
      value: ContractInfo.encode(message).finish()
    };
  }

};

function createBaseAbsoluteTxPosition(): AbsoluteTxPosition {
  return {
    blockHeight: Long.ZERO,
    txIndex: Long.UZERO
  };
}

export const AbsoluteTxPosition = {
  typeUrl: "/secret.compute.v1beta1.AbsoluteTxPosition",

  encode(message: AbsoluteTxPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }

    if (!message.txIndex.isZero()) {
      writer.uint32(16).uint64(message.txIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbsoluteTxPosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 2:
          message.txIndex = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AbsoluteTxPosition {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      txIndex: isSet(object.txIndex) ? Long.fromValue(object.txIndex) : Long.UZERO
    };
  },

  toJSON(message: AbsoluteTxPosition): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.txIndex !== undefined && (obj.txIndex = (message.txIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<AbsoluteTxPosition>): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? Long.fromValue(object.txIndex) : Long.UZERO;
    return message;
  },

  fromSDK(object: AbsoluteTxPositionSDKType): AbsoluteTxPosition {
    return {
      blockHeight: object?.block_height,
      txIndex: object?.tx_index
    };
  },

  toSDK(message: AbsoluteTxPosition): AbsoluteTxPositionSDKType {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    obj.tx_index = message.txIndex;
    return obj;
  },

  fromAmino(object: AbsoluteTxPositionAmino): AbsoluteTxPosition {
    return {
      blockHeight: Long.fromString(object.block_height),
      txIndex: Long.fromString(object.tx_index)
    };
  },

  toAmino(message: AbsoluteTxPosition): AbsoluteTxPositionAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.tx_index = message.txIndex ? message.txIndex.toString() : undefined;
    return obj;
  },

  fromAminoMsg(object: AbsoluteTxPositionAminoMsg): AbsoluteTxPosition {
    return AbsoluteTxPosition.fromAmino(object.value);
  },

  fromProtoMsg(message: AbsoluteTxPositionProtoMsg): AbsoluteTxPosition {
    return AbsoluteTxPosition.decode(message.value);
  },

  toProto(message: AbsoluteTxPosition): Uint8Array {
    return AbsoluteTxPosition.encode(message).finish();
  },

  toProtoMsg(message: AbsoluteTxPosition): AbsoluteTxPositionProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.AbsoluteTxPosition",
      value: AbsoluteTxPosition.encode(message).finish()
    };
  }

};

function createBaseModel(): Model {
  return {
    Key: new Uint8Array(),
    Value: new Uint8Array()
  };
}

export const Model = {
  typeUrl: "/secret.compute.v1beta1.Model",

  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Key.length !== 0) {
      writer.uint32(10).bytes(message.Key);
    }

    if (message.Value.length !== 0) {
      writer.uint32(18).bytes(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Key = reader.bytes();
          break;

        case 2:
          message.Value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Model {
    return {
      Key: isSet(object.Key) ? bytesFromBase64(object.Key) : new Uint8Array(),
      Value: isSet(object.Value) ? bytesFromBase64(object.Value) : new Uint8Array()
    };
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    message.Key !== undefined && (obj.Key = base64FromBytes(message.Key !== undefined ? message.Key : new Uint8Array()));
    message.Value !== undefined && (obj.Value = base64FromBytes(message.Value !== undefined ? message.Value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Model>): Model {
    const message = createBaseModel();
    message.Key = object.Key ?? new Uint8Array();
    message.Value = object.Value ?? new Uint8Array();
    return message;
  },

  fromSDK(object: ModelSDKType): Model {
    return {
      Key: object?.Key,
      Value: object?.Value
    };
  },

  toSDK(message: Model): ModelSDKType {
    const obj: any = {};
    obj.Key = message.Key;
    obj.Value = message.Value;
    return obj;
  },

  fromAmino(object: ModelAmino): Model {
    return {
      Key: object.Key,
      Value: object.Value
    };
  },

  toAmino(message: Model): ModelAmino {
    const obj: any = {};
    obj.Key = message.Key;
    obj.Value = message.Value;
    return obj;
  },

  fromAminoMsg(object: ModelAminoMsg): Model {
    return Model.fromAmino(object.value);
  },

  fromProtoMsg(message: ModelProtoMsg): Model {
    return Model.decode(message.value);
  },

  toProto(message: Model): Uint8Array {
    return Model.encode(message).finish();
  },

  toProtoMsg(message: Model): ModelProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.Model",
      value: Model.encode(message).finish()
    };
  }

};
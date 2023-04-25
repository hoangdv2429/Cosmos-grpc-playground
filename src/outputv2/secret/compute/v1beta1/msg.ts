import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
export const protobufPackage = "secret.compute.v1beta1";
export interface MsgStoreCode {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  /** WASMByteCode can be raw or gzip compressed */

  wasmByteCode: Uint8Array;
  /** Source is a valid absolute HTTPS URI to the contract's source code, optional */

  source: string;
  /** Builder is a valid docker image name with tag, optional */

  builder: string;
}
export interface MsgStoreCodeProtoMsg {
  typeUrl: "/secret.compute.v1beta1.MsgStoreCode";
  value: Uint8Array;
}
export interface MsgStoreCodeAmino {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  /** WASMByteCode can be raw or gzip compressed */

  wasm_byte_code: string;
  /** Source is a valid absolute HTTPS URI to the contract's source code, optional */

  source: string;
  /** Builder is a valid docker image name with tag, optional */

  builder: string;
}
export interface MsgStoreCodeAminoMsg {
  type: "/secret.compute.v1beta1.MsgStoreCode";
  value: MsgStoreCodeAmino;
}
export interface MsgStoreCodeSDKType {
  sender: Uint8Array;
  wasm_byte_code: Uint8Array;
  source: string;
  builder: string;
}
/** MsgStoreCodeResponse returns store result data. */

export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
}
export interface MsgStoreCodeResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.MsgStoreCodeResponse";
  value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */

export interface MsgStoreCodeResponseAmino {
  /** CodeID is the reference to the stored WASM code */
  code_id: string;
}
export interface MsgStoreCodeResponseAminoMsg {
  type: "/secret.compute.v1beta1.MsgStoreCodeResponse";
  value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse returns store result data. */

export interface MsgStoreCodeResponseSDKType {
  code_id: Long;
}
export interface MsgInstantiateContract {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  callbackCodeHash: string;
  codeId: Long;
  label: string;
  initMsg: Uint8Array;
  initFunds: Coin[];
  /** used internally for encryption, should always be empty in a signed transaction */

  callbackSig: Uint8Array;
}
export interface MsgInstantiateContractProtoMsg {
  typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract";
  value: Uint8Array;
}
export interface MsgInstantiateContractAmino {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  callback_code_hash: string;
  code_id: string;
  label: string;
  init_msg: Uint8Array;
  init_funds: CoinAmino[];
  /** used internally for encryption, should always be empty in a signed transaction */

  callback_sig: Uint8Array;
}
export interface MsgInstantiateContractAminoMsg {
  type: "/secret.compute.v1beta1.MsgInstantiateContract";
  value: MsgInstantiateContractAmino;
}
export interface MsgInstantiateContractSDKType {
  sender: Uint8Array;
  callback_code_hash: string;
  code_id: Long;
  label: string;
  init_msg: Uint8Array;
  init_funds: CoinSDKType[];
  callback_sig: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */

export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */

  data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.MsgInstantiateContractResponse";
  value: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */

export interface MsgInstantiateContractResponseAmino {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */

  data: Uint8Array;
}
export interface MsgInstantiateContractResponseAminoMsg {
  type: "/secret.compute.v1beta1.MsgInstantiateContractResponse";
  value: MsgInstantiateContractResponseAmino;
}
/** MsgInstantiateContractResponse return instantiation result data */

export interface MsgInstantiateContractResponseSDKType {
  address: string;
  data: Uint8Array;
}
export interface MsgExecuteContract {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  /** contract is the canonical address of the contract */

  contract: Uint8Array;
  msg: Uint8Array;
  callbackCodeHash: string;
  sentFunds: Coin[];
  /** used internally for encryption, should always be empty in a signed transaction */

  callbackSig: Uint8Array;
}
export interface MsgExecuteContractProtoMsg {
  typeUrl: "/secret.compute.v1beta1.MsgExecuteContract";
  value: Uint8Array;
}
export interface MsgExecuteContractAmino {
  /** sender is the canonical address of the sender */
  sender: Uint8Array;
  /** contract is the canonical address of the contract */

  contract: Uint8Array;
  msg: Uint8Array;
  callback_code_hash: string;
  sent_funds: CoinAmino[];
  /** used internally for encryption, should always be empty in a signed transaction */

  callback_sig: Uint8Array;
}
export interface MsgExecuteContractAminoMsg {
  type: "/secret.compute.v1beta1.MsgExecuteContract";
  value: MsgExecuteContractAmino;
}
export interface MsgExecuteContractSDKType {
  sender: Uint8Array;
  contract: Uint8Array;
  msg: Uint8Array;
  callback_code_hash: string;
  sent_funds: CoinSDKType[];
  callback_sig: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.MsgExecuteContractResponse";
  value: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponseAmino {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgExecuteContractResponseAminoMsg {
  type: "/secret.compute.v1beta1.MsgExecuteContractResponse";
  value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponseSDKType {
  data: Uint8Array;
}

function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: new Uint8Array(),
    wasmByteCode: new Uint8Array(),
    source: "",
    builder: ""
  };
}

export const MsgStoreCode = {
  typeUrl: "/secret.compute.v1beta1.MsgStoreCode",

  encode(message: MsgStoreCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }

    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }

    if (message.builder !== "") {
      writer.uint32(34).string(message.builder);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.wasmByteCode = reader.bytes();
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

  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : ""
    };
  },

  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.wasmByteCode !== undefined && (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? new Uint8Array();
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    return message;
  },

  fromSDK(object: MsgStoreCodeSDKType): MsgStoreCode {
    return {
      sender: object?.sender,
      wasmByteCode: object?.wasm_byte_code,
      source: object?.source,
      builder: object?.builder
    };
  },

  toSDK(message: MsgStoreCode): MsgStoreCodeSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.wasm_byte_code = message.wasmByteCode;
    obj.source = message.source;
    obj.builder = message.builder;
    return obj;
  },

  fromAmino(object: MsgStoreCodeAmino): MsgStoreCode {
    return {
      sender: object.sender,
      wasmByteCode: fromBase64(object.wasm_byte_code),
      source: object.source,
      builder: object.builder
    };
  },

  toAmino(message: MsgStoreCode): MsgStoreCodeAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.wasm_byte_code = message.wasmByteCode ? toBase64(message.wasmByteCode) : undefined;
    obj.source = message.source;
    obj.builder = message.builder;
    return obj;
  },

  fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode {
    return MsgStoreCode.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode {
    return MsgStoreCode.decode(message.value);
  },

  toProto(message: MsgStoreCode): Uint8Array {
    return MsgStoreCode.encode(message).finish();
  },

  toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.MsgStoreCode",
      value: MsgStoreCode.encode(message).finish()
    };
  }

};

function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: Long.UZERO
  };
}

export const MsgStoreCodeResponse = {
  typeUrl: "/secret.compute.v1beta1.MsgStoreCodeResponse",

  encode(message: MsgStoreCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },

  toJSON(message: MsgStoreCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  },

  fromSDK(object: MsgStoreCodeResponseSDKType): MsgStoreCodeResponse {
    return {
      codeId: object?.code_id
    };
  },

  toSDK(message: MsgStoreCodeResponse): MsgStoreCodeResponseSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    return obj;
  },

  fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse {
    return {
      codeId: Long.fromString(object.code_id)
    };
  },

  toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    return obj;
  },

  fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.decode(message.value);
  },

  toProto(message: MsgStoreCodeResponse): Uint8Array {
    return MsgStoreCodeResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.encode(message).finish()
    };
  }

};

function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: new Uint8Array(),
    callbackCodeHash: "",
    codeId: Long.UZERO,
    label: "",
    initMsg: new Uint8Array(),
    initFunds: [],
    callbackSig: new Uint8Array()
  };
}

export const MsgInstantiateContract = {
  typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract",

  encode(message: MsgInstantiateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.callbackCodeHash !== "") {
      writer.uint32(18).string(message.callbackCodeHash);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }

    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }

    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }

    for (const v of message.initFunds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.callbackSig.length !== 0) {
      writer.uint32(58).bytes(message.callbackSig);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.callbackCodeHash = reader.string();
          break;

        case 3:
          message.codeId = (reader.uint64() as Long);
          break;

        case 4:
          message.label = reader.string();
          break;

        case 5:
          message.initMsg = reader.bytes();
          break;

        case 6:
          message.initFunds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.callbackSig = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      callbackCodeHash: isSet(object.callbackCodeHash) ? String(object.callbackCodeHash) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(),
      initFunds: Array.isArray(object?.initFunds) ? object.initFunds.map((e: any) => Coin.fromJSON(e)) : [],
      callbackSig: isSet(object.callbackSig) ? bytesFromBase64(object.callbackSig) : new Uint8Array()
    };
  },

  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.callbackCodeHash !== undefined && (obj.callbackCodeHash = message.callbackCodeHash);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.initMsg !== undefined && (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array()));

    if (message.initFunds) {
      obj.initFunds = message.initFunds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initFunds = [];
    }

    message.callbackSig !== undefined && (obj.callbackSig = base64FromBytes(message.callbackSig !== undefined ? message.callbackSig : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? new Uint8Array();
    message.callbackCodeHash = object.callbackCodeHash ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.initFunds = object.initFunds?.map(e => Coin.fromPartial(e)) || [];
    message.callbackSig = object.callbackSig ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgInstantiateContractSDKType): MsgInstantiateContract {
    return {
      sender: object?.sender,
      callbackCodeHash: object?.callback_code_hash,
      codeId: object?.code_id,
      label: object?.label,
      initMsg: object?.init_msg,
      initFunds: Array.isArray(object?.init_funds) ? object.init_funds.map((e: any) => Coin.fromSDK(e)) : [],
      callbackSig: object?.callback_sig
    };
  },

  toSDK(message: MsgInstantiateContract): MsgInstantiateContractSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.callback_code_hash = message.callbackCodeHash;
    obj.code_id = message.codeId;
    obj.label = message.label;
    obj.init_msg = message.initMsg;

    if (message.initFunds) {
      obj.init_funds = message.initFunds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.init_funds = [];
    }

    obj.callback_sig = message.callbackSig;
    return obj;
  },

  fromAmino(object: MsgInstantiateContractAmino): MsgInstantiateContract {
    return {
      sender: object.sender,
      callbackCodeHash: object.callback_code_hash,
      codeId: Long.fromString(object.code_id),
      label: object.label,
      initMsg: object.init_msg,
      initFunds: Array.isArray(object?.init_funds) ? object.init_funds.map((e: any) => Coin.fromAmino(e)) : [],
      callbackSig: object.callback_sig
    };
  },

  toAmino(message: MsgInstantiateContract): MsgInstantiateContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.callback_code_hash = message.callbackCodeHash;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.label = message.label;
    obj.init_msg = message.initMsg;

    if (message.initFunds) {
      obj.init_funds = message.initFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.init_funds = [];
    }

    obj.callback_sig = message.callbackSig;
    return obj;
  },

  fromAminoMsg(object: MsgInstantiateContractAminoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract {
    return MsgInstantiateContract.decode(message.value);
  },

  toProto(message: MsgInstantiateContract): Uint8Array {
    return MsgInstantiateContract.encode(message).finish();
  },

  toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract",
      value: MsgInstantiateContract.encode(message).finish()
    };
  }

};

function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}

export const MsgInstantiateContractResponse = {
  typeUrl: "/secret.compute.v1beta1.MsgInstantiateContractResponse",

  encode(message: MsgInstantiateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgInstantiateContractResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgInstantiateContractResponseSDKType): MsgInstantiateContractResponse {
    return {
      address: object?.address,
      data: object?.data
    };
  },

  toSDK(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },

  fromAmino(object: MsgInstantiateContractResponseAmino): MsgInstantiateContractResponse {
    return {
      address: object.address,
      data: object.data
    };
  },

  toAmino(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.data = message.data;
    return obj;
  },

  fromAminoMsg(object: MsgInstantiateContractResponseAminoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.decode(message.value);
  },

  toProto(message: MsgInstantiateContractResponse): Uint8Array {
    return MsgInstantiateContractResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.MsgInstantiateContractResponse",
      value: MsgInstantiateContractResponse.encode(message).finish()
    };
  }

};

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: new Uint8Array(),
    contract: new Uint8Array(),
    msg: new Uint8Array(),
    callbackCodeHash: "",
    sentFunds: [],
    callbackSig: new Uint8Array()
  };
}

export const MsgExecuteContract = {
  typeUrl: "/secret.compute.v1beta1.MsgExecuteContract",

  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.contract.length !== 0) {
      writer.uint32(18).bytes(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }

    if (message.callbackCodeHash !== "") {
      writer.uint32(34).string(message.callbackCodeHash);
    }

    for (const v of message.sentFunds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.callbackSig.length !== 0) {
      writer.uint32(50).bytes(message.callbackSig);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.contract = reader.bytes();
          break;

        case 3:
          message.msg = reader.bytes();
          break;

        case 4:
          message.callbackCodeHash = reader.string();
          break;

        case 5:
          message.sentFunds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.callbackSig = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      contract: isSet(object.contract) ? bytesFromBase64(object.contract) : new Uint8Array(),
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      callbackCodeHash: isSet(object.callbackCodeHash) ? String(object.callbackCodeHash) : "",
      sentFunds: Array.isArray(object?.sentFunds) ? object.sentFunds.map((e: any) => Coin.fromJSON(e)) : [],
      callbackSig: isSet(object.callbackSig) ? bytesFromBase64(object.callbackSig) : new Uint8Array()
    };
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.contract !== undefined && (obj.contract = base64FromBytes(message.contract !== undefined ? message.contract : new Uint8Array()));
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    message.callbackCodeHash !== undefined && (obj.callbackCodeHash = message.callbackCodeHash);

    if (message.sentFunds) {
      obj.sentFunds = message.sentFunds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.sentFunds = [];
    }

    message.callbackSig !== undefined && (obj.callbackSig = base64FromBytes(message.callbackSig !== undefined ? message.callbackSig : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? new Uint8Array();
    message.contract = object.contract ?? new Uint8Array();
    message.msg = object.msg ?? new Uint8Array();
    message.callbackCodeHash = object.callbackCodeHash ?? "";
    message.sentFunds = object.sentFunds?.map(e => Coin.fromPartial(e)) || [];
    message.callbackSig = object.callbackSig ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgExecuteContractSDKType): MsgExecuteContract {
    return {
      sender: object?.sender,
      contract: object?.contract,
      msg: object?.msg,
      callbackCodeHash: object?.callback_code_hash,
      sentFunds: Array.isArray(object?.sent_funds) ? object.sent_funds.map((e: any) => Coin.fromSDK(e)) : [],
      callbackSig: object?.callback_sig
    };
  },

  toSDK(message: MsgExecuteContract): MsgExecuteContractSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.msg = message.msg;
    obj.callback_code_hash = message.callbackCodeHash;

    if (message.sentFunds) {
      obj.sent_funds = message.sentFunds.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.sent_funds = [];
    }

    obj.callback_sig = message.callbackSig;
    return obj;
  },

  fromAmino(object: MsgExecuteContractAmino): MsgExecuteContract {
    return {
      sender: object.sender,
      contract: object.contract,
      msg: object.msg,
      callbackCodeHash: object.callback_code_hash,
      sentFunds: Array.isArray(object?.sent_funds) ? object.sent_funds.map((e: any) => Coin.fromAmino(e)) : [],
      callbackSig: object.callback_sig
    };
  },

  toAmino(message: MsgExecuteContract): MsgExecuteContractAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.msg = message.msg;
    obj.callback_code_hash = message.callbackCodeHash;

    if (message.sentFunds) {
      obj.sent_funds = message.sentFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.sent_funds = [];
    }

    obj.callback_sig = message.callbackSig;
    return obj;
  },

  fromAminoMsg(object: MsgExecuteContractAminoMsg): MsgExecuteContract {
    return MsgExecuteContract.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract {
    return MsgExecuteContract.decode(message.value);
  },

  toProto(message: MsgExecuteContract): Uint8Array {
    return MsgExecuteContract.encode(message).finish();
  },

  toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.MsgExecuteContract",
      value: MsgExecuteContract.encode(message).finish()
    };
  }

};

function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgExecuteContractResponse = {
  typeUrl: "/secret.compute.v1beta1.MsgExecuteContractResponse",

  encode(message: MsgExecuteContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgExecuteContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecuteContractResponse>): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MsgExecuteContractResponseSDKType): MsgExecuteContractResponse {
    return {
      data: object?.data
    };
  },

  toSDK(message: MsgExecuteContractResponse): MsgExecuteContractResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },

  fromAmino(object: MsgExecuteContractResponseAmino): MsgExecuteContractResponse {
    return {
      data: object.data
    };
  },

  toAmino(message: MsgExecuteContractResponse): MsgExecuteContractResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },

  fromAminoMsg(object: MsgExecuteContractResponseAminoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.decode(message.value);
  },

  toProto(message: MsgExecuteContractResponse): Uint8Array {
    return MsgExecuteContractResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.MsgExecuteContractResponse",
      value: MsgExecuteContractResponse.encode(message).finish()
    };
  }

};
import { ContractInfo, ContractInfoAmino, ContractInfoSDKType } from "./types";
import { StringEvent, StringEventAmino, StringEventSDKType } from "../../../cosmos/base/abci/v1beta1/abci";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "secret.compute.v1beta1";
export interface QuerySecretContractRequest {
  /** address is the bech32 human readable address of the contract */
  contractAddress: string;
  query: Uint8Array;
}
export interface QuerySecretContractRequestProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QuerySecretContractRequest";
  value: Uint8Array;
}
export interface QuerySecretContractRequestAmino {
  /** address is the bech32 human readable address of the contract */
  contract_address: string;
  query: Uint8Array;
}
export interface QuerySecretContractRequestAminoMsg {
  type: "/secret.compute.v1beta1.QuerySecretContractRequest";
  value: QuerySecretContractRequestAmino;
}
export interface QuerySecretContractRequestSDKType {
  contract_address: string;
  query: Uint8Array;
}
export interface QueryByLabelRequest {
  label: string;
}
export interface QueryByLabelRequestProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryByLabelRequest";
  value: Uint8Array;
}
export interface QueryByLabelRequestAmino {
  label: string;
}
export interface QueryByLabelRequestAminoMsg {
  type: "/secret.compute.v1beta1.QueryByLabelRequest";
  value: QueryByLabelRequestAmino;
}
export interface QueryByLabelRequestSDKType {
  label: string;
}
export interface QueryByContractAddressRequest {
  /** address is the bech32 human readable address of the contract */
  contractAddress: string;
}
export interface QueryByContractAddressRequestProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryByContractAddressRequest";
  value: Uint8Array;
}
export interface QueryByContractAddressRequestAmino {
  /** address is the bech32 human readable address of the contract */
  contract_address: string;
}
export interface QueryByContractAddressRequestAminoMsg {
  type: "/secret.compute.v1beta1.QueryByContractAddressRequest";
  value: QueryByContractAddressRequestAmino;
}
export interface QueryByContractAddressRequestSDKType {
  contract_address: string;
}
export interface QueryByCodeIdRequest {
  codeId: Long;
}
export interface QueryByCodeIdRequestProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryByCodeIdRequest";
  value: Uint8Array;
}
export interface QueryByCodeIdRequestAmino {
  code_id: string;
}
export interface QueryByCodeIdRequestAminoMsg {
  type: "/secret.compute.v1beta1.QueryByCodeIdRequest";
  value: QueryByCodeIdRequestAmino;
}
export interface QueryByCodeIdRequestSDKType {
  code_id: Long;
}
export interface QuerySecretContractResponse {
  data: Uint8Array;
}
export interface QuerySecretContractResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QuerySecretContractResponse";
  value: Uint8Array;
}
export interface QuerySecretContractResponseAmino {
  data: Uint8Array;
}
export interface QuerySecretContractResponseAminoMsg {
  type: "/secret.compute.v1beta1.QuerySecretContractResponse";
  value: QuerySecretContractResponseAmino;
}
export interface QuerySecretContractResponseSDKType {
  data: Uint8Array;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */

export interface QueryContractInfoResponse {
  /** contract_address is the bech32 human readable address of the contract */
  contractAddress: string;
  ContractInfo?: ContractInfo;
}
export interface QueryContractInfoResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryContractInfoResponse";
  value: Uint8Array;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */

export interface QueryContractInfoResponseAmino {
  /** contract_address is the bech32 human readable address of the contract */
  contract_address: string;
  ContractInfo?: ContractInfoAmino;
}
export interface QueryContractInfoResponseAminoMsg {
  type: "/secret.compute.v1beta1.QueryContractInfoResponse";
  value: QueryContractInfoResponseAmino;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */

export interface QueryContractInfoResponseSDKType {
  contract_address: string;
  ContractInfo?: ContractInfoSDKType;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */

export interface ContractInfoWithAddress {
  /** contract_address is the bech32 human readable address of the contract */
  contractAddress: string;
  ContractInfo?: ContractInfo;
}
export interface ContractInfoWithAddressProtoMsg {
  typeUrl: "/secret.compute.v1beta1.ContractInfoWithAddress";
  value: Uint8Array;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */

export interface ContractInfoWithAddressAmino {
  /** contract_address is the bech32 human readable address of the contract */
  contract_address: string;
  ContractInfo?: ContractInfoAmino;
}
export interface ContractInfoWithAddressAminoMsg {
  type: "/secret.compute.v1beta1.ContractInfoWithAddress";
  value: ContractInfoWithAddressAmino;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */

export interface ContractInfoWithAddressSDKType {
  contract_address: string;
  ContractInfo?: ContractInfoSDKType;
}
export interface QueryContractsByCodeIdResponse {
  contractInfos: ContractInfoWithAddress[];
}
export interface QueryContractsByCodeIdResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryContractsByCodeIdResponse";
  value: Uint8Array;
}
export interface QueryContractsByCodeIdResponseAmino {
  contract_infos: ContractInfoWithAddressAmino[];
}
export interface QueryContractsByCodeIdResponseAminoMsg {
  type: "/secret.compute.v1beta1.QueryContractsByCodeIdResponse";
  value: QueryContractsByCodeIdResponseAmino;
}
export interface QueryContractsByCodeIdResponseSDKType {
  contract_infos: ContractInfoWithAddressSDKType[];
}
export interface CodeInfoResponse {
  codeId: Long;
  /** creator is the bech32 human readable address of the contract */

  creator: string;
  codeHash: string;
  source: string;
  builder: string;
}
export interface CodeInfoResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.CodeInfoResponse";
  value: Uint8Array;
}
export interface CodeInfoResponseAmino {
  code_id: string;
  /** creator is the bech32 human readable address of the contract */

  creator: string;
  code_hash: string;
  source: string;
  builder: string;
}
export interface CodeInfoResponseAminoMsg {
  type: "/secret.compute.v1beta1.CodeInfoResponse";
  value: CodeInfoResponseAmino;
}
export interface CodeInfoResponseSDKType {
  code_id: Long;
  creator: string;
  code_hash: string;
  source: string;
  builder: string;
}
export interface QueryCodeResponse {
  codeInfo?: CodeInfoResponse;
  wasm: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryCodeResponse";
  value: Uint8Array;
}
export interface QueryCodeResponseAmino {
  code_info?: CodeInfoResponseAmino;
  wasm: Uint8Array;
}
export interface QueryCodeResponseAminoMsg {
  type: "/secret.compute.v1beta1.QueryCodeResponse";
  value: QueryCodeResponseAmino;
}
export interface QueryCodeResponseSDKType {
  code_info?: CodeInfoResponseSDKType;
  wasm: Uint8Array;
}
export interface QueryCodesResponse {
  codeInfos: CodeInfoResponse[];
}
export interface QueryCodesResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryCodesResponse";
  value: Uint8Array;
}
export interface QueryCodesResponseAmino {
  code_infos: CodeInfoResponseAmino[];
}
export interface QueryCodesResponseAminoMsg {
  type: "/secret.compute.v1beta1.QueryCodesResponse";
  value: QueryCodesResponseAmino;
}
export interface QueryCodesResponseSDKType {
  code_infos: CodeInfoResponseSDKType[];
}
export interface QueryContractAddressResponse {
  /** address is the bech32 human readable address of the contract */
  contractAddress: string;
}
export interface QueryContractAddressResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryContractAddressResponse";
  value: Uint8Array;
}
export interface QueryContractAddressResponseAmino {
  /** address is the bech32 human readable address of the contract */
  contract_address: string;
}
export interface QueryContractAddressResponseAminoMsg {
  type: "/secret.compute.v1beta1.QueryContractAddressResponse";
  value: QueryContractAddressResponseAmino;
}
export interface QueryContractAddressResponseSDKType {
  contract_address: string;
}
export interface QueryContractLabelResponse {
  label: string;
}
export interface QueryContractLabelResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryContractLabelResponse";
  value: Uint8Array;
}
export interface QueryContractLabelResponseAmino {
  label: string;
}
export interface QueryContractLabelResponseAminoMsg {
  type: "/secret.compute.v1beta1.QueryContractLabelResponse";
  value: QueryContractLabelResponseAmino;
}
export interface QueryContractLabelResponseSDKType {
  label: string;
}
export interface QueryCodeHashResponse {
  codeHash: string;
}
export interface QueryCodeHashResponseProtoMsg {
  typeUrl: "/secret.compute.v1beta1.QueryCodeHashResponse";
  value: Uint8Array;
}
export interface QueryCodeHashResponseAmino {
  code_hash: string;
}
export interface QueryCodeHashResponseAminoMsg {
  type: "/secret.compute.v1beta1.QueryCodeHashResponse";
  value: QueryCodeHashResponseAmino;
}
export interface QueryCodeHashResponseSDKType {
  code_hash: string;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */

export interface DecryptedAnswer {
  type: string;
  input: string;
  outputData: string;
  outputDataAsString: string;
}
export interface DecryptedAnswerProtoMsg {
  typeUrl: "/secret.compute.v1beta1.DecryptedAnswer";
  value: Uint8Array;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */

export interface DecryptedAnswerAmino {
  type: string;
  input: string;
  output_data: string;
  output_data_as_string: string;
}
export interface DecryptedAnswerAminoMsg {
  type: "/secret.compute.v1beta1.DecryptedAnswer";
  value: DecryptedAnswerAmino;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */

export interface DecryptedAnswerSDKType {
  type: string;
  input: string;
  output_data: string;
  output_data_as_string: string;
}
export interface DecryptedAnswers {
  answers: DecryptedAnswer[];
  outputLogs: StringEvent[];
  outputError: string;
  plaintextError: string;
}
export interface DecryptedAnswersProtoMsg {
  typeUrl: "/secret.compute.v1beta1.DecryptedAnswers";
  value: Uint8Array;
}
export interface DecryptedAnswersAmino {
  answers: DecryptedAnswerAmino[];
  output_logs: StringEventAmino[];
  output_error: string;
  plaintext_error: string;
}
export interface DecryptedAnswersAminoMsg {
  type: "/secret.compute.v1beta1.DecryptedAnswers";
  value: DecryptedAnswersAmino;
}
export interface DecryptedAnswersSDKType {
  answers: DecryptedAnswerSDKType[];
  output_logs: StringEventSDKType[];
  output_error: string;
  plaintext_error: string;
}

function createBaseQuerySecretContractRequest(): QuerySecretContractRequest {
  return {
    contractAddress: "",
    query: new Uint8Array()
  };
}

export const QuerySecretContractRequest = {
  typeUrl: "/secret.compute.v1beta1.QuerySecretContractRequest",

  encode(message: QuerySecretContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.query.length !== 0) {
      writer.uint32(18).bytes(message.query);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySecretContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySecretContractRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.query = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySecretContractRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      query: isSet(object.query) ? bytesFromBase64(object.query) : new Uint8Array()
    };
  },

  toJSON(message: QuerySecretContractRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.query !== undefined && (obj.query = base64FromBytes(message.query !== undefined ? message.query : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySecretContractRequest>): QuerySecretContractRequest {
    const message = createBaseQuerySecretContractRequest();
    message.contractAddress = object.contractAddress ?? "";
    message.query = object.query ?? new Uint8Array();
    return message;
  },

  fromSDK(object: QuerySecretContractRequestSDKType): QuerySecretContractRequest {
    return {
      contractAddress: object?.contract_address,
      query: object?.query
    };
  },

  toSDK(message: QuerySecretContractRequest): QuerySecretContractRequestSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.query = message.query;
    return obj;
  },

  fromAmino(object: QuerySecretContractRequestAmino): QuerySecretContractRequest {
    return {
      contractAddress: object.contract_address,
      query: object.query
    };
  },

  toAmino(message: QuerySecretContractRequest): QuerySecretContractRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.query = message.query;
    return obj;
  },

  fromAminoMsg(object: QuerySecretContractRequestAminoMsg): QuerySecretContractRequest {
    return QuerySecretContractRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QuerySecretContractRequestProtoMsg): QuerySecretContractRequest {
    return QuerySecretContractRequest.decode(message.value);
  },

  toProto(message: QuerySecretContractRequest): Uint8Array {
    return QuerySecretContractRequest.encode(message).finish();
  },

  toProtoMsg(message: QuerySecretContractRequest): QuerySecretContractRequestProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QuerySecretContractRequest",
      value: QuerySecretContractRequest.encode(message).finish()
    };
  }

};

function createBaseQueryByLabelRequest(): QueryByLabelRequest {
  return {
    label: ""
  };
}

export const QueryByLabelRequest = {
  typeUrl: "/secret.compute.v1beta1.QueryByLabelRequest",

  encode(message: QueryByLabelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByLabelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByLabelRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.label = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByLabelRequest {
    return {
      label: isSet(object.label) ? String(object.label) : ""
    };
  },

  toJSON(message: QueryByLabelRequest): unknown {
    const obj: any = {};
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByLabelRequest>): QueryByLabelRequest {
    const message = createBaseQueryByLabelRequest();
    message.label = object.label ?? "";
    return message;
  },

  fromSDK(object: QueryByLabelRequestSDKType): QueryByLabelRequest {
    return {
      label: object?.label
    };
  },

  toSDK(message: QueryByLabelRequest): QueryByLabelRequestSDKType {
    const obj: any = {};
    obj.label = message.label;
    return obj;
  },

  fromAmino(object: QueryByLabelRequestAmino): QueryByLabelRequest {
    return {
      label: object.label
    };
  },

  toAmino(message: QueryByLabelRequest): QueryByLabelRequestAmino {
    const obj: any = {};
    obj.label = message.label;
    return obj;
  },

  fromAminoMsg(object: QueryByLabelRequestAminoMsg): QueryByLabelRequest {
    return QueryByLabelRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryByLabelRequestProtoMsg): QueryByLabelRequest {
    return QueryByLabelRequest.decode(message.value);
  },

  toProto(message: QueryByLabelRequest): Uint8Array {
    return QueryByLabelRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryByLabelRequest): QueryByLabelRequestProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryByLabelRequest",
      value: QueryByLabelRequest.encode(message).finish()
    };
  }

};

function createBaseQueryByContractAddressRequest(): QueryByContractAddressRequest {
  return {
    contractAddress: ""
  };
}

export const QueryByContractAddressRequest = {
  typeUrl: "/secret.compute.v1beta1.QueryByContractAddressRequest",

  encode(message: QueryByContractAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByContractAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByContractAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryByContractAddressRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: QueryByContractAddressRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByContractAddressRequest>): QueryByContractAddressRequest {
    const message = createBaseQueryByContractAddressRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },

  fromSDK(object: QueryByContractAddressRequestSDKType): QueryByContractAddressRequest {
    return {
      contractAddress: object?.contract_address
    };
  },

  toSDK(message: QueryByContractAddressRequest): QueryByContractAddressRequestSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },

  fromAmino(object: QueryByContractAddressRequestAmino): QueryByContractAddressRequest {
    return {
      contractAddress: object.contract_address
    };
  },

  toAmino(message: QueryByContractAddressRequest): QueryByContractAddressRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },

  fromAminoMsg(object: QueryByContractAddressRequestAminoMsg): QueryByContractAddressRequest {
    return QueryByContractAddressRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryByContractAddressRequestProtoMsg): QueryByContractAddressRequest {
    return QueryByContractAddressRequest.decode(message.value);
  },

  toProto(message: QueryByContractAddressRequest): Uint8Array {
    return QueryByContractAddressRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryByContractAddressRequest): QueryByContractAddressRequestProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryByContractAddressRequest",
      value: QueryByContractAddressRequest.encode(message).finish()
    };
  }

};

function createBaseQueryByCodeIdRequest(): QueryByCodeIdRequest {
  return {
    codeId: Long.UZERO
  };
}

export const QueryByCodeIdRequest = {
  typeUrl: "/secret.compute.v1beta1.QueryByCodeIdRequest",

  encode(message: QueryByCodeIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByCodeIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByCodeIdRequest();

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

  fromJSON(object: any): QueryByCodeIdRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },

  toJSON(message: QueryByCodeIdRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryByCodeIdRequest>): QueryByCodeIdRequest {
    const message = createBaseQueryByCodeIdRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryByCodeIdRequestSDKType): QueryByCodeIdRequest {
    return {
      codeId: object?.code_id
    };
  },

  toSDK(message: QueryByCodeIdRequest): QueryByCodeIdRequestSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    return obj;
  },

  fromAmino(object: QueryByCodeIdRequestAmino): QueryByCodeIdRequest {
    return {
      codeId: Long.fromString(object.code_id)
    };
  },

  toAmino(message: QueryByCodeIdRequest): QueryByCodeIdRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryByCodeIdRequestAminoMsg): QueryByCodeIdRequest {
    return QueryByCodeIdRequest.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryByCodeIdRequestProtoMsg): QueryByCodeIdRequest {
    return QueryByCodeIdRequest.decode(message.value);
  },

  toProto(message: QueryByCodeIdRequest): Uint8Array {
    return QueryByCodeIdRequest.encode(message).finish();
  },

  toProtoMsg(message: QueryByCodeIdRequest): QueryByCodeIdRequestProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryByCodeIdRequest",
      value: QueryByCodeIdRequest.encode(message).finish()
    };
  }

};

function createBaseQuerySecretContractResponse(): QuerySecretContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const QuerySecretContractResponse = {
  typeUrl: "/secret.compute.v1beta1.QuerySecretContractResponse",

  encode(message: QuerySecretContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySecretContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySecretContractResponse();

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

  fromJSON(object: any): QuerySecretContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QuerySecretContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySecretContractResponse>): QuerySecretContractResponse {
    const message = createBaseQuerySecretContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },

  fromSDK(object: QuerySecretContractResponseSDKType): QuerySecretContractResponse {
    return {
      data: object?.data
    };
  },

  toSDK(message: QuerySecretContractResponse): QuerySecretContractResponseSDKType {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },

  fromAmino(object: QuerySecretContractResponseAmino): QuerySecretContractResponse {
    return {
      data: object.data
    };
  },

  toAmino(message: QuerySecretContractResponse): QuerySecretContractResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    return obj;
  },

  fromAminoMsg(object: QuerySecretContractResponseAminoMsg): QuerySecretContractResponse {
    return QuerySecretContractResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QuerySecretContractResponseProtoMsg): QuerySecretContractResponse {
    return QuerySecretContractResponse.decode(message.value);
  },

  toProto(message: QuerySecretContractResponse): Uint8Array {
    return QuerySecretContractResponse.encode(message).finish();
  },

  toProtoMsg(message: QuerySecretContractResponse): QuerySecretContractResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QuerySecretContractResponse",
      value: QuerySecretContractResponse.encode(message).finish()
    };
  }

};

function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    contractAddress: "",
    ContractInfo: undefined
  };
}

export const QueryContractInfoResponse = {
  typeUrl: "/secret.compute.v1beta1.QueryContractInfoResponse",

  encode(message: QueryContractInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.ContractInfo !== undefined) {
      ContractInfo.encode(message.ContractInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.ContractInfo = ContractInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractInfoResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      ContractInfo: isSet(object.ContractInfo) ? ContractInfo.fromJSON(object.ContractInfo) : undefined
    };
  },

  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.ContractInfo !== undefined && (obj.ContractInfo = message.ContractInfo ? ContractInfo.toJSON(message.ContractInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.contractAddress = object.contractAddress ?? "";
    message.ContractInfo = object.ContractInfo !== undefined && object.ContractInfo !== null ? ContractInfo.fromPartial(object.ContractInfo) : undefined;
    return message;
  },

  fromSDK(object: QueryContractInfoResponseSDKType): QueryContractInfoResponse {
    return {
      contractAddress: object?.contract_address,
      ContractInfo: object.ContractInfo ? ContractInfo.fromSDK(object.ContractInfo) : undefined
    };
  },

  toSDK(message: QueryContractInfoResponse): QueryContractInfoResponseSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    message.ContractInfo !== undefined && (obj.ContractInfo = message.ContractInfo ? ContractInfo.toSDK(message.ContractInfo) : undefined);
    return obj;
  },

  fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse {
    return {
      contractAddress: object.contract_address,
      ContractInfo: object?.ContractInfo ? ContractInfo.fromAmino(object.ContractInfo) : undefined
    };
  },

  toAmino(message: QueryContractInfoResponse): QueryContractInfoResponseAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.ContractInfo = message.ContractInfo ? ContractInfo.toAmino(message.ContractInfo) : undefined;
    return obj;
  },

  fromAminoMsg(object: QueryContractInfoResponseAminoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryContractInfoResponseProtoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.decode(message.value);
  },

  toProto(message: QueryContractInfoResponse): Uint8Array {
    return QueryContractInfoResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryContractInfoResponse",
      value: QueryContractInfoResponse.encode(message).finish()
    };
  }

};

function createBaseContractInfoWithAddress(): ContractInfoWithAddress {
  return {
    contractAddress: "",
    ContractInfo: undefined
  };
}

export const ContractInfoWithAddress = {
  typeUrl: "/secret.compute.v1beta1.ContractInfoWithAddress",

  encode(message: ContractInfoWithAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.ContractInfo !== undefined) {
      ContractInfo.encode(message.ContractInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoWithAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoWithAddress();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.ContractInfo = ContractInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractInfoWithAddress {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      ContractInfo: isSet(object.ContractInfo) ? ContractInfo.fromJSON(object.ContractInfo) : undefined
    };
  },

  toJSON(message: ContractInfoWithAddress): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.ContractInfo !== undefined && (obj.ContractInfo = message.ContractInfo ? ContractInfo.toJSON(message.ContractInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ContractInfoWithAddress>): ContractInfoWithAddress {
    const message = createBaseContractInfoWithAddress();
    message.contractAddress = object.contractAddress ?? "";
    message.ContractInfo = object.ContractInfo !== undefined && object.ContractInfo !== null ? ContractInfo.fromPartial(object.ContractInfo) : undefined;
    return message;
  },

  fromSDK(object: ContractInfoWithAddressSDKType): ContractInfoWithAddress {
    return {
      contractAddress: object?.contract_address,
      ContractInfo: object.ContractInfo ? ContractInfo.fromSDK(object.ContractInfo) : undefined
    };
  },

  toSDK(message: ContractInfoWithAddress): ContractInfoWithAddressSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    message.ContractInfo !== undefined && (obj.ContractInfo = message.ContractInfo ? ContractInfo.toSDK(message.ContractInfo) : undefined);
    return obj;
  },

  fromAmino(object: ContractInfoWithAddressAmino): ContractInfoWithAddress {
    return {
      contractAddress: object.contract_address,
      ContractInfo: object?.ContractInfo ? ContractInfo.fromAmino(object.ContractInfo) : undefined
    };
  },

  toAmino(message: ContractInfoWithAddress): ContractInfoWithAddressAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.ContractInfo = message.ContractInfo ? ContractInfo.toAmino(message.ContractInfo) : undefined;
    return obj;
  },

  fromAminoMsg(object: ContractInfoWithAddressAminoMsg): ContractInfoWithAddress {
    return ContractInfoWithAddress.fromAmino(object.value);
  },

  fromProtoMsg(message: ContractInfoWithAddressProtoMsg): ContractInfoWithAddress {
    return ContractInfoWithAddress.decode(message.value);
  },

  toProto(message: ContractInfoWithAddress): Uint8Array {
    return ContractInfoWithAddress.encode(message).finish();
  },

  toProtoMsg(message: ContractInfoWithAddress): ContractInfoWithAddressProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.ContractInfoWithAddress",
      value: ContractInfoWithAddress.encode(message).finish()
    };
  }

};

function createBaseQueryContractsByCodeIdResponse(): QueryContractsByCodeIdResponse {
  return {
    contractInfos: []
  };
}

export const QueryContractsByCodeIdResponse = {
  typeUrl: "/secret.compute.v1beta1.QueryContractsByCodeIdResponse",

  encode(message: QueryContractsByCodeIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractInfos) {
      ContractInfoWithAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractInfos.push(ContractInfoWithAddress.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractsByCodeIdResponse {
    return {
      contractInfos: Array.isArray(object?.contractInfos) ? object.contractInfos.map((e: any) => ContractInfoWithAddress.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryContractsByCodeIdResponse): unknown {
    const obj: any = {};

    if (message.contractInfos) {
      obj.contractInfos = message.contractInfos.map(e => e ? ContractInfoWithAddress.toJSON(e) : undefined);
    } else {
      obj.contractInfos = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractsByCodeIdResponse>): QueryContractsByCodeIdResponse {
    const message = createBaseQueryContractsByCodeIdResponse();
    message.contractInfos = object.contractInfos?.map(e => ContractInfoWithAddress.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryContractsByCodeIdResponseSDKType): QueryContractsByCodeIdResponse {
    return {
      contractInfos: Array.isArray(object?.contract_infos) ? object.contract_infos.map((e: any) => ContractInfoWithAddress.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryContractsByCodeIdResponse): QueryContractsByCodeIdResponseSDKType {
    const obj: any = {};

    if (message.contractInfos) {
      obj.contract_infos = message.contractInfos.map(e => e ? ContractInfoWithAddress.toSDK(e) : undefined);
    } else {
      obj.contract_infos = [];
    }

    return obj;
  },

  fromAmino(object: QueryContractsByCodeIdResponseAmino): QueryContractsByCodeIdResponse {
    return {
      contractInfos: Array.isArray(object?.contract_infos) ? object.contract_infos.map((e: any) => ContractInfoWithAddress.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryContractsByCodeIdResponse): QueryContractsByCodeIdResponseAmino {
    const obj: any = {};

    if (message.contractInfos) {
      obj.contract_infos = message.contractInfos.map(e => e ? ContractInfoWithAddress.toAmino(e) : undefined);
    } else {
      obj.contract_infos = [];
    }

    return obj;
  },

  fromAminoMsg(object: QueryContractsByCodeIdResponseAminoMsg): QueryContractsByCodeIdResponse {
    return QueryContractsByCodeIdResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryContractsByCodeIdResponseProtoMsg): QueryContractsByCodeIdResponse {
    return QueryContractsByCodeIdResponse.decode(message.value);
  },

  toProto(message: QueryContractsByCodeIdResponse): Uint8Array {
    return QueryContractsByCodeIdResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryContractsByCodeIdResponse): QueryContractsByCodeIdResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryContractsByCodeIdResponse",
      value: QueryContractsByCodeIdResponse.encode(message).finish()
    };
  }

};

function createBaseCodeInfoResponse(): CodeInfoResponse {
  return {
    codeId: Long.UZERO,
    creator: "",
    codeHash: "",
    source: "",
    builder: ""
  };
}

export const CodeInfoResponse = {
  typeUrl: "/secret.compute.v1beta1.CodeInfoResponse",

  encode(message: CodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.codeHash !== "") {
      writer.uint32(26).string(message.codeHash);
    }

    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }

    if (message.builder !== "") {
      writer.uint32(42).string(message.builder);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.codeHash = reader.string();
          break;

        case 4:
          message.source = reader.string();
          break;

        case 5:
          message.builder = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeInfoResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      codeHash: isSet(object.codeHash) ? String(object.codeHash) : "",
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : ""
    };
  },

  toJSON(message: CodeInfoResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.codeHash !== undefined && (obj.codeHash = message.codeHash);
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    return obj;
  },

  fromPartial(object: DeepPartial<CodeInfoResponse>): CodeInfoResponse {
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.codeHash = object.codeHash ?? "";
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    return message;
  },

  fromSDK(object: CodeInfoResponseSDKType): CodeInfoResponse {
    return {
      codeId: object?.code_id,
      creator: object?.creator,
      codeHash: object?.code_hash,
      source: object?.source,
      builder: object?.builder
    };
  },

  toSDK(message: CodeInfoResponse): CodeInfoResponseSDKType {
    const obj: any = {};
    obj.code_id = message.codeId;
    obj.creator = message.creator;
    obj.code_hash = message.codeHash;
    obj.source = message.source;
    obj.builder = message.builder;
    return obj;
  },

  fromAmino(object: CodeInfoResponseAmino): CodeInfoResponse {
    return {
      codeId: Long.fromString(object.code_id),
      creator: object.creator,
      codeHash: object.code_hash,
      source: object.source,
      builder: object.builder
    };
  },

  toAmino(message: CodeInfoResponse): CodeInfoResponseAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.creator = message.creator;
    obj.code_hash = message.codeHash;
    obj.source = message.source;
    obj.builder = message.builder;
    return obj;
  },

  fromAminoMsg(object: CodeInfoResponseAminoMsg): CodeInfoResponse {
    return CodeInfoResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: CodeInfoResponseProtoMsg): CodeInfoResponse {
    return CodeInfoResponse.decode(message.value);
  },

  toProto(message: CodeInfoResponse): Uint8Array {
    return CodeInfoResponse.encode(message).finish();
  },

  toProtoMsg(message: CodeInfoResponse): CodeInfoResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.CodeInfoResponse",
      value: CodeInfoResponse.encode(message).finish()
    };
  }

};

function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    wasm: new Uint8Array()
  };
}

export const QueryCodeResponse = {
  typeUrl: "/secret.compute.v1beta1.QueryCodeResponse",

  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.wasm.length !== 0) {
      writer.uint32(18).bytes(message.wasm);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          break;

        case 2:
          message.wasm = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodeResponse {
    return {
      codeInfo: isSet(object.codeInfo) ? CodeInfoResponse.fromJSON(object.codeInfo) : undefined,
      wasm: isSet(object.wasm) ? bytesFromBase64(object.wasm) : new Uint8Array()
    };
  },

  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfoResponse.toJSON(message.codeInfo) : undefined);
    message.wasm !== undefined && (obj.wasm = base64FromBytes(message.wasm !== undefined ? message.wasm : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : undefined;
    message.wasm = object.wasm ?? new Uint8Array();
    return message;
  },

  fromSDK(object: QueryCodeResponseSDKType): QueryCodeResponse {
    return {
      codeInfo: object.code_info ? CodeInfoResponse.fromSDK(object.code_info) : undefined,
      wasm: object?.wasm
    };
  },

  toSDK(message: QueryCodeResponse): QueryCodeResponseSDKType {
    const obj: any = {};
    message.codeInfo !== undefined && (obj.code_info = message.codeInfo ? CodeInfoResponse.toSDK(message.codeInfo) : undefined);
    obj.wasm = message.wasm;
    return obj;
  },

  fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse {
    return {
      codeInfo: object?.code_info ? CodeInfoResponse.fromAmino(object.code_info) : undefined,
      wasm: object.wasm
    };
  },

  toAmino(message: QueryCodeResponse): QueryCodeResponseAmino {
    const obj: any = {};
    obj.code_info = message.codeInfo ? CodeInfoResponse.toAmino(message.codeInfo) : undefined;
    obj.wasm = message.wasm;
    return obj;
  },

  fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse {
    return QueryCodeResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse {
    return QueryCodeResponse.decode(message.value);
  },

  toProto(message: QueryCodeResponse): Uint8Array {
    return QueryCodeResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  }

};

function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: []
  };
}

export const QueryCodesResponse = {
  typeUrl: "/secret.compute.v1beta1.QueryCodesResponse",

  encode(message: QueryCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.codeInfos) ? object.codeInfos.map((e: any) => CodeInfoResponse.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryCodesResponse): unknown {
    const obj: any = {};

    if (message.codeInfos) {
      obj.codeInfos = message.codeInfos.map(e => e ? CodeInfoResponse.toJSON(e) : undefined);
    } else {
      obj.codeInfos = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoResponse.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryCodesResponseSDKType): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.code_infos) ? object.code_infos.map((e: any) => CodeInfoResponse.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryCodesResponse): QueryCodesResponseSDKType {
    const obj: any = {};

    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map(e => e ? CodeInfoResponse.toSDK(e) : undefined);
    } else {
      obj.code_infos = [];
    }

    return obj;
  },

  fromAmino(object: QueryCodesResponseAmino): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.code_infos) ? object.code_infos.map((e: any) => CodeInfoResponse.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryCodesResponse): QueryCodesResponseAmino {
    const obj: any = {};

    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map(e => e ? CodeInfoResponse.toAmino(e) : undefined);
    } else {
      obj.code_infos = [];
    }

    return obj;
  },

  fromAminoMsg(object: QueryCodesResponseAminoMsg): QueryCodesResponse {
    return QueryCodesResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryCodesResponseProtoMsg): QueryCodesResponse {
    return QueryCodesResponse.decode(message.value);
  },

  toProto(message: QueryCodesResponse): Uint8Array {
    return QueryCodesResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryCodesResponse): QueryCodesResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryCodesResponse",
      value: QueryCodesResponse.encode(message).finish()
    };
  }

};

function createBaseQueryContractAddressResponse(): QueryContractAddressResponse {
  return {
    contractAddress: ""
  };
}

export const QueryContractAddressResponse = {
  typeUrl: "/secret.compute.v1beta1.QueryContractAddressResponse",

  encode(message: QueryContractAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractAddressResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: QueryContractAddressResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractAddressResponse>): QueryContractAddressResponse {
    const message = createBaseQueryContractAddressResponse();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },

  fromSDK(object: QueryContractAddressResponseSDKType): QueryContractAddressResponse {
    return {
      contractAddress: object?.contract_address
    };
  },

  toSDK(message: QueryContractAddressResponse): QueryContractAddressResponseSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },

  fromAmino(object: QueryContractAddressResponseAmino): QueryContractAddressResponse {
    return {
      contractAddress: object.contract_address
    };
  },

  toAmino(message: QueryContractAddressResponse): QueryContractAddressResponseAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },

  fromAminoMsg(object: QueryContractAddressResponseAminoMsg): QueryContractAddressResponse {
    return QueryContractAddressResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryContractAddressResponseProtoMsg): QueryContractAddressResponse {
    return QueryContractAddressResponse.decode(message.value);
  },

  toProto(message: QueryContractAddressResponse): Uint8Array {
    return QueryContractAddressResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryContractAddressResponse): QueryContractAddressResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryContractAddressResponse",
      value: QueryContractAddressResponse.encode(message).finish()
    };
  }

};

function createBaseQueryContractLabelResponse(): QueryContractLabelResponse {
  return {
    label: ""
  };
}

export const QueryContractLabelResponse = {
  typeUrl: "/secret.compute.v1beta1.QueryContractLabelResponse",

  encode(message: QueryContractLabelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractLabelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractLabelResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.label = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractLabelResponse {
    return {
      label: isSet(object.label) ? String(object.label) : ""
    };
  },

  toJSON(message: QueryContractLabelResponse): unknown {
    const obj: any = {};
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractLabelResponse>): QueryContractLabelResponse {
    const message = createBaseQueryContractLabelResponse();
    message.label = object.label ?? "";
    return message;
  },

  fromSDK(object: QueryContractLabelResponseSDKType): QueryContractLabelResponse {
    return {
      label: object?.label
    };
  },

  toSDK(message: QueryContractLabelResponse): QueryContractLabelResponseSDKType {
    const obj: any = {};
    obj.label = message.label;
    return obj;
  },

  fromAmino(object: QueryContractLabelResponseAmino): QueryContractLabelResponse {
    return {
      label: object.label
    };
  },

  toAmino(message: QueryContractLabelResponse): QueryContractLabelResponseAmino {
    const obj: any = {};
    obj.label = message.label;
    return obj;
  },

  fromAminoMsg(object: QueryContractLabelResponseAminoMsg): QueryContractLabelResponse {
    return QueryContractLabelResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryContractLabelResponseProtoMsg): QueryContractLabelResponse {
    return QueryContractLabelResponse.decode(message.value);
  },

  toProto(message: QueryContractLabelResponse): Uint8Array {
    return QueryContractLabelResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryContractLabelResponse): QueryContractLabelResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryContractLabelResponse",
      value: QueryContractLabelResponse.encode(message).finish()
    };
  }

};

function createBaseQueryCodeHashResponse(): QueryCodeHashResponse {
  return {
    codeHash: ""
  };
}

export const QueryCodeHashResponse = {
  typeUrl: "/secret.compute.v1beta1.QueryCodeHashResponse",

  encode(message: QueryCodeHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeHash !== "") {
      writer.uint32(10).string(message.codeHash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeHashResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodeHashResponse {
    return {
      codeHash: isSet(object.codeHash) ? String(object.codeHash) : ""
    };
  },

  toJSON(message: QueryCodeHashResponse): unknown {
    const obj: any = {};
    message.codeHash !== undefined && (obj.codeHash = message.codeHash);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeHashResponse>): QueryCodeHashResponse {
    const message = createBaseQueryCodeHashResponse();
    message.codeHash = object.codeHash ?? "";
    return message;
  },

  fromSDK(object: QueryCodeHashResponseSDKType): QueryCodeHashResponse {
    return {
      codeHash: object?.code_hash
    };
  },

  toSDK(message: QueryCodeHashResponse): QueryCodeHashResponseSDKType {
    const obj: any = {};
    obj.code_hash = message.codeHash;
    return obj;
  },

  fromAmino(object: QueryCodeHashResponseAmino): QueryCodeHashResponse {
    return {
      codeHash: object.code_hash
    };
  },

  toAmino(message: QueryCodeHashResponse): QueryCodeHashResponseAmino {
    const obj: any = {};
    obj.code_hash = message.codeHash;
    return obj;
  },

  fromAminoMsg(object: QueryCodeHashResponseAminoMsg): QueryCodeHashResponse {
    return QueryCodeHashResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: QueryCodeHashResponseProtoMsg): QueryCodeHashResponse {
    return QueryCodeHashResponse.decode(message.value);
  },

  toProto(message: QueryCodeHashResponse): Uint8Array {
    return QueryCodeHashResponse.encode(message).finish();
  },

  toProtoMsg(message: QueryCodeHashResponse): QueryCodeHashResponseProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.QueryCodeHashResponse",
      value: QueryCodeHashResponse.encode(message).finish()
    };
  }

};

function createBaseDecryptedAnswer(): DecryptedAnswer {
  return {
    type: "",
    input: "",
    outputData: "",
    outputDataAsString: ""
  };
}

export const DecryptedAnswer = {
  typeUrl: "/secret.compute.v1beta1.DecryptedAnswer",

  encode(message: DecryptedAnswer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }

    if (message.outputData !== "") {
      writer.uint32(26).string(message.outputData);
    }

    if (message.outputDataAsString !== "") {
      writer.uint32(34).string(message.outputDataAsString);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecryptedAnswer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecryptedAnswer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.input = reader.string();
          break;

        case 3:
          message.outputData = reader.string();
          break;

        case 4:
          message.outputDataAsString = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DecryptedAnswer {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      input: isSet(object.input) ? String(object.input) : "",
      outputData: isSet(object.outputData) ? String(object.outputData) : "",
      outputDataAsString: isSet(object.outputDataAsString) ? String(object.outputDataAsString) : ""
    };
  },

  toJSON(message: DecryptedAnswer): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.input !== undefined && (obj.input = message.input);
    message.outputData !== undefined && (obj.outputData = message.outputData);
    message.outputDataAsString !== undefined && (obj.outputDataAsString = message.outputDataAsString);
    return obj;
  },

  fromPartial(object: DeepPartial<DecryptedAnswer>): DecryptedAnswer {
    const message = createBaseDecryptedAnswer();
    message.type = object.type ?? "";
    message.input = object.input ?? "";
    message.outputData = object.outputData ?? "";
    message.outputDataAsString = object.outputDataAsString ?? "";
    return message;
  },

  fromSDK(object: DecryptedAnswerSDKType): DecryptedAnswer {
    return {
      type: object?.type,
      input: object?.input,
      outputData: object?.output_data,
      outputDataAsString: object?.output_data_as_string
    };
  },

  toSDK(message: DecryptedAnswer): DecryptedAnswerSDKType {
    const obj: any = {};
    obj.type = message.type;
    obj.input = message.input;
    obj.output_data = message.outputData;
    obj.output_data_as_string = message.outputDataAsString;
    return obj;
  },

  fromAmino(object: DecryptedAnswerAmino): DecryptedAnswer {
    return {
      type: object.type,
      input: object.input,
      outputData: object.output_data,
      outputDataAsString: object.output_data_as_string
    };
  },

  toAmino(message: DecryptedAnswer): DecryptedAnswerAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.input = message.input;
    obj.output_data = message.outputData;
    obj.output_data_as_string = message.outputDataAsString;
    return obj;
  },

  fromAminoMsg(object: DecryptedAnswerAminoMsg): DecryptedAnswer {
    return DecryptedAnswer.fromAmino(object.value);
  },

  fromProtoMsg(message: DecryptedAnswerProtoMsg): DecryptedAnswer {
    return DecryptedAnswer.decode(message.value);
  },

  toProto(message: DecryptedAnswer): Uint8Array {
    return DecryptedAnswer.encode(message).finish();
  },

  toProtoMsg(message: DecryptedAnswer): DecryptedAnswerProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.DecryptedAnswer",
      value: DecryptedAnswer.encode(message).finish()
    };
  }

};

function createBaseDecryptedAnswers(): DecryptedAnswers {
  return {
    answers: [],
    outputLogs: [],
    outputError: "",
    plaintextError: ""
  };
}

export const DecryptedAnswers = {
  typeUrl: "/secret.compute.v1beta1.DecryptedAnswers",

  encode(message: DecryptedAnswers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.answers) {
      DecryptedAnswer.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.outputLogs) {
      StringEvent.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.outputError !== "") {
      writer.uint32(26).string(message.outputError);
    }

    if (message.plaintextError !== "") {
      writer.uint32(34).string(message.plaintextError);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecryptedAnswers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecryptedAnswers();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.answers.push(DecryptedAnswer.decode(reader, reader.uint32()));
          break;

        case 2:
          message.outputLogs.push(StringEvent.decode(reader, reader.uint32()));
          break;

        case 3:
          message.outputError = reader.string();
          break;

        case 4:
          message.plaintextError = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DecryptedAnswers {
    return {
      answers: Array.isArray(object?.answers) ? object.answers.map((e: any) => DecryptedAnswer.fromJSON(e)) : [],
      outputLogs: Array.isArray(object?.outputLogs) ? object.outputLogs.map((e: any) => StringEvent.fromJSON(e)) : [],
      outputError: isSet(object.outputError) ? String(object.outputError) : "",
      plaintextError: isSet(object.plaintextError) ? String(object.plaintextError) : ""
    };
  },

  toJSON(message: DecryptedAnswers): unknown {
    const obj: any = {};

    if (message.answers) {
      obj.answers = message.answers.map(e => e ? DecryptedAnswer.toJSON(e) : undefined);
    } else {
      obj.answers = [];
    }

    if (message.outputLogs) {
      obj.outputLogs = message.outputLogs.map(e => e ? StringEvent.toJSON(e) : undefined);
    } else {
      obj.outputLogs = [];
    }

    message.outputError !== undefined && (obj.outputError = message.outputError);
    message.plaintextError !== undefined && (obj.plaintextError = message.plaintextError);
    return obj;
  },

  fromPartial(object: DeepPartial<DecryptedAnswers>): DecryptedAnswers {
    const message = createBaseDecryptedAnswers();
    message.answers = object.answers?.map(e => DecryptedAnswer.fromPartial(e)) || [];
    message.outputLogs = object.outputLogs?.map(e => StringEvent.fromPartial(e)) || [];
    message.outputError = object.outputError ?? "";
    message.plaintextError = object.plaintextError ?? "";
    return message;
  },

  fromSDK(object: DecryptedAnswersSDKType): DecryptedAnswers {
    return {
      answers: Array.isArray(object?.answers) ? object.answers.map((e: any) => DecryptedAnswer.fromSDK(e)) : [],
      outputLogs: Array.isArray(object?.output_logs) ? object.output_logs.map((e: any) => StringEvent.fromSDK(e)) : [],
      outputError: object?.output_error,
      plaintextError: object?.plaintext_error
    };
  },

  toSDK(message: DecryptedAnswers): DecryptedAnswersSDKType {
    const obj: any = {};

    if (message.answers) {
      obj.answers = message.answers.map(e => e ? DecryptedAnswer.toSDK(e) : undefined);
    } else {
      obj.answers = [];
    }

    if (message.outputLogs) {
      obj.output_logs = message.outputLogs.map(e => e ? StringEvent.toSDK(e) : undefined);
    } else {
      obj.output_logs = [];
    }

    obj.output_error = message.outputError;
    obj.plaintext_error = message.plaintextError;
    return obj;
  },

  fromAmino(object: DecryptedAnswersAmino): DecryptedAnswers {
    return {
      answers: Array.isArray(object?.answers) ? object.answers.map((e: any) => DecryptedAnswer.fromAmino(e)) : [],
      outputLogs: Array.isArray(object?.output_logs) ? object.output_logs.map((e: any) => StringEvent.fromAmino(e)) : [],
      outputError: object.output_error,
      plaintextError: object.plaintext_error
    };
  },

  toAmino(message: DecryptedAnswers): DecryptedAnswersAmino {
    const obj: any = {};

    if (message.answers) {
      obj.answers = message.answers.map(e => e ? DecryptedAnswer.toAmino(e) : undefined);
    } else {
      obj.answers = [];
    }

    if (message.outputLogs) {
      obj.output_logs = message.outputLogs.map(e => e ? StringEvent.toAmino(e) : undefined);
    } else {
      obj.output_logs = [];
    }

    obj.output_error = message.outputError;
    obj.plaintext_error = message.plaintextError;
    return obj;
  },

  fromAminoMsg(object: DecryptedAnswersAminoMsg): DecryptedAnswers {
    return DecryptedAnswers.fromAmino(object.value);
  },

  fromProtoMsg(message: DecryptedAnswersProtoMsg): DecryptedAnswers {
    return DecryptedAnswers.decode(message.value);
  },

  toProto(message: DecryptedAnswers): Uint8Array {
    return DecryptedAnswers.encode(message).finish();
  },

  toProtoMsg(message: DecryptedAnswers): DecryptedAnswersProtoMsg {
    return {
      typeUrl: "/secret.compute.v1beta1.DecryptedAnswers",
      value: DecryptedAnswers.encode(message).finish()
    };
  }

};
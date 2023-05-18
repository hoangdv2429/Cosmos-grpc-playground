import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "secret.registration.remote_attestation.v1beta1";
export interface QuoteReport {
  id: string;
  timestamp: string;
  version: Long;
  isvEnclaveQuoteStatus: string;
  platformInfoBlob: string;
  isvEnclaveQuoteBody: string;
  advisoryIds: string[];
}
export interface QuoteReportProtoMsg {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReport";
  value: Uint8Array;
}
export interface QuoteReportAmino {
  id: string;
  timestamp: string;
  version: string;
  isv_enclave_quote_status: string;
  platform_info_blob: string;
  isv_enclave_quote_body: string;
  advisory_ids: string[];
}
export interface QuoteReportAminoMsg {
  type: "/secret.registration.remote_attestation.v1beta1.QuoteReport";
  value: QuoteReportAmino;
}
export interface QuoteReportSDKType {
  id: string;
  timestamp: string;
  version: Long;
  isv_enclave_quote_status: string;
  platform_info_blob: string;
  isv_enclave_quote_body: string;
  advisory_ids: string[];
}
export interface QuoteReportBody {
  mrEnclave: string;
  mrSigner: string;
  reportData: string;
}
export interface QuoteReportBodyProtoMsg {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportBody";
  value: Uint8Array;
}
export interface QuoteReportBodyAmino {
  mr_enclave: string;
  mr_signer: string;
  report_data: string;
}
export interface QuoteReportBodyAminoMsg {
  type: "/secret.registration.remote_attestation.v1beta1.QuoteReportBody";
  value: QuoteReportBodyAmino;
}
export interface QuoteReportBodySDKType {
  mr_enclave: string;
  mr_signer: string;
  report_data: string;
}
export interface QuoteReportData {
  version: Long;
  signType: Long;
  reportBody?: QuoteReportBody;
}
export interface QuoteReportDataProtoMsg {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportData";
  value: Uint8Array;
}
export interface QuoteReportDataAmino {
  version: string;
  sign_type: string;
  report_body?: QuoteReportBodyAmino;
}
export interface QuoteReportDataAminoMsg {
  type: "/secret.registration.remote_attestation.v1beta1.QuoteReportData";
  value: QuoteReportDataAmino;
}
export interface QuoteReportDataSDKType {
  version: Long;
  sign_type: Long;
  report_body?: QuoteReportBodySDKType;
}
export interface EndorsedAttestationReport {
  report: Uint8Array;
  signature: Uint8Array;
  signingCert: Uint8Array;
}
export interface EndorsedAttestationReportProtoMsg {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.EndorsedAttestationReport";
  value: Uint8Array;
}
export interface EndorsedAttestationReportAmino {
  report: Uint8Array;
  signature: Uint8Array;
  signing_cert: Uint8Array;
}
export interface EndorsedAttestationReportAminoMsg {
  type: "/secret.registration.remote_attestation.v1beta1.EndorsedAttestationReport";
  value: EndorsedAttestationReportAmino;
}
export interface EndorsedAttestationReportSDKType {
  report: Uint8Array;
  signature: Uint8Array;
  signing_cert: Uint8Array;
}
export interface SGXEC256Signature {
  gx: string;
  gy: string;
}
export interface SGXEC256SignatureProtoMsg {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.SGXEC256Signature";
  value: Uint8Array;
}
export interface SGXEC256SignatureAmino {
  gx: string;
  gy: string;
}
export interface SGXEC256SignatureAminoMsg {
  type: "/secret.registration.remote_attestation.v1beta1.SGXEC256Signature";
  value: SGXEC256SignatureAmino;
}
export interface SGXEC256SignatureSDKType {
  gx: string;
  gy: string;
}
export interface PlatformInfoBlob {
  sgxEpidGroupFlags: number;
  sgxTcbEvaluationFlags: number;
  pseEvaluationFlags: number;
  latestEquivalentTcbPsvn: string;
  latestPseIsvsvn: string;
  latestPsdaSvn: string;
  xeid: number;
  gid: number;
  sgxEc256SignatureT?: SGXEC256Signature;
}
export interface PlatformInfoBlobProtoMsg {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.PlatformInfoBlob";
  value: Uint8Array;
}
export interface PlatformInfoBlobAmino {
  sgx_epid_group_flags: number;
  sgx_tcb_evaluation_flags: number;
  pse_evaluation_flags: number;
  latest_equivalent_tcb_psvn: string;
  latest_pse_isvsvn: string;
  latest_psda_svn: string;
  xeid: number;
  gid: number;
  sgx_ec256_signature_t?: SGXEC256SignatureAmino;
}
export interface PlatformInfoBlobAminoMsg {
  type: "/secret.registration.remote_attestation.v1beta1.PlatformInfoBlob";
  value: PlatformInfoBlobAmino;
}
export interface PlatformInfoBlobSDKType {
  sgx_epid_group_flags: number;
  sgx_tcb_evaluation_flags: number;
  pse_evaluation_flags: number;
  latest_equivalent_tcb_psvn: string;
  latest_pse_isvsvn: string;
  latest_psda_svn: string;
  xeid: number;
  gid: number;
  sgx_ec256_signature_t?: SGXEC256SignatureSDKType;
}

function createBaseQuoteReport(): QuoteReport {
  return {
    id: "",
    timestamp: "",
    version: Long.UZERO,
    isvEnclaveQuoteStatus: "",
    platformInfoBlob: "",
    isvEnclaveQuoteBody: "",
    advisoryIds: []
  };
}

export const QuoteReport = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReport",

  encode(message: QuoteReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }

    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }

    if (message.isvEnclaveQuoteStatus !== "") {
      writer.uint32(34).string(message.isvEnclaveQuoteStatus);
    }

    if (message.platformInfoBlob !== "") {
      writer.uint32(42).string(message.platformInfoBlob);
    }

    if (message.isvEnclaveQuoteBody !== "") {
      writer.uint32(50).string(message.isvEnclaveQuoteBody);
    }

    for (const v of message.advisoryIds) {
      writer.uint32(58).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteReport();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.timestamp = reader.string();
          break;

        case 3:
          message.version = (reader.uint64() as Long);
          break;

        case 4:
          message.isvEnclaveQuoteStatus = reader.string();
          break;

        case 5:
          message.platformInfoBlob = reader.string();
          break;

        case 6:
          message.isvEnclaveQuoteBody = reader.string();
          break;

        case 7:
          message.advisoryIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuoteReport {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      isvEnclaveQuoteStatus: isSet(object.isvEnclaveQuoteStatus) ? String(object.isvEnclaveQuoteStatus) : "",
      platformInfoBlob: isSet(object.platformInfoBlob) ? String(object.platformInfoBlob) : "",
      isvEnclaveQuoteBody: isSet(object.isvEnclaveQuoteBody) ? String(object.isvEnclaveQuoteBody) : "",
      advisoryIds: Array.isArray(object?.advisoryIds) ? object.advisoryIds.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QuoteReport): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.isvEnclaveQuoteStatus !== undefined && (obj.isvEnclaveQuoteStatus = message.isvEnclaveQuoteStatus);
    message.platformInfoBlob !== undefined && (obj.platformInfoBlob = message.platformInfoBlob);
    message.isvEnclaveQuoteBody !== undefined && (obj.isvEnclaveQuoteBody = message.isvEnclaveQuoteBody);

    if (message.advisoryIds) {
      obj.advisoryIds = message.advisoryIds.map(e => e);
    } else {
      obj.advisoryIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QuoteReport>): QuoteReport {
    const message = createBaseQuoteReport();
    message.id = object.id ?? "";
    message.timestamp = object.timestamp ?? "";
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.isvEnclaveQuoteStatus = object.isvEnclaveQuoteStatus ?? "";
    message.platformInfoBlob = object.platformInfoBlob ?? "";
    message.isvEnclaveQuoteBody = object.isvEnclaveQuoteBody ?? "";
    message.advisoryIds = object.advisoryIds?.map(e => e) || [];
    return message;
  },

  fromSDK(object: QuoteReportSDKType): QuoteReport {
    return {
      id: object?.id,
      timestamp: object?.timestamp,
      version: object?.version,
      isvEnclaveQuoteStatus: object?.isv_enclave_quote_status,
      platformInfoBlob: object?.platform_info_blob,
      isvEnclaveQuoteBody: object?.isv_enclave_quote_body,
      advisoryIds: Array.isArray(object?.advisory_ids) ? object.advisory_ids.map((e: any) => e) : []
    };
  },

  toSDK(message: QuoteReport): QuoteReportSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.timestamp = message.timestamp;
    obj.version = message.version;
    obj.isv_enclave_quote_status = message.isvEnclaveQuoteStatus;
    obj.platform_info_blob = message.platformInfoBlob;
    obj.isv_enclave_quote_body = message.isvEnclaveQuoteBody;

    if (message.advisoryIds) {
      obj.advisory_ids = message.advisoryIds.map(e => e);
    } else {
      obj.advisory_ids = [];
    }

    return obj;
  },

  fromAmino(object: QuoteReportAmino): QuoteReport {
    return {
      id: object.id,
      timestamp: object.timestamp,
      version: Long.fromString(object.version),
      isvEnclaveQuoteStatus: object.isv_enclave_quote_status,
      platformInfoBlob: object.platform_info_blob,
      isvEnclaveQuoteBody: object.isv_enclave_quote_body,
      advisoryIds: Array.isArray(object?.advisory_ids) ? object.advisory_ids.map((e: any) => e) : []
    };
  },

  toAmino(message: QuoteReport): QuoteReportAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.timestamp = message.timestamp;
    obj.version = message.version ? message.version.toString() : undefined;
    obj.isv_enclave_quote_status = message.isvEnclaveQuoteStatus;
    obj.platform_info_blob = message.platformInfoBlob;
    obj.isv_enclave_quote_body = message.isvEnclaveQuoteBody;

    if (message.advisoryIds) {
      obj.advisory_ids = message.advisoryIds.map(e => e);
    } else {
      obj.advisory_ids = [];
    }

    return obj;
  },

  fromAminoMsg(object: QuoteReportAminoMsg): QuoteReport {
    return QuoteReport.fromAmino(object.value);
  },

  fromProtoMsg(message: QuoteReportProtoMsg): QuoteReport {
    return QuoteReport.decode(message.value);
  },

  toProto(message: QuoteReport): Uint8Array {
    return QuoteReport.encode(message).finish();
  },

  toProtoMsg(message: QuoteReport): QuoteReportProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReport",
      value: QuoteReport.encode(message).finish()
    };
  }

};

function createBaseQuoteReportBody(): QuoteReportBody {
  return {
    mrEnclave: "",
    mrSigner: "",
    reportData: ""
  };
}

export const QuoteReportBody = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportBody",

  encode(message: QuoteReportBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mrEnclave !== "") {
      writer.uint32(10).string(message.mrEnclave);
    }

    if (message.mrSigner !== "") {
      writer.uint32(18).string(message.mrSigner);
    }

    if (message.reportData !== "") {
      writer.uint32(26).string(message.reportData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReportBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteReportBody();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mrEnclave = reader.string();
          break;

        case 2:
          message.mrSigner = reader.string();
          break;

        case 3:
          message.reportData = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuoteReportBody {
    return {
      mrEnclave: isSet(object.mrEnclave) ? String(object.mrEnclave) : "",
      mrSigner: isSet(object.mrSigner) ? String(object.mrSigner) : "",
      reportData: isSet(object.reportData) ? String(object.reportData) : ""
    };
  },

  toJSON(message: QuoteReportBody): unknown {
    const obj: any = {};
    message.mrEnclave !== undefined && (obj.mrEnclave = message.mrEnclave);
    message.mrSigner !== undefined && (obj.mrSigner = message.mrSigner);
    message.reportData !== undefined && (obj.reportData = message.reportData);
    return obj;
  },

  fromPartial(object: DeepPartial<QuoteReportBody>): QuoteReportBody {
    const message = createBaseQuoteReportBody();
    message.mrEnclave = object.mrEnclave ?? "";
    message.mrSigner = object.mrSigner ?? "";
    message.reportData = object.reportData ?? "";
    return message;
  },

  fromSDK(object: QuoteReportBodySDKType): QuoteReportBody {
    return {
      mrEnclave: object?.mr_enclave,
      mrSigner: object?.mr_signer,
      reportData: object?.report_data
    };
  },

  toSDK(message: QuoteReportBody): QuoteReportBodySDKType {
    const obj: any = {};
    obj.mr_enclave = message.mrEnclave;
    obj.mr_signer = message.mrSigner;
    obj.report_data = message.reportData;
    return obj;
  },

  fromAmino(object: QuoteReportBodyAmino): QuoteReportBody {
    return {
      mrEnclave: object.mr_enclave,
      mrSigner: object.mr_signer,
      reportData: object.report_data
    };
  },

  toAmino(message: QuoteReportBody): QuoteReportBodyAmino {
    const obj: any = {};
    obj.mr_enclave = message.mrEnclave;
    obj.mr_signer = message.mrSigner;
    obj.report_data = message.reportData;
    return obj;
  },

  fromAminoMsg(object: QuoteReportBodyAminoMsg): QuoteReportBody {
    return QuoteReportBody.fromAmino(object.value);
  },

  fromProtoMsg(message: QuoteReportBodyProtoMsg): QuoteReportBody {
    return QuoteReportBody.decode(message.value);
  },

  toProto(message: QuoteReportBody): Uint8Array {
    return QuoteReportBody.encode(message).finish();
  },

  toProtoMsg(message: QuoteReportBody): QuoteReportBodyProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportBody",
      value: QuoteReportBody.encode(message).finish()
    };
  }

};

function createBaseQuoteReportData(): QuoteReportData {
  return {
    version: Long.UZERO,
    signType: Long.UZERO,
    reportBody: undefined
  };
}

export const QuoteReportData = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportData",

  encode(message: QuoteReportData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).uint64(message.version);
    }

    if (!message.signType.isZero()) {
      writer.uint32(16).uint64(message.signType);
    }

    if (message.reportBody !== undefined) {
      QuoteReportBody.encode(message.reportBody, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuoteReportData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuoteReportData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = (reader.uint64() as Long);
          break;

        case 2:
          message.signType = (reader.uint64() as Long);
          break;

        case 3:
          message.reportBody = QuoteReportBody.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuoteReportData {
    return {
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
      signType: isSet(object.signType) ? Long.fromValue(object.signType) : Long.UZERO,
      reportBody: isSet(object.reportBody) ? QuoteReportBody.fromJSON(object.reportBody) : undefined
    };
  },

  toJSON(message: QuoteReportData): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.signType !== undefined && (obj.signType = (message.signType || Long.UZERO).toString());
    message.reportBody !== undefined && (obj.reportBody = message.reportBody ? QuoteReportBody.toJSON(message.reportBody) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuoteReportData>): QuoteReportData {
    const message = createBaseQuoteReportData();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    message.signType = object.signType !== undefined && object.signType !== null ? Long.fromValue(object.signType) : Long.UZERO;
    message.reportBody = object.reportBody !== undefined && object.reportBody !== null ? QuoteReportBody.fromPartial(object.reportBody) : undefined;
    return message;
  },

  fromSDK(object: QuoteReportDataSDKType): QuoteReportData {
    return {
      version: object?.version,
      signType: object?.sign_type,
      reportBody: object.report_body ? QuoteReportBody.fromSDK(object.report_body) : undefined
    };
  },

  toSDK(message: QuoteReportData): QuoteReportDataSDKType {
    const obj: any = {};
    obj.version = message.version;
    obj.sign_type = message.signType;
    message.reportBody !== undefined && (obj.report_body = message.reportBody ? QuoteReportBody.toSDK(message.reportBody) : undefined);
    return obj;
  },

  fromAmino(object: QuoteReportDataAmino): QuoteReportData {
    return {
      version: Long.fromString(object.version),
      signType: Long.fromString(object.sign_type),
      reportBody: object?.report_body ? QuoteReportBody.fromAmino(object.report_body) : undefined
    };
  },

  toAmino(message: QuoteReportData): QuoteReportDataAmino {
    const obj: any = {};
    obj.version = message.version ? message.version.toString() : undefined;
    obj.sign_type = message.signType ? message.signType.toString() : undefined;
    obj.report_body = message.reportBody ? QuoteReportBody.toAmino(message.reportBody) : undefined;
    return obj;
  },

  fromAminoMsg(object: QuoteReportDataAminoMsg): QuoteReportData {
    return QuoteReportData.fromAmino(object.value);
  },

  fromProtoMsg(message: QuoteReportDataProtoMsg): QuoteReportData {
    return QuoteReportData.decode(message.value);
  },

  toProto(message: QuoteReportData): Uint8Array {
    return QuoteReportData.encode(message).finish();
  },

  toProtoMsg(message: QuoteReportData): QuoteReportDataProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.QuoteReportData",
      value: QuoteReportData.encode(message).finish()
    };
  }

};

function createBaseEndorsedAttestationReport(): EndorsedAttestationReport {
  return {
    report: new Uint8Array(),
    signature: new Uint8Array(),
    signingCert: new Uint8Array()
  };
}

export const EndorsedAttestationReport = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.EndorsedAttestationReport",

  encode(message: EndorsedAttestationReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.report.length !== 0) {
      writer.uint32(10).bytes(message.report);
    }

    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }

    if (message.signingCert.length !== 0) {
      writer.uint32(26).bytes(message.signingCert);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EndorsedAttestationReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndorsedAttestationReport();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.report = reader.bytes();
          break;

        case 2:
          message.signature = reader.bytes();
          break;

        case 3:
          message.signingCert = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EndorsedAttestationReport {
    return {
      report: isSet(object.report) ? bytesFromBase64(object.report) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      signingCert: isSet(object.signingCert) ? bytesFromBase64(object.signingCert) : new Uint8Array()
    };
  },

  toJSON(message: EndorsedAttestationReport): unknown {
    const obj: any = {};
    message.report !== undefined && (obj.report = base64FromBytes(message.report !== undefined ? message.report : new Uint8Array()));
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.signingCert !== undefined && (obj.signingCert = base64FromBytes(message.signingCert !== undefined ? message.signingCert : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<EndorsedAttestationReport>): EndorsedAttestationReport {
    const message = createBaseEndorsedAttestationReport();
    message.report = object.report ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    message.signingCert = object.signingCert ?? new Uint8Array();
    return message;
  },

  fromSDK(object: EndorsedAttestationReportSDKType): EndorsedAttestationReport {
    return {
      report: object?.report,
      signature: object?.signature,
      signingCert: object?.signing_cert
    };
  },

  toSDK(message: EndorsedAttestationReport): EndorsedAttestationReportSDKType {
    const obj: any = {};
    obj.report = message.report;
    obj.signature = message.signature;
    obj.signing_cert = message.signingCert;
    return obj;
  },

  fromAmino(object: EndorsedAttestationReportAmino): EndorsedAttestationReport {
    return {
      report: object.report,
      signature: object.signature,
      signingCert: object.signing_cert
    };
  },

  toAmino(message: EndorsedAttestationReport): EndorsedAttestationReportAmino {
    const obj: any = {};
    obj.report = message.report;
    obj.signature = message.signature;
    obj.signing_cert = message.signingCert;
    return obj;
  },

  fromAminoMsg(object: EndorsedAttestationReportAminoMsg): EndorsedAttestationReport {
    return EndorsedAttestationReport.fromAmino(object.value);
  },

  fromProtoMsg(message: EndorsedAttestationReportProtoMsg): EndorsedAttestationReport {
    return EndorsedAttestationReport.decode(message.value);
  },

  toProto(message: EndorsedAttestationReport): Uint8Array {
    return EndorsedAttestationReport.encode(message).finish();
  },

  toProtoMsg(message: EndorsedAttestationReport): EndorsedAttestationReportProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.EndorsedAttestationReport",
      value: EndorsedAttestationReport.encode(message).finish()
    };
  }

};

function createBaseSGXEC256Signature(): SGXEC256Signature {
  return {
    gx: "",
    gy: ""
  };
}

export const SGXEC256Signature = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.SGXEC256Signature",

  encode(message: SGXEC256Signature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gx !== "") {
      writer.uint32(10).string(message.gx);
    }

    if (message.gy !== "") {
      writer.uint32(18).string(message.gy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SGXEC256Signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSGXEC256Signature();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gx = reader.string();
          break;

        case 2:
          message.gy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SGXEC256Signature {
    return {
      gx: isSet(object.gx) ? String(object.gx) : "",
      gy: isSet(object.gy) ? String(object.gy) : ""
    };
  },

  toJSON(message: SGXEC256Signature): unknown {
    const obj: any = {};
    message.gx !== undefined && (obj.gx = message.gx);
    message.gy !== undefined && (obj.gy = message.gy);
    return obj;
  },

  fromPartial(object: DeepPartial<SGXEC256Signature>): SGXEC256Signature {
    const message = createBaseSGXEC256Signature();
    message.gx = object.gx ?? "";
    message.gy = object.gy ?? "";
    return message;
  },

  fromSDK(object: SGXEC256SignatureSDKType): SGXEC256Signature {
    return {
      gx: object?.gx,
      gy: object?.gy
    };
  },

  toSDK(message: SGXEC256Signature): SGXEC256SignatureSDKType {
    const obj: any = {};
    obj.gx = message.gx;
    obj.gy = message.gy;
    return obj;
  },

  fromAmino(object: SGXEC256SignatureAmino): SGXEC256Signature {
    return {
      gx: object.gx,
      gy: object.gy
    };
  },

  toAmino(message: SGXEC256Signature): SGXEC256SignatureAmino {
    const obj: any = {};
    obj.gx = message.gx;
    obj.gy = message.gy;
    return obj;
  },

  fromAminoMsg(object: SGXEC256SignatureAminoMsg): SGXEC256Signature {
    return SGXEC256Signature.fromAmino(object.value);
  },

  fromProtoMsg(message: SGXEC256SignatureProtoMsg): SGXEC256Signature {
    return SGXEC256Signature.decode(message.value);
  },

  toProto(message: SGXEC256Signature): Uint8Array {
    return SGXEC256Signature.encode(message).finish();
  },

  toProtoMsg(message: SGXEC256Signature): SGXEC256SignatureProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.SGXEC256Signature",
      value: SGXEC256Signature.encode(message).finish()
    };
  }

};

function createBasePlatformInfoBlob(): PlatformInfoBlob {
  return {
    sgxEpidGroupFlags: 0,
    sgxTcbEvaluationFlags: 0,
    pseEvaluationFlags: 0,
    latestEquivalentTcbPsvn: "",
    latestPseIsvsvn: "",
    latestPsdaSvn: "",
    xeid: 0,
    gid: 0,
    sgxEc256SignatureT: undefined
  };
}

export const PlatformInfoBlob = {
  typeUrl: "/secret.registration.remote_attestation.v1beta1.PlatformInfoBlob",

  encode(message: PlatformInfoBlob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sgxEpidGroupFlags !== 0) {
      writer.uint32(8).uint32(message.sgxEpidGroupFlags);
    }

    if (message.sgxTcbEvaluationFlags !== 0) {
      writer.uint32(16).uint32(message.sgxTcbEvaluationFlags);
    }

    if (message.pseEvaluationFlags !== 0) {
      writer.uint32(24).uint32(message.pseEvaluationFlags);
    }

    if (message.latestEquivalentTcbPsvn !== "") {
      writer.uint32(34).string(message.latestEquivalentTcbPsvn);
    }

    if (message.latestPseIsvsvn !== "") {
      writer.uint32(42).string(message.latestPseIsvsvn);
    }

    if (message.latestPsdaSvn !== "") {
      writer.uint32(50).string(message.latestPsdaSvn);
    }

    if (message.xeid !== 0) {
      writer.uint32(56).uint32(message.xeid);
    }

    if (message.gid !== 0) {
      writer.uint32(64).uint32(message.gid);
    }

    if (message.sgxEc256SignatureT !== undefined) {
      SGXEC256Signature.encode(message.sgxEc256SignatureT, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlatformInfoBlob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlatformInfoBlob();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sgxEpidGroupFlags = reader.uint32();
          break;

        case 2:
          message.sgxTcbEvaluationFlags = reader.uint32();
          break;

        case 3:
          message.pseEvaluationFlags = reader.uint32();
          break;

        case 4:
          message.latestEquivalentTcbPsvn = reader.string();
          break;

        case 5:
          message.latestPseIsvsvn = reader.string();
          break;

        case 6:
          message.latestPsdaSvn = reader.string();
          break;

        case 7:
          message.xeid = reader.uint32();
          break;

        case 8:
          message.gid = reader.uint32();
          break;

        case 9:
          message.sgxEc256SignatureT = SGXEC256Signature.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PlatformInfoBlob {
    return {
      sgxEpidGroupFlags: isSet(object.sgxEpidGroupFlags) ? Number(object.sgxEpidGroupFlags) : 0,
      sgxTcbEvaluationFlags: isSet(object.sgxTcbEvaluationFlags) ? Number(object.sgxTcbEvaluationFlags) : 0,
      pseEvaluationFlags: isSet(object.pseEvaluationFlags) ? Number(object.pseEvaluationFlags) : 0,
      latestEquivalentTcbPsvn: isSet(object.latestEquivalentTcbPsvn) ? String(object.latestEquivalentTcbPsvn) : "",
      latestPseIsvsvn: isSet(object.latestPseIsvsvn) ? String(object.latestPseIsvsvn) : "",
      latestPsdaSvn: isSet(object.latestPsdaSvn) ? String(object.latestPsdaSvn) : "",
      xeid: isSet(object.xeid) ? Number(object.xeid) : 0,
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      sgxEc256SignatureT: isSet(object.sgxEc256SignatureT) ? SGXEC256Signature.fromJSON(object.sgxEc256SignatureT) : undefined
    };
  },

  toJSON(message: PlatformInfoBlob): unknown {
    const obj: any = {};
    message.sgxEpidGroupFlags !== undefined && (obj.sgxEpidGroupFlags = Math.round(message.sgxEpidGroupFlags));
    message.sgxTcbEvaluationFlags !== undefined && (obj.sgxTcbEvaluationFlags = Math.round(message.sgxTcbEvaluationFlags));
    message.pseEvaluationFlags !== undefined && (obj.pseEvaluationFlags = Math.round(message.pseEvaluationFlags));
    message.latestEquivalentTcbPsvn !== undefined && (obj.latestEquivalentTcbPsvn = message.latestEquivalentTcbPsvn);
    message.latestPseIsvsvn !== undefined && (obj.latestPseIsvsvn = message.latestPseIsvsvn);
    message.latestPsdaSvn !== undefined && (obj.latestPsdaSvn = message.latestPsdaSvn);
    message.xeid !== undefined && (obj.xeid = Math.round(message.xeid));
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.sgxEc256SignatureT !== undefined && (obj.sgxEc256SignatureT = message.sgxEc256SignatureT ? SGXEC256Signature.toJSON(message.sgxEc256SignatureT) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PlatformInfoBlob>): PlatformInfoBlob {
    const message = createBasePlatformInfoBlob();
    message.sgxEpidGroupFlags = object.sgxEpidGroupFlags ?? 0;
    message.sgxTcbEvaluationFlags = object.sgxTcbEvaluationFlags ?? 0;
    message.pseEvaluationFlags = object.pseEvaluationFlags ?? 0;
    message.latestEquivalentTcbPsvn = object.latestEquivalentTcbPsvn ?? "";
    message.latestPseIsvsvn = object.latestPseIsvsvn ?? "";
    message.latestPsdaSvn = object.latestPsdaSvn ?? "";
    message.xeid = object.xeid ?? 0;
    message.gid = object.gid ?? 0;
    message.sgxEc256SignatureT = object.sgxEc256SignatureT !== undefined && object.sgxEc256SignatureT !== null ? SGXEC256Signature.fromPartial(object.sgxEc256SignatureT) : undefined;
    return message;
  },

  fromSDK(object: PlatformInfoBlobSDKType): PlatformInfoBlob {
    return {
      sgxEpidGroupFlags: object?.sgx_epid_group_flags,
      sgxTcbEvaluationFlags: object?.sgx_tcb_evaluation_flags,
      pseEvaluationFlags: object?.pse_evaluation_flags,
      latestEquivalentTcbPsvn: object?.latest_equivalent_tcb_psvn,
      latestPseIsvsvn: object?.latest_pse_isvsvn,
      latestPsdaSvn: object?.latest_psda_svn,
      xeid: object?.xeid,
      gid: object?.gid,
      sgxEc256SignatureT: object.sgx_ec256_signature_t ? SGXEC256Signature.fromSDK(object.sgx_ec256_signature_t) : undefined
    };
  },

  toSDK(message: PlatformInfoBlob): PlatformInfoBlobSDKType {
    const obj: any = {};
    obj.sgx_epid_group_flags = message.sgxEpidGroupFlags;
    obj.sgx_tcb_evaluation_flags = message.sgxTcbEvaluationFlags;
    obj.pse_evaluation_flags = message.pseEvaluationFlags;
    obj.latest_equivalent_tcb_psvn = message.latestEquivalentTcbPsvn;
    obj.latest_pse_isvsvn = message.latestPseIsvsvn;
    obj.latest_psda_svn = message.latestPsdaSvn;
    obj.xeid = message.xeid;
    obj.gid = message.gid;
    message.sgxEc256SignatureT !== undefined && (obj.sgx_ec256_signature_t = message.sgxEc256SignatureT ? SGXEC256Signature.toSDK(message.sgxEc256SignatureT) : undefined);
    return obj;
  },

  fromAmino(object: PlatformInfoBlobAmino): PlatformInfoBlob {
    return {
      sgxEpidGroupFlags: object.sgx_epid_group_flags,
      sgxTcbEvaluationFlags: object.sgx_tcb_evaluation_flags,
      pseEvaluationFlags: object.pse_evaluation_flags,
      latestEquivalentTcbPsvn: object.latest_equivalent_tcb_psvn,
      latestPseIsvsvn: object.latest_pse_isvsvn,
      latestPsdaSvn: object.latest_psda_svn,
      xeid: object.xeid,
      gid: object.gid,
      sgxEc256SignatureT: object?.sgx_ec256_signature_t ? SGXEC256Signature.fromAmino(object.sgx_ec256_signature_t) : undefined
    };
  },

  toAmino(message: PlatformInfoBlob): PlatformInfoBlobAmino {
    const obj: any = {};
    obj.sgx_epid_group_flags = message.sgxEpidGroupFlags;
    obj.sgx_tcb_evaluation_flags = message.sgxTcbEvaluationFlags;
    obj.pse_evaluation_flags = message.pseEvaluationFlags;
    obj.latest_equivalent_tcb_psvn = message.latestEquivalentTcbPsvn;
    obj.latest_pse_isvsvn = message.latestPseIsvsvn;
    obj.latest_psda_svn = message.latestPsdaSvn;
    obj.xeid = message.xeid;
    obj.gid = message.gid;
    obj.sgx_ec256_signature_t = message.sgxEc256SignatureT ? SGXEC256Signature.toAmino(message.sgxEc256SignatureT) : undefined;
    return obj;
  },

  fromAminoMsg(object: PlatformInfoBlobAminoMsg): PlatformInfoBlob {
    return PlatformInfoBlob.fromAmino(object.value);
  },

  fromProtoMsg(message: PlatformInfoBlobProtoMsg): PlatformInfoBlob {
    return PlatformInfoBlob.decode(message.value);
  },

  toProto(message: PlatformInfoBlob): Uint8Array {
    return PlatformInfoBlob.encode(message).finish();
  },

  toProtoMsg(message: PlatformInfoBlob): PlatformInfoBlobProtoMsg {
    return {
      typeUrl: "/secret.registration.remote_attestation.v1beta1.PlatformInfoBlob",
      value: PlatformInfoBlob.encode(message).finish()
    };
  }

};
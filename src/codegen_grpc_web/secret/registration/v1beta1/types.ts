import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "secret.registration.v1beta1";
export interface SeedConfig {
  masterKey: string;
  encryptedKey: string;
  version: number;
}
export interface SeedConfigProtoMsg {
  typeUrl: "/secret.registration.v1beta1.SeedConfig";
  value: Uint8Array;
}
export interface SeedConfigAmino {
  master_key: string;
  encrypted_key: string;
  version: number;
}
export interface SeedConfigAminoMsg {
  type: "/secret.registration.v1beta1.SeedConfig";
  value: SeedConfigAmino;
}
export interface SeedConfigSDKType {
  master_key: string;
  encrypted_key: string;
  version: number;
}
export interface LegacySeedConfig {
  masterCert: string;
  encryptedKey: string;
}
export interface LegacySeedConfigProtoMsg {
  typeUrl: "/secret.registration.v1beta1.LegacySeedConfig";
  value: Uint8Array;
}
export interface LegacySeedConfigAmino {
  master_cert: string;
  encrypted_key: string;
}
export interface LegacySeedConfigAminoMsg {
  type: "/secret.registration.v1beta1.LegacySeedConfig";
  value: LegacySeedConfigAmino;
}
export interface LegacySeedConfigSDKType {
  master_cert: string;
  encrypted_key: string;
}
export interface RegistrationNodeInfo {
  certificate: Uint8Array;
  encryptedSeed: Uint8Array;
}
export interface RegistrationNodeInfoProtoMsg {
  typeUrl: "/secret.registration.v1beta1.RegistrationNodeInfo";
  value: Uint8Array;
}
export interface RegistrationNodeInfoAmino {
  certificate: Uint8Array;
  encrypted_seed: Uint8Array;
}
export interface RegistrationNodeInfoAminoMsg {
  type: "/secret.registration.v1beta1.RegistrationNodeInfo";
  value: RegistrationNodeInfoAmino;
}
export interface RegistrationNodeInfoSDKType {
  certificate: Uint8Array;
  encrypted_seed: Uint8Array;
}

function createBaseSeedConfig(): SeedConfig {
  return {
    masterKey: "",
    encryptedKey: "",
    version: 0
  };
}

export const SeedConfig = {
  typeUrl: "/secret.registration.v1beta1.SeedConfig",

  encode(message: SeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.masterKey !== "") {
      writer.uint32(10).string(message.masterKey);
    }

    if (message.encryptedKey !== "") {
      writer.uint32(18).string(message.encryptedKey);
    }

    if (message.version !== 0) {
      writer.uint32(24).uint32(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SeedConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeedConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.masterKey = reader.string();
          break;

        case 2:
          message.encryptedKey = reader.string();
          break;

        case 3:
          message.version = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SeedConfig {
    return {
      masterKey: isSet(object.masterKey) ? String(object.masterKey) : "",
      encryptedKey: isSet(object.encryptedKey) ? String(object.encryptedKey) : "",
      version: isSet(object.version) ? Number(object.version) : 0
    };
  },

  toJSON(message: SeedConfig): unknown {
    const obj: any = {};
    message.masterKey !== undefined && (obj.masterKey = message.masterKey);
    message.encryptedKey !== undefined && (obj.encryptedKey = message.encryptedKey);
    message.version !== undefined && (obj.version = Math.round(message.version));
    return obj;
  },

  fromPartial(object: DeepPartial<SeedConfig>): SeedConfig {
    const message = createBaseSeedConfig();
    message.masterKey = object.masterKey ?? "";
    message.encryptedKey = object.encryptedKey ?? "";
    message.version = object.version ?? 0;
    return message;
  },

  fromSDK(object: SeedConfigSDKType): SeedConfig {
    return {
      masterKey: object?.master_key,
      encryptedKey: object?.encrypted_key,
      version: object?.version
    };
  },

  toSDK(message: SeedConfig): SeedConfigSDKType {
    const obj: any = {};
    obj.master_key = message.masterKey;
    obj.encrypted_key = message.encryptedKey;
    obj.version = message.version;
    return obj;
  },

  fromAmino(object: SeedConfigAmino): SeedConfig {
    return {
      masterKey: object.master_key,
      encryptedKey: object.encrypted_key,
      version: object.version
    };
  },

  toAmino(message: SeedConfig): SeedConfigAmino {
    const obj: any = {};
    obj.master_key = message.masterKey;
    obj.encrypted_key = message.encryptedKey;
    obj.version = message.version;
    return obj;
  },

  fromAminoMsg(object: SeedConfigAminoMsg): SeedConfig {
    return SeedConfig.fromAmino(object.value);
  },

  fromProtoMsg(message: SeedConfigProtoMsg): SeedConfig {
    return SeedConfig.decode(message.value);
  },

  toProto(message: SeedConfig): Uint8Array {
    return SeedConfig.encode(message).finish();
  },

  toProtoMsg(message: SeedConfig): SeedConfigProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.SeedConfig",
      value: SeedConfig.encode(message).finish()
    };
  }

};

function createBaseLegacySeedConfig(): LegacySeedConfig {
  return {
    masterCert: "",
    encryptedKey: ""
  };
}

export const LegacySeedConfig = {
  typeUrl: "/secret.registration.v1beta1.LegacySeedConfig",

  encode(message: LegacySeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.masterCert !== "") {
      writer.uint32(10).string(message.masterCert);
    }

    if (message.encryptedKey !== "") {
      writer.uint32(18).string(message.encryptedKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacySeedConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacySeedConfig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.masterCert = reader.string();
          break;

        case 2:
          message.encryptedKey = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LegacySeedConfig {
    return {
      masterCert: isSet(object.masterCert) ? String(object.masterCert) : "",
      encryptedKey: isSet(object.encryptedKey) ? String(object.encryptedKey) : ""
    };
  },

  toJSON(message: LegacySeedConfig): unknown {
    const obj: any = {};
    message.masterCert !== undefined && (obj.masterCert = message.masterCert);
    message.encryptedKey !== undefined && (obj.encryptedKey = message.encryptedKey);
    return obj;
  },

  fromPartial(object: DeepPartial<LegacySeedConfig>): LegacySeedConfig {
    const message = createBaseLegacySeedConfig();
    message.masterCert = object.masterCert ?? "";
    message.encryptedKey = object.encryptedKey ?? "";
    return message;
  },

  fromSDK(object: LegacySeedConfigSDKType): LegacySeedConfig {
    return {
      masterCert: object?.master_cert,
      encryptedKey: object?.encrypted_key
    };
  },

  toSDK(message: LegacySeedConfig): LegacySeedConfigSDKType {
    const obj: any = {};
    obj.master_cert = message.masterCert;
    obj.encrypted_key = message.encryptedKey;
    return obj;
  },

  fromAmino(object: LegacySeedConfigAmino): LegacySeedConfig {
    return {
      masterCert: object.master_cert,
      encryptedKey: object.encrypted_key
    };
  },

  toAmino(message: LegacySeedConfig): LegacySeedConfigAmino {
    const obj: any = {};
    obj.master_cert = message.masterCert;
    obj.encrypted_key = message.encryptedKey;
    return obj;
  },

  fromAminoMsg(object: LegacySeedConfigAminoMsg): LegacySeedConfig {
    return LegacySeedConfig.fromAmino(object.value);
  },

  fromProtoMsg(message: LegacySeedConfigProtoMsg): LegacySeedConfig {
    return LegacySeedConfig.decode(message.value);
  },

  toProto(message: LegacySeedConfig): Uint8Array {
    return LegacySeedConfig.encode(message).finish();
  },

  toProtoMsg(message: LegacySeedConfig): LegacySeedConfigProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.LegacySeedConfig",
      value: LegacySeedConfig.encode(message).finish()
    };
  }

};

function createBaseRegistrationNodeInfo(): RegistrationNodeInfo {
  return {
    certificate: new Uint8Array(),
    encryptedSeed: new Uint8Array()
  };
}

export const RegistrationNodeInfo = {
  typeUrl: "/secret.registration.v1beta1.RegistrationNodeInfo",

  encode(message: RegistrationNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificate.length !== 0) {
      writer.uint32(10).bytes(message.certificate);
    }

    if (message.encryptedSeed.length !== 0) {
      writer.uint32(18).bytes(message.encryptedSeed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationNodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationNodeInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.certificate = reader.bytes();
          break;

        case 2:
          message.encryptedSeed = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegistrationNodeInfo {
    return {
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array(),
      encryptedSeed: isSet(object.encryptedSeed) ? bytesFromBase64(object.encryptedSeed) : new Uint8Array()
    };
  },

  toJSON(message: RegistrationNodeInfo): unknown {
    const obj: any = {};
    message.certificate !== undefined && (obj.certificate = base64FromBytes(message.certificate !== undefined ? message.certificate : new Uint8Array()));
    message.encryptedSeed !== undefined && (obj.encryptedSeed = base64FromBytes(message.encryptedSeed !== undefined ? message.encryptedSeed : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<RegistrationNodeInfo>): RegistrationNodeInfo {
    const message = createBaseRegistrationNodeInfo();
    message.certificate = object.certificate ?? new Uint8Array();
    message.encryptedSeed = object.encryptedSeed ?? new Uint8Array();
    return message;
  },

  fromSDK(object: RegistrationNodeInfoSDKType): RegistrationNodeInfo {
    return {
      certificate: object?.certificate,
      encryptedSeed: object?.encrypted_seed
    };
  },

  toSDK(message: RegistrationNodeInfo): RegistrationNodeInfoSDKType {
    const obj: any = {};
    obj.certificate = message.certificate;
    obj.encrypted_seed = message.encryptedSeed;
    return obj;
  },

  fromAmino(object: RegistrationNodeInfoAmino): RegistrationNodeInfo {
    return {
      certificate: object.certificate,
      encryptedSeed: object.encrypted_seed
    };
  },

  toAmino(message: RegistrationNodeInfo): RegistrationNodeInfoAmino {
    const obj: any = {};
    obj.certificate = message.certificate;
    obj.encrypted_seed = message.encryptedSeed;
    return obj;
  },

  fromAminoMsg(object: RegistrationNodeInfoAminoMsg): RegistrationNodeInfo {
    return RegistrationNodeInfo.fromAmino(object.value);
  },

  fromProtoMsg(message: RegistrationNodeInfoProtoMsg): RegistrationNodeInfo {
    return RegistrationNodeInfo.decode(message.value);
  },

  toProto(message: RegistrationNodeInfo): Uint8Array {
    return RegistrationNodeInfo.encode(message).finish();
  },

  toProtoMsg(message: RegistrationNodeInfo): RegistrationNodeInfoProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.RegistrationNodeInfo",
      value: RegistrationNodeInfo.encode(message).finish()
    };
  }

};
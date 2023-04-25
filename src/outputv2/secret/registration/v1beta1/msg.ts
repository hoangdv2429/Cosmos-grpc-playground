import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export const protobufPackage = "secret.registration.v1beta1";
export interface RaAuthenticate {
  sender: Uint8Array;
  certificate: Uint8Array;
}
export interface RaAuthenticateProtoMsg {
  typeUrl: "/secret.registration.v1beta1.RaAuthenticate";
  value: Uint8Array;
}
export interface RaAuthenticateAmino {
  sender: Uint8Array;
  certificate: Uint8Array;
}
export interface RaAuthenticateAminoMsg {
  type: "/secret.registration.v1beta1.RaAuthenticate";
  value: RaAuthenticateAmino;
}
export interface RaAuthenticateSDKType {
  sender: Uint8Array;
  certificate: Uint8Array;
}
export interface MasterKey {
  bytes: Uint8Array;
}
export interface MasterKeyProtoMsg {
  typeUrl: "/secret.registration.v1beta1.MasterKey";
  value: Uint8Array;
}
export interface MasterKeyAmino {
  bytes: Uint8Array;
}
export interface MasterKeyAminoMsg {
  type: "/secret.registration.v1beta1.MasterKey";
  value: MasterKeyAmino;
}
export interface MasterKeySDKType {
  bytes: Uint8Array;
}
export interface Key {
  key: Uint8Array;
}
export interface KeyProtoMsg {
  typeUrl: "/secret.registration.v1beta1.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  key: Uint8Array;
}
export interface KeyAminoMsg {
  type: "/secret.registration.v1beta1.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  key: Uint8Array;
}

function createBaseRaAuthenticate(): RaAuthenticate {
  return {
    sender: new Uint8Array(),
    certificate: new Uint8Array()
  };
}

export const RaAuthenticate = {
  typeUrl: "/secret.registration.v1beta1.RaAuthenticate",

  encode(message: RaAuthenticate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.certificate.length !== 0) {
      writer.uint32(18).bytes(message.certificate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaAuthenticate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaAuthenticate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.certificate = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RaAuthenticate {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array()
    };
  },

  toJSON(message: RaAuthenticate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.certificate !== undefined && (obj.certificate = base64FromBytes(message.certificate !== undefined ? message.certificate : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<RaAuthenticate>): RaAuthenticate {
    const message = createBaseRaAuthenticate();
    message.sender = object.sender ?? new Uint8Array();
    message.certificate = object.certificate ?? new Uint8Array();
    return message;
  },

  fromSDK(object: RaAuthenticateSDKType): RaAuthenticate {
    return {
      sender: object?.sender,
      certificate: object?.certificate
    };
  },

  toSDK(message: RaAuthenticate): RaAuthenticateSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.certificate = message.certificate;
    return obj;
  },

  fromAmino(object: RaAuthenticateAmino): RaAuthenticate {
    return {
      sender: object.sender,
      certificate: object.certificate
    };
  },

  toAmino(message: RaAuthenticate): RaAuthenticateAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.certificate = message.certificate;
    return obj;
  },

  fromAminoMsg(object: RaAuthenticateAminoMsg): RaAuthenticate {
    return RaAuthenticate.fromAmino(object.value);
  },

  fromProtoMsg(message: RaAuthenticateProtoMsg): RaAuthenticate {
    return RaAuthenticate.decode(message.value);
  },

  toProto(message: RaAuthenticate): Uint8Array {
    return RaAuthenticate.encode(message).finish();
  },

  toProtoMsg(message: RaAuthenticate): RaAuthenticateProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.RaAuthenticate",
      value: RaAuthenticate.encode(message).finish()
    };
  }

};

function createBaseMasterKey(): MasterKey {
  return {
    bytes: new Uint8Array()
  };
}

export const MasterKey = {
  typeUrl: "/secret.registration.v1beta1.MasterKey",

  encode(message: MasterKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bytes.length !== 0) {
      writer.uint32(10).bytes(message.bytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MasterKey {
    return {
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array()
    };
  },

  toJSON(message: MasterKey): unknown {
    const obj: any = {};
    message.bytes !== undefined && (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MasterKey>): MasterKey {
    const message = createBaseMasterKey();
    message.bytes = object.bytes ?? new Uint8Array();
    return message;
  },

  fromSDK(object: MasterKeySDKType): MasterKey {
    return {
      bytes: object?.bytes
    };
  },

  toSDK(message: MasterKey): MasterKeySDKType {
    const obj: any = {};
    obj.bytes = message.bytes;
    return obj;
  },

  fromAmino(object: MasterKeyAmino): MasterKey {
    return {
      bytes: object.bytes
    };
  },

  toAmino(message: MasterKey): MasterKeyAmino {
    const obj: any = {};
    obj.bytes = message.bytes;
    return obj;
  },

  fromAminoMsg(object: MasterKeyAminoMsg): MasterKey {
    return MasterKey.fromAmino(object.value);
  },

  fromProtoMsg(message: MasterKeyProtoMsg): MasterKey {
    return MasterKey.decode(message.value);
  },

  toProto(message: MasterKey): Uint8Array {
    return MasterKey.encode(message).finish();
  },

  toProtoMsg(message: MasterKey): MasterKeyProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.MasterKey",
      value: MasterKey.encode(message).finish()
    };
  }

};

function createBaseKey(): Key {
  return {
    key: new Uint8Array()
  };
}

export const Key = {
  typeUrl: "/secret.registration.v1beta1.Key",

  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Key {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<Key>): Key {
    const message = createBaseKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },

  fromSDK(object: KeySDKType): Key {
    return {
      key: object?.key
    };
  },

  toSDK(message: Key): KeySDKType {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },

  fromAmino(object: KeyAmino): Key {
    return {
      key: object.key
    };
  },

  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.key = message.key;
    return obj;
  },

  fromAminoMsg(object: KeyAminoMsg): Key {
    return Key.fromAmino(object.value);
  },

  fromProtoMsg(message: KeyProtoMsg): Key {
    return Key.decode(message.value);
  },

  toProto(message: Key): Uint8Array {
    return Key.encode(message).finish();
  },

  toProtoMsg(message: Key): KeyProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.Key",
      value: Key.encode(message).finish()
    };
  }

};
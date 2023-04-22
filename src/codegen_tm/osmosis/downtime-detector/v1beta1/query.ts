import { Downtime, DowntimeSDKType, downtimeFromJSON, downtimeToJSON } from "./downtime_duration";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */

export interface RecoveredSinceDowntimeOfLengthRequest {
  downtime: Downtime;
  recovery?: Duration;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */

export interface RecoveredSinceDowntimeOfLengthRequestSDKType {
  downtime: DowntimeSDKType;
  recovery?: DurationSDKType;
}
export interface RecoveredSinceDowntimeOfLengthResponse {
  succesfullyRecovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseSDKType {
  succesfully_recovered: boolean;
}

function createBaseRecoveredSinceDowntimeOfLengthRequest(): RecoveredSinceDowntimeOfLengthRequest {
  return {
    downtime: 0,
    recovery: undefined
  };
}

export const RecoveredSinceDowntimeOfLengthRequest = {
  encode(message: RecoveredSinceDowntimeOfLengthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.downtime !== 0) {
      writer.uint32(8).int32(message.downtime);
    }

    if (message.recovery !== undefined) {
      Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.downtime = (reader.int32() as any);
          break;

        case 2:
          message.recovery = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RecoveredSinceDowntimeOfLengthRequest {
    return {
      downtime: isSet(object.downtime) ? downtimeFromJSON(object.downtime) : 0,
      recovery: isSet(object.recovery) ? Duration.fromJSON(object.recovery) : undefined
    };
  },

  toJSON(message: RecoveredSinceDowntimeOfLengthRequest): unknown {
    const obj: any = {};
    message.downtime !== undefined && (obj.downtime = downtimeToJSON(message.downtime));
    message.recovery !== undefined && (obj.recovery = message.recovery ? Duration.toJSON(message.recovery) : undefined);
    return obj;
  },

  fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthRequest>): RecoveredSinceDowntimeOfLengthRequest {
    const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
    message.downtime = object.downtime ?? 0;
    message.recovery = object.recovery !== undefined && object.recovery !== null ? Duration.fromPartial(object.recovery) : undefined;
    return message;
  }

};

function createBaseRecoveredSinceDowntimeOfLengthResponse(): RecoveredSinceDowntimeOfLengthResponse {
  return {
    succesfullyRecovered: false
  };
}

export const RecoveredSinceDowntimeOfLengthResponse = {
  encode(message: RecoveredSinceDowntimeOfLengthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.succesfullyRecovered === true) {
      writer.uint32(8).bool(message.succesfullyRecovered);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.succesfullyRecovered = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RecoveredSinceDowntimeOfLengthResponse {
    return {
      succesfullyRecovered: isSet(object.succesfullyRecovered) ? Boolean(object.succesfullyRecovered) : false
    };
  },

  toJSON(message: RecoveredSinceDowntimeOfLengthResponse): unknown {
    const obj: any = {};
    message.succesfullyRecovered !== undefined && (obj.succesfullyRecovered = message.succesfullyRecovered);
    return obj;
  },

  fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthResponse>): RecoveredSinceDowntimeOfLengthResponse {
    const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
    message.succesfullyRecovered = object.succesfullyRecovered ?? false;
    return message;
  }

};
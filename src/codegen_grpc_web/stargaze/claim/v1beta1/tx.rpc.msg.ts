import { Action, ActionSDKType } from "./claim_record";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgInitialClaim, MsgInitialClaimSDKType, MsgInitialClaimResponse, MsgInitialClaimResponseSDKType, MsgClaimFor, MsgClaimForSDKType, MsgClaimForResponse, MsgClaimForResponseSDKType } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  initialClaim(request: DeepPartial<MsgInitialClaim>, metadata?: grpc.Metadata): Promise<MsgInitialClaimResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  claimFor(request: DeepPartial<MsgClaimFor>, metadata?: grpc.Metadata): Promise<MsgClaimForResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.initialClaim = this.initialClaim.bind(this);
    this.claimFor = this.claimFor.bind(this);
  }
  initialClaim(request: DeepPartial<MsgInitialClaim>, metadata?: grpc.Metadata): Promise<MsgInitialClaimResponse> {
    return this.rpc.unary(MsgInitialClaimDesc, MsgInitialClaim.fromPartial(request), metadata);
  }
  claimFor(request: DeepPartial<MsgClaimFor>, metadata?: grpc.Metadata): Promise<MsgClaimForResponse> {
    return this.rpc.unary(MsgClaimForDesc, MsgClaimFor.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "publicawesome.stargaze.claim.v1beta1.Msg"
};
export const MsgInitialClaimDesc: UnaryMethodDefinitionish = {
  methodName: "InitialClaim",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgInitialClaim.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgInitialClaimResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgClaimForDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimFor",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgClaimFor.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimForResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}
import { TokenPairArbRoutes, TokenPairArbRoutesSDKType } from "./protorev";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSetHotRoutes, MsgSetHotRoutesSDKType, MsgSetHotRoutesResponse, MsgSetHotRoutesResponseSDKType, MsgSetDeveloperAccount, MsgSetDeveloperAccountSDKType, MsgSetDeveloperAccountResponse, MsgSetDeveloperAccountResponseSDKType } from "./tx";
export interface Msg {
  /**
   * SetHotRoutes sets the hot routes that will be explored when creating
   * cyclic arbitrage routes. Can only be called by the admin account.
   */
  setHotRoutes(request: DeepPartial<MsgSetHotRoutes>, metadata?: grpc.Metadata): Promise<MsgSetHotRoutesResponse>;
  /**
   * SetDeveloperAccount sets the account that can withdraw a portion of the
   * profits from the protorev module. This will be Skip's address.
   */
  setDeveloperAccount(request: DeepPartial<MsgSetDeveloperAccount>, metadata?: grpc.Metadata): Promise<MsgSetDeveloperAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setHotRoutes = this.setHotRoutes.bind(this);
    this.setDeveloperAccount = this.setDeveloperAccount.bind(this);
  }
  setHotRoutes(request: DeepPartial<MsgSetHotRoutes>, metadata?: grpc.Metadata): Promise<MsgSetHotRoutesResponse> {
    return this.rpc.unary(MsgSetHotRoutesDesc, MsgSetHotRoutes.fromPartial(request), metadata);
  }
  setDeveloperAccount(request: DeepPartial<MsgSetDeveloperAccount>, metadata?: grpc.Metadata): Promise<MsgSetDeveloperAccountResponse> {
    return this.rpc.unary(MsgSetDeveloperAccountDesc, MsgSetDeveloperAccount.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "osmosis.protorev.v1beta1.Msg"
};
export const MsgSetHotRoutesDesc: UnaryMethodDefinitionish = {
  methodName: "SetHotRoutes",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSetHotRoutes.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetHotRoutesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSetDeveloperAccountDesc: UnaryMethodDefinitionish = {
  methodName: "SetDeveloperAccount",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSetDeveloperAccount.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetDeveloperAccountResponse.decode(data),
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
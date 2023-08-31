import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesRequestSDKType, UserValidatorPreferencesResponse, UserValidatorPreferencesResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns the list of ValidatorPreferences for the user. */
  userValidatorPreferences(request: DeepPartial<UserValidatorPreferencesRequest>, metadata?: grpc.Metadata): Promise<UserValidatorPreferencesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.userValidatorPreferences = this.userValidatorPreferences.bind(this);
  }
  userValidatorPreferences(request: DeepPartial<UserValidatorPreferencesRequest>, metadata?: grpc.Metadata): Promise<UserValidatorPreferencesResponse> {
    return this.rpc.unary(QueryUserValidatorPreferencesDesc, UserValidatorPreferencesRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.valsetpref.v1beta1.Query"
};
export const QueryUserValidatorPreferencesDesc: UnaryMethodDefinitionish = {
  methodName: "UserValidatorPreferences",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return UserValidatorPreferencesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...UserValidatorPreferencesResponse.decode(data),
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
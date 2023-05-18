import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { Empty } from "../../../google/protobuf/empty";
import { Key } from "./msg";
import { QueryEncryptedSeedRequest, QueryEncryptedSeedResponse } from "./query";
/** Query provides defines the gRPC querier service */

export interface Query {
  /** Returns the key used for transactions */
  txKey(request?: DeepPartial<google.protobuf.Empty>, metadata?: grpc.Metadata): Promise<Key>;
  /** Returns the key used for registration */

  registrationKey(request?: DeepPartial<google.protobuf.Empty>, metadata?: grpc.Metadata): Promise<Key>;
  /** Returns the encrypted seed for a registered node by public key */

  encryptedSeed(request: DeepPartial<QueryEncryptedSeedRequest>, metadata?: grpc.Metadata): Promise<QueryEncryptedSeedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.txKey = this.txKey.bind(this);
    this.registrationKey = this.registrationKey.bind(this);
    this.encryptedSeed = this.encryptedSeed.bind(this);
  }

  txKey(request: DeepPartial<google.protobuf.Empty> = {}, metadata?: grpc.Metadata): Promise<Key> {
    return this.rpc.unary(google.protobuf.Empty, google.protobuf.Empty.fromPartial(request), metadata);
  }

  registrationKey(request: DeepPartial<google.protobuf.Empty> = {}, metadata?: grpc.Metadata): Promise<Key> {
    return this.rpc.unary(google.protobuf.Empty, google.protobuf.Empty.fromPartial(request), metadata);
  }

  encryptedSeed(request: DeepPartial<QueryEncryptedSeedRequest>, metadata?: grpc.Metadata): Promise<QueryEncryptedSeedResponse> {
    return this.rpc.unary(QueryEncryptedSeedDesc, QueryEncryptedSeedRequest.fromPartial(request), metadata);
  }

}
export const QueryDesc = {
  serviceName: "secret.registration.v1beta1.Query"
};
export const QueryTxKeyDesc: UnaryMethodDefinitionish = {
  methodName: "TxKey",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return google.protobuf.Empty.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...Key.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryRegistrationKeyDesc: UnaryMethodDefinitionish = {
  methodName: "RegistrationKey",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return google.protobuf.Empty.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...Key.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryEncryptedSeedDesc: UnaryMethodDefinitionish = {
  methodName: "EncryptedSeed",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryEncryptedSeedRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryEncryptedSeedResponse.decode(data),

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
    const request = { ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({ ...this.options?.metadata.headersMap,
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
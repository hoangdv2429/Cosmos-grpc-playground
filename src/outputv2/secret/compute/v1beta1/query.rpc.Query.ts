import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryByContractAddressRequest, QueryContractInfoResponse, QueryByCodeIdRequest, QueryContractsByCodeIdResponse, QuerySecretContractRequest, QuerySecretContractResponse, QueryCodeResponse, QueryCodesResponse, QueryCodeHashResponse, QueryContractLabelResponse, QueryByLabelRequest, QueryContractAddressResponse } from "./query";
import { Empty } from "../../../google/protobuf/empty";
/** Query defines the gRPC querier service */

export interface Query {
  /** Query contract info by address */
  contractInfo(request: DeepPartial<QueryByContractAddressRequest>, metadata?: grpc.Metadata): Promise<QueryContractInfoResponse>;
  /** Query code info by id */

  contractsByCodeId(request: DeepPartial<QueryByCodeIdRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCodeIdResponse>;
  /** Query secret contract */

  querySecretContract(request: DeepPartial<QuerySecretContractRequest>, metadata?: grpc.Metadata): Promise<QuerySecretContractResponse>;
  /** Query a specific contract code by id */

  code(request: DeepPartial<QueryByCodeIdRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse>;
  /** Query all contract codes on-chain */

  codes(request?: DeepPartial<google.protobuf.Empty>, metadata?: grpc.Metadata): Promise<QueryCodesResponse>;
  /** Query code hash by contract address */

  codeHashByContractAddress(request: DeepPartial<QueryByContractAddressRequest>, metadata?: grpc.Metadata): Promise<QueryCodeHashResponse>;
  /** Query code hash by code id */

  codeHashByCodeId(request: DeepPartial<QueryByCodeIdRequest>, metadata?: grpc.Metadata): Promise<QueryCodeHashResponse>;
  /** Query contract label by address */

  labelByAddress(request: DeepPartial<QueryByContractAddressRequest>, metadata?: grpc.Metadata): Promise<QueryContractLabelResponse>;
  /** Query contract address by label */

  addressByLabel(request: DeepPartial<QueryByLabelRequest>, metadata?: grpc.Metadata): Promise<QueryContractAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractsByCodeId = this.contractsByCodeId.bind(this);
    this.querySecretContract = this.querySecretContract.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.codeHashByContractAddress = this.codeHashByContractAddress.bind(this);
    this.codeHashByCodeId = this.codeHashByCodeId.bind(this);
    this.labelByAddress = this.labelByAddress.bind(this);
    this.addressByLabel = this.addressByLabel.bind(this);
  }

  contractInfo(request: DeepPartial<QueryByContractAddressRequest>, metadata?: grpc.Metadata): Promise<QueryContractInfoResponse> {
    return this.rpc.unary(QueryByContractAddressDesc, QueryByContractAddressRequest.fromPartial(request), metadata);
  }

  contractsByCodeId(request: DeepPartial<QueryByCodeIdRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCodeIdResponse> {
    return this.rpc.unary(QueryByCodeIdDesc, QueryByCodeIdRequest.fromPartial(request), metadata);
  }

  querySecretContract(request: DeepPartial<QuerySecretContractRequest>, metadata?: grpc.Metadata): Promise<QuerySecretContractResponse> {
    return this.rpc.unary(QuerySecretContractDesc, QuerySecretContractRequest.fromPartial(request), metadata);
  }

  code(request: DeepPartial<QueryByCodeIdRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse> {
    return this.rpc.unary(QueryByCodeIdDesc, QueryByCodeIdRequest.fromPartial(request), metadata);
  }

  codes(request: DeepPartial<google.protobuf.Empty> = {}, metadata?: grpc.Metadata): Promise<QueryCodesResponse> {
    return this.rpc.unary(google.protobuf.Empty, google.protobuf.Empty.fromPartial(request), metadata);
  }

  codeHashByContractAddress(request: DeepPartial<QueryByContractAddressRequest>, metadata?: grpc.Metadata): Promise<QueryCodeHashResponse> {
    return this.rpc.unary(QueryByContractAddressDesc, QueryByContractAddressRequest.fromPartial(request), metadata);
  }

  codeHashByCodeId(request: DeepPartial<QueryByCodeIdRequest>, metadata?: grpc.Metadata): Promise<QueryCodeHashResponse> {
    return this.rpc.unary(QueryByCodeIdDesc, QueryByCodeIdRequest.fromPartial(request), metadata);
  }

  labelByAddress(request: DeepPartial<QueryByContractAddressRequest>, metadata?: grpc.Metadata): Promise<QueryContractLabelResponse> {
    return this.rpc.unary(QueryByContractAddressDesc, QueryByContractAddressRequest.fromPartial(request), metadata);
  }

  addressByLabel(request: DeepPartial<QueryByLabelRequest>, metadata?: grpc.Metadata): Promise<QueryContractAddressResponse> {
    return this.rpc.unary(QueryByLabelDesc, QueryByLabelRequest.fromPartial(request), metadata);
  }

}
export const QueryDesc = {
  serviceName: "secret.compute.v1beta1.Query"
};
export const QueryContractInfoDesc: UnaryMethodDefinitionish = {
  methodName: "ContractInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryByContractAddressRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryContractInfoResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryContractsByCodeIdDesc: UnaryMethodDefinitionish = {
  methodName: "ContractsByCodeId",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryByCodeIdRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryContractsByCodeIdResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryQuerySecretContractDesc: UnaryMethodDefinitionish = {
  methodName: "QuerySecretContract",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySecretContractRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QuerySecretContractResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryCodeDesc: UnaryMethodDefinitionish = {
  methodName: "Code",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryByCodeIdRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryCodeResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryCodesDesc: UnaryMethodDefinitionish = {
  methodName: "Codes",
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
      return { ...QueryCodesResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryCodeHashByContractAddressDesc: UnaryMethodDefinitionish = {
  methodName: "CodeHashByContractAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryByContractAddressRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryCodeHashResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryCodeHashByCodeIdDesc: UnaryMethodDefinitionish = {
  methodName: "CodeHashByCodeId",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryByCodeIdRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryCodeHashResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryLabelByAddressDesc: UnaryMethodDefinitionish = {
  methodName: "LabelByAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryByContractAddressRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryContractLabelResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryAddressByLabelDesc: UnaryMethodDefinitionish = {
  methodName: "AddressByLabel",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryByLabelRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryContractAddressResponse.decode(data),

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
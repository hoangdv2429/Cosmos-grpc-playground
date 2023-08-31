import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PoolStatistics, PoolStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType } from "./protorev";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesRequestSDKType, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevNumberOfTradesResponseSDKType, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomRequestSDKType, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevProfitsByDenomResponseSDKType, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsRequestSDKType, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevAllProfitsResponseSDKType, QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolRequestSDKType, QueryGetProtoRevStatisticsByPoolResponse, QueryGetProtoRevStatisticsByPoolResponseSDKType, QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsRequestSDKType, QueryGetProtoRevAllStatisticsResponse, QueryGetProtoRevAllStatisticsResponseSDKType, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesRequestSDKType, QueryGetProtoRevTokenPairArbRoutesResponse, QueryGetProtoRevTokenPairArbRoutesResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /**
   * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   * has executed
   */
  getProtoRevNumberOfTrades(request?: DeepPartial<QueryGetProtoRevNumberOfTradesRequest>, metadata?: grpc.Metadata): Promise<QueryGetProtoRevNumberOfTradesResponse>;
  /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
  getProtoRevProfitsByDenom(request: DeepPartial<QueryGetProtoRevProfitsByDenomRequest>, metadata?: grpc.Metadata): Promise<QueryGetProtoRevProfitsByDenomResponse>;
  /** GetProtoRevAllProfits queries all of the profits from the module */
  getProtoRevAllProfits(request?: DeepPartial<QueryGetProtoRevAllProfitsRequest>, metadata?: grpc.Metadata): Promise<QueryGetProtoRevAllProfitsResponse>;
  /**
   * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
   * that have been executed for a given pool
   */
  getProtoRevStatisticsByPool(request: DeepPartial<QueryGetProtoRevStatisticsByPoolRequest>, metadata?: grpc.Metadata): Promise<QueryGetProtoRevStatisticsByPoolResponse>;
  /**
   * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
   * against and the number of trades and profits that have been executed for
   * each pool
   */
  getProtoRevAllStatistics(request?: DeepPartial<QueryGetProtoRevAllStatisticsRequest>, metadata?: grpc.Metadata): Promise<QueryGetProtoRevAllStatisticsResponse>;
  /**
   * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   * is currently arbitraging
   */
  getProtoRevTokenPairArbRoutes(request?: DeepPartial<QueryGetProtoRevTokenPairArbRoutesRequest>, metadata?: grpc.Metadata): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
    this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
    this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
    this.getProtoRevStatisticsByPool = this.getProtoRevStatisticsByPool.bind(this);
    this.getProtoRevAllStatistics = this.getProtoRevAllStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  getProtoRevNumberOfTrades(request: DeepPartial<QueryGetProtoRevNumberOfTradesRequest> = {}, metadata?: grpc.Metadata): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    return this.rpc.unary(QueryGetProtoRevNumberOfTradesDesc, QueryGetProtoRevNumberOfTradesRequest.fromPartial(request), metadata);
  }
  getProtoRevProfitsByDenom(request: DeepPartial<QueryGetProtoRevProfitsByDenomRequest>, metadata?: grpc.Metadata): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    return this.rpc.unary(QueryGetProtoRevProfitsByDenomDesc, QueryGetProtoRevProfitsByDenomRequest.fromPartial(request), metadata);
  }
  getProtoRevAllProfits(request: DeepPartial<QueryGetProtoRevAllProfitsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryGetProtoRevAllProfitsResponse> {
    return this.rpc.unary(QueryGetProtoRevAllProfitsDesc, QueryGetProtoRevAllProfitsRequest.fromPartial(request), metadata);
  }
  getProtoRevStatisticsByPool(request: DeepPartial<QueryGetProtoRevStatisticsByPoolRequest>, metadata?: grpc.Metadata): Promise<QueryGetProtoRevStatisticsByPoolResponse> {
    return this.rpc.unary(QueryGetProtoRevStatisticsByPoolDesc, QueryGetProtoRevStatisticsByPoolRequest.fromPartial(request), metadata);
  }
  getProtoRevAllStatistics(request: DeepPartial<QueryGetProtoRevAllStatisticsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryGetProtoRevAllStatisticsResponse> {
    return this.rpc.unary(QueryGetProtoRevAllStatisticsDesc, QueryGetProtoRevAllStatisticsRequest.fromPartial(request), metadata);
  }
  getProtoRevTokenPairArbRoutes(request: DeepPartial<QueryGetProtoRevTokenPairArbRoutesRequest> = {}, metadata?: grpc.Metadata): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    return this.rpc.unary(QueryGetProtoRevTokenPairArbRoutesDesc, QueryGetProtoRevTokenPairArbRoutesRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.protorev.v1beta1.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetProtoRevNumberOfTradesDesc: UnaryMethodDefinitionish = {
  methodName: "GetProtoRevNumberOfTrades",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetProtoRevNumberOfTradesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProtoRevNumberOfTradesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetProtoRevProfitsByDenomDesc: UnaryMethodDefinitionish = {
  methodName: "GetProtoRevProfitsByDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetProtoRevProfitsByDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProtoRevProfitsByDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetProtoRevAllProfitsDesc: UnaryMethodDefinitionish = {
  methodName: "GetProtoRevAllProfits",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetProtoRevAllProfitsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProtoRevAllProfitsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetProtoRevStatisticsByPoolDesc: UnaryMethodDefinitionish = {
  methodName: "GetProtoRevStatisticsByPool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetProtoRevStatisticsByPoolRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProtoRevStatisticsByPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetProtoRevAllStatisticsDesc: UnaryMethodDefinitionish = {
  methodName: "GetProtoRevAllStatistics",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetProtoRevAllStatisticsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProtoRevAllStatisticsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGetProtoRevTokenPairArbRoutesDesc: UnaryMethodDefinitionish = {
  methodName: "GetProtoRevTokenPairArbRoutes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryGetProtoRevTokenPairArbRoutesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProtoRevTokenPairArbRoutesResponse.decode(data),
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
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInRequestSDKType, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountInResponseSDKType, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutRequestSDKType, EstimateSwapExactAmountOutResponse, EstimateSwapExactAmountOutResponseSDKType, NumPoolsRequest, NumPoolsRequestSDKType, NumPoolsResponse, NumPoolsResponseSDKType } from "./query";
export interface Query {
  params(request?: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse>;
  /** Estimates swap amount out given in. */
  estimateSwapExactAmountIn(request: DeepPartial<EstimateSwapExactAmountInRequest>, metadata?: grpc.Metadata): Promise<EstimateSwapExactAmountInResponse>;
  /** Estimates swap amount in given out. */
  estimateSwapExactAmountOut(request: DeepPartial<EstimateSwapExactAmountOutRequest>, metadata?: grpc.Metadata): Promise<EstimateSwapExactAmountOutResponse>;
  numPools(request?: DeepPartial<NumPoolsRequest>, metadata?: grpc.Metadata): Promise<NumPoolsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
    this.numPools = this.numPools.bind(this);
  }
  params(request: DeepPartial<ParamsRequest> = {}, metadata?: grpc.Metadata): Promise<ParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, ParamsRequest.fromPartial(request), metadata);
  }
  estimateSwapExactAmountIn(request: DeepPartial<EstimateSwapExactAmountInRequest>, metadata?: grpc.Metadata): Promise<EstimateSwapExactAmountInResponse> {
    return this.rpc.unary(QueryEstimateSwapExactAmountInDesc, EstimateSwapExactAmountInRequest.fromPartial(request), metadata);
  }
  estimateSwapExactAmountOut(request: DeepPartial<EstimateSwapExactAmountOutRequest>, metadata?: grpc.Metadata): Promise<EstimateSwapExactAmountOutResponse> {
    return this.rpc.unary(QueryEstimateSwapExactAmountOutDesc, EstimateSwapExactAmountOutRequest.fromPartial(request), metadata);
  }
  numPools(request: DeepPartial<NumPoolsRequest> = {}, metadata?: grpc.Metadata): Promise<NumPoolsResponse> {
    return this.rpc.unary(QueryNumPoolsDesc, NumPoolsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.swaprouter.v1beta1.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryEstimateSwapExactAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "EstimateSwapExactAmountIn",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return EstimateSwapExactAmountInRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...EstimateSwapExactAmountInResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryEstimateSwapExactAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "EstimateSwapExactAmountOut",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return EstimateSwapExactAmountOutRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...EstimateSwapExactAmountOutResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryNumPoolsDesc: UnaryMethodDefinitionish = {
  methodName: "NumPools",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return NumPoolsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...NumPoolsResponse.decode(data),
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
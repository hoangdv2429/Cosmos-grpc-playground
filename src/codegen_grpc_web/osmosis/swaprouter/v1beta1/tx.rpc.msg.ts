import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType } from "./tx";
export interface Msg {
  swapExactAmountIn(request: DeepPartial<MsgSwapExactAmountIn>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountInResponse>;
  swapExactAmountOut(request: DeepPartial<MsgSwapExactAmountOut>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountOutResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
    this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
  }
  swapExactAmountIn(request: DeepPartial<MsgSwapExactAmountIn>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountInResponse> {
    return this.rpc.unary(MsgSwapExactAmountInDesc, MsgSwapExactAmountIn.fromPartial(request), metadata);
  }
  swapExactAmountOut(request: DeepPartial<MsgSwapExactAmountOut>, metadata?: grpc.Metadata): Promise<MsgSwapExactAmountOutResponse> {
    return this.rpc.unary(MsgSwapExactAmountOutDesc, MsgSwapExactAmountOut.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "osmosis.swaprouter.v1beta1.Msg"
};
export const MsgSwapExactAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactAmountIn",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSwapExactAmountIn.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapExactAmountInResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSwapExactAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "SwapExactAmountOut",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSwapExactAmountOut.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSwapExactAmountOutResponse.decode(data),
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
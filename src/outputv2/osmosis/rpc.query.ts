import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { GrpcWebImpl } from '../../outputv2/ibc/core/channel/v1/tx.rpc.msg';

export type Querier = {
    cosmos: {
      app: {
        v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.Query").Query
      },
      auth: {
        v1beta1: import("../cosmos/auth/v1beta1/query.rpc.Query").Query
      },
      authz: {
        v1beta1: import("../cosmos/authz/v1beta1/query.rpc.Query").Query
      },
      bank: {
        v1beta1: import("../cosmos/bank/v1beta1/query.rpc.Query").Query
      },
      base: {
        tendermint: {
          v1beta1: import("../cosmos/base/tendermint/v1beta1/query.rpc.Service").Service
        }
      },
      distribution: {
        v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.Query").Query
      },
      evidence: {
        v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.Query").Query
      },
      feegrant: {
        v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.Query").Query
      },
      gov: {
        v1: import("../cosmos/gov/v1/query.rpc.Query").Query,
        v1beta1: import("../cosmos/gov/v1beta1/query.rpc.Query").Query
      },
      group: {
        v1: import("../cosmos/group/v1/query.rpc.Query").Query
      },
      mint: {
        v1beta1: import("../cosmos/mint/v1beta1/query.rpc.Query").Query
      },
      nft: {
        v1beta1: import("../cosmos/nft/v1beta1/query.rpc.Query").Query
      },
      params: {
        v1beta1: import("../cosmos/params/v1beta1/query.rpc.Query").Query
      },
      slashing: {
        v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.Query").Query
      },
      staking: {
        v1beta1: import("../cosmos/staking/v1beta1/query.rpc.Query").Query
      },
      tx: {
        v1beta1: import("../cosmos/tx/v1beta1/service.rpc.Service").Service
      },
      upgrade: {
        v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.Query").Query
      }
    },
    osmosis: {
      claim: {
        v1beta1: import("./claim/v1beta1/query.rpc.Query").Query
      },
      epochs: {
        v1beta1: import("./epochs/query.rpc.Query").Query
      },
      gamm: {
        v1beta1: import("./gamm/v1beta1/query.rpc.Query").Query,
        v2: import("./gamm/v2/query.rpc.Query").Query
      },
      ibcratelimit: {
        v1beta1: import("./ibc-rate-limit/v1beta1/query.rpc.Query").Query
      },
      incentives: import("./incentives/query.rpc.Query").Query,
      lockup: import("./lockup/query.rpc.Query").Query,
      mint: {
        v1beta1: import("./mint/v1beta1/query.rpc.Query").Query
      },
      poolincentives: {
        v1beta1: import("./pool-incentives/v1beta1/query.rpc.Query").Query
      },
      superfluid: import("./superfluid/query.rpc.Query").Query,
      tokenfactory: {
        v1beta1: import("./tokenfactory/v1beta1/query.rpc.Query").Query
      },
      twap: {
        v1beta1: import("./twap/v1beta1/query.rpc.Query").Query
      },
      txfees: {
        v1beta1: import("./txfees/v1beta1/query.rpc.Query").Query
      }
    }
  };

export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string;
}): Promise<Querier> => {

  rpcEndpoint = rpcEndpoint.replace(/\/*$/, "");
  console.log(rpcEndpoint);
  

  let grpcWeb: GrpcWebImpl;

  if (typeof document !== "undefined") {
    // browser
    grpcWeb = new GrpcWebImpl(rpcEndpoint, {
      transport: grpc.CrossBrowserHttpTransport({ withCredentials: false }),
      // debug: true,
    });
  } else if (
    typeof navigator !== "undefined" &&
    navigator.product === "ReactNative"
  ) {
    // react-native
    grpcWeb = new GrpcWebImpl(rpcEndpoint, {
      transport: NodeHttpTransport(),
      // debug: true,
    });
  } else {
    // node.js
    console.log('node.js');
    grpcWeb = new GrpcWebImpl(rpcEndpoint, {
      transport: NodeHttpTransport(),
      // debug: true,
    });
  }

  return {
    cosmos: {
      app: {
        v1alpha1: new(await import("../cosmos/app/v1alpha1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      base: {
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).ServiceClientImpl(grpcWeb)
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.rpc.Query")).QueryClientImpl(grpcWeb),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).ServiceClientImpl(grpcWeb)
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      }
    },
    osmosis: {
      claim: {
        v1beta1: new (await import("./claim/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      epochs: {
        v1beta1: new (await import("./epochs/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      gamm: {
        v1beta1: new (await import("./gamm/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb),
        v2: new (await import("./gamm/v2/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      ibcratelimit: {
        v1beta1: new (await import("./ibc-rate-limit/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      incentives: new (await import("./incentives/query.rpc.Query")).QueryClientImpl(grpcWeb),
      lockup: new (await import("./lockup/query.rpc.Query")).QueryClientImpl(grpcWeb),
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      poolincentives: {
        v1beta1: new (await import("./pool-incentives/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      superfluid: new (await import("./superfluid/query.rpc.Query")).QueryClientImpl(grpcWeb),
      tokenfactory: {
        v1beta1: new (await import("./tokenfactory/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      twap: {
        v1beta1: new (await import("./twap/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      },
      txfees: {
        v1beta1: new (await import("./txfees/v1beta1/query.rpc.Query")).QueryClientImpl(grpcWeb)
      }
    }
  };
};
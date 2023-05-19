import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  url
}: {
  url: string;
}) => {
  url = url.replace(/\/*$/g, "");
  console.log(url);
  

  return {
    cosmos: {
      app: {
        v1alpha1: new (await import("../cosmos/app/v1alpha1/query.rpc.Query")).Query()
      },
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).AuthQuerier(url)
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).Query()
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).Query()
      },
      base: {
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).Service()
        }
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).Query()
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).Query()
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).Query()
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.rpc.Query")).Query(),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).Query()
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.rpc.Query")).Query()
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).Query()
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.rpc.Query")).Query()
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.rpc.Query")).Query()
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).Query()
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).Query()
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).Service()
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).Query()
      }
    },
    osmosis: {
      claim: {
        v1beta1: new (await import("./claim/v1beta1/query.rpc.Query")).Query()
      },
      epochs: {
        v1beta1: new (await import("./epochs/query.rpc.Query")).Query()
      },
      gamm: {
        v1beta1: new (await import("./gamm/v1beta1/query.rpc.Query")).Query(),
        v2: new (await import("./gamm/v2/query.rpc.Query")).Query()
      },
      ibcratelimit: {
        v1beta1: new (await import("./ibc-rate-limit/v1beta1/query.rpc.Query")).Query()
      },
      incentives: new (await import("./incentives/query.rpc.Query")).Query(),
      lockup: new (await import("./lockup/query.rpc.Query")).Query(),
      mint: {
        v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).Query()
      },
      poolincentives: {
        v1beta1: new (await import("./pool-incentives/v1beta1/query.rpc.Query")).Query()
      },
      superfluid: new (await import("./superfluid/query.rpc.Query")).Query(),
      tokenfactory: {
        v1beta1: new (await import("./tokenfactory/v1beta1/query.rpc.Query")).Query()
      },
      twap: {
        v1beta1: new (await import("./twap/v1beta1/query.rpc.Query")).Query()
      },
      txfees: {
        v1beta1: new (await import("./txfees/v1beta1/query.rpc.Query")).Query()
      }
    }
  };
};


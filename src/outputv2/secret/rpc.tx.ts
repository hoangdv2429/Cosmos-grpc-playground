import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { GrpcWebImpl } from "./compute/v1beta1/msg.rpc.msg";
import { ServiceClientImpl } from "../cosmos/tx/v1beta1/service.rpc.Service";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: string;
}) => {
  let grpcWeb: GrpcWebImpl;
  if (typeof document !== "undefined") {
    // browser
    grpcWeb = new GrpcWebImpl(rpc, {
      transport: grpc.CrossBrowserHttpTransport({ withCredentials: false }),
      // debug: true,
    });
  } else if (
    typeof navigator !== "undefined" &&
    navigator.product === "ReactNative"
  ) {
    // react-native
    grpcWeb = new GrpcWebImpl(rpc, {
      transport: NodeHttpTransport(),
      // debug: true,
    });
  } else {
    // node.js
    grpcWeb = new GrpcWebImpl(rpc, {
      transport: NodeHttpTransport(),
      // debug: true,
    });
  }

  const txService = new ServiceClientImpl(grpcWeb);

  return {
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    }
  },
  secret: {
    compute: {
      v1beta1: new (await import("./compute/v1beta1/msg.rpc.msg")).MsgClientImpl(grpcWeb)
    },
    intertx: {
      v1beta1: new (await import("./intertx/v1beta1/tx.rpc.msg")).MsgClientImpl(grpcWeb)
    }
  }
}};
import { chains } from "chain-registry";
import { getOfflineSignerProto as getOfflineSigner } from "cosmjs-utils";
import { evmos, osmosis, ibc } from "./codegen_grpc_gateway";
import {
  getSigningCosmosClient,
  getSigningIbcClient,
} from "./codegen_grpc_gateway";
import { TxRaw } from "./codegen_grpc_gateway/cosmos/tx/v1beta1/tx";
import { BroadcastMode } from "./codegen_grpc_gateway/cosmos/tx/v1beta1/service";
import {
  AuthorizationType,
  StakeAuthorization,
} from "./codegen_grpc_gateway/cosmos/staking/v1beta1/authz";
import Long from "long";
import { Member } from "./codegen_grpc_gateway/cosmos/group/v1/types";
import {
  MsgCreateGroupWithPolicy,
  MsgSubmitProposal,
} from "./codegen_grpc_gateway/cosmos/group/v1/tx";

//transaction transition is sign => encode => broadcast

const main = async () => {
  const _address = "evmos1yqmz73kfd0ap3g9d50uw7y82sl5k8fs0a3xfvn";

  //create gRPC-web client
  const client = await evmos.ClientFactory.createGrpcGateWayClient({
    // rpcEndpoint: 'https://grpc.testnet.secretsaturn.net'
    // rpcEndpoint: 'https://juno-grpc-web.polkachu.com/'
    // ✨  Done in 28.57s. This is grpc-web
    // rpcEndpoint: 'https://osmosis-grpc-web.polkachu.com/'
    // ✨  Done in 43.94s. This is grpc-gateway
    // rpcEndpoint: 'https://osmosis-rpc.polkachu.com'
    // Osmosis mainnet
    // endpoint: 'https://lcd.osmosis.zone'
    // Osmosis testnet
    endpoint: "https://evmos-testnet-api.polkachu.com",
  });

  // this part is for testing connection
  // console.time("node_status");
  // const nodeStatus = await client.cosmos.base.tendermint.v1beta1.getNodeInfo(
  //   {}
  // );
  // console.log(nodeStatus);
  // return;

  // console.timeEnd("node_status");
  // get signer data
  let account;
  console.time("accountInfo");
  try {
    account = await client.cosmos.auth.v1beta1.account({
      address: _address,
    });
  } catch (error) {
    console.log(error);
  }
  console.timeEnd("accountInfo");
  console.log(account);

  let account_eth;
  console.time("account_eth_Info");
  try {
    account = await client.evmos.({
      address: _address,
    });
  } catch (error) {
    console.log(error);
  }
  console.timeEnd("account_eth_Info");
  console.log(account);

  return;

  const baseAccount =
    account.account as import("./codegen_grpc_gateway/cosmos/auth/v1beta1/auth").BaseAccount;

  let signerData;
  try {
    signerData = {
      accountNumber: Number(baseAccount.account_number),
      sequence: Number(baseAccount.sequence),
      //chainId: 'pulsar-2',
      //chainId: 'osmosis-1'
      chainId: "centauri-1",
    };
  } catch (error) {
    console.log("error getting signer data!!:", JSON.stringify(signerData));
    return;
  }

  //for whomever take my 1 OSMO when I'm developing for the whole community, I pity you
  const mnemonic = "";
  const chain = chains.find(({ chain_name }) => chain_name === "composable");
  if (!chain) {
    console.log("check chain name!");
  }

  // get proto offline signer
  const signer = await getOfflineSigner({
    mnemonic,
    chain,
  });

  //get signer
  const signClient = await getSigningIbcClient({
    rpcEndpoint: "https://cosmos-rpc.quickapi.com:443",
    signer,
  });

  //--------------------------------------------
  // example for send msg
  //--------------------------------------------

  // const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
  // const msg = send({
  //   amount: [
  //     {
  //       denom: "uosmo",
  //       amount: "1000",
  //     },
  //   ],
  //   toAddress: _address,
  //   fromAddress: _address,
  // });

  // const fee = {
  //   amount: [
  //     {
  //       denom: "uosmo",
  //       amount: "864",
  //     },
  //   ],
  //   gas: "86364",
  // };
  const stamp = Date.now();
  const timeoutInNanos = (stamp + 1.2e6) * 1e6;
  const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;

  const msg = transfer({
    sourcePort: "transfer",
    sourceChannel: "channel-184",
    token: {
      denom:
        "ibc/7078D8FA8BCB50A1E7855458F1E9898A3FDA0093B703DA3B3108DD35ED99E048",
      amount: "46500000",
    },
    sender: "centauri19crd4fwzm9qtf5ln5l3e2vmquhevjwprjdx5zj",
    receiver: "stars147auavf4tvghskslq2w65de0nh5dqdmlx60rax",
    timeoutHeight: {
      revisionNumber: Long.fromString("0"),
      revisionHeight: Long.fromString("0"),
    },
    timeoutTimestamp: Long.fromNumber(timeoutInNanos),
    memo: "repay",
  });

  const fee = {
    amount: [
      {
        denom:
          "ibc/7078D8FA8BCB50A1E7855458F1E9898A3FDA0093B703DA3B3108DD35ED99E048",
        amount: "250000",
      },
    ],
    gas: "250000",
  };

  const account_data = await signer.getAccounts();
  // console.log('account_data: ', account_data);

  const signed_tx = await signClient.sign(
    _address,
    [msg],
    fee,
    "grpc gateway",
    signerData
  );
  // console.log(signed_tx);
  const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());

  // uncomment the following snippet to send transaction
  console.time("broadcastTx");
  try {
    const res = await client.cosmos.tx.v1beta1.broadcastTx({
      txBytes: txRawBytes,
      mode: BroadcastMode.BROADCAST_MODE_BLOCK,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  console.timeEnd("broadcastTx");

  // console.log(res);

  //--------------------------------------------
  // example for authz
  //--------------------------------------------

  // const fee = {
  //   amount: [
  //     {
  //       denom: "uosmo",
  //       amount: "1864",
  //     },
  //   ],
  //   gas: "186364",
  // };

  // const account_data = await signer.getAccounts();
  // console.log(account_data);

  // const { grant } = cosmos.authz.v1beta1.MessageComposer.withTypeUrl;
  // const msg = grant({
  //   granter: _address,
  //   grantee: "osmo19crd4fwzm9qtf5ln5l3e2vmquhevjwpr7uccsn",
  //   grant: {
  //     authorization: StakeAuthorization.toProtoMsg({
  //       maxTokens: {
  //         denom: "uosmo",
  //         amount: "100000000",
  //       },
  //       authorizationType: AuthorizationType.AUTHORIZATION_TYPE_DELEGATE,
  //     }),
  //     expiration: new Date(Date.now() + 60 * 60 * 24 * 7),
  //   },
  // });

  // const msgs = [];
  // msgs.push(msg);

  // const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
  // const msg1 = send({
  //   amount: [
  //     {
  //       denom: "uosmo",
  //       amount: "1000",
  //     },
  //   ],
  //   toAddress: _address,
  //   fromAddress: _address,
  // });

  // msgs.push(msg1);

  // // propose change
  // // const res = client.cosmos.authz.v1beta1.grant.simulate(msg, signer);
  // const signed_tx = await signClient.sign(
  //   _address,
  //   msgs,
  //   fee,
  //   "Diff",
  //   signerData
  // );
  // console.log(signed_tx);
  // const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());

  // const res = await client.cosmos.tx.v1beta1.broadcastTx({
  //   txBytes: txRawBytes,
  //   mode: BroadcastMode.BROADCAST_MODE_BLOCK,
  // });

  // console.log(res);

  //--------------------------------------------
  // createGroupWithPolicy example
  //--------------------------------------------

  // const {
  //     createGroupWithPolicy,
  // } = cosmos.group.v1.MessageComposer.withTypeUrl;

  // const {
  //     PercentageDecisionPolicy
  // } = cosmos.group.v1;

  //   const fee = {
  //     amount: [
  //         {
  //             denom: 'uosmo',
  //             amount: '864'
  //         }
  //         ],
  //         gas: '86364'
  // }

  // const msg = createGroupWithPolicy({
  //     admin: _address,
  //     groupMetadata: 'testing group metadata',
  //     groupPolicyAsAdmin: true,
  //     groupPolicyMetadata: 'testing group policy metadata',
  //     members: [{
  //         address: _address,
  //         weight: '50',
  //         metadata: 'test-0',
  //         addedAt: new Date(Date.now()),
  //     } ],
  //     decisionPolicy: PercentageDecisionPolicy.toProtoMsg({
  //         percentage: '0.5',
  //         windows: {
  //             votingPeriod: {
  //                 nanos: 0,
  //                 seconds: Long.fromValue(3600)
  //             },
  //             minExecutionPeriod: {
  //                 nanos: 0,
  //                 seconds: Long.fromValue(3600)
  //             }
  //     }
  //     })});

  // // const policy: MsgCreateGroupWithPolicyEncoded = {
  // //     admin: _address,
  // //     groupMetadata: 'testing group metadata',
  // //     groupPolicyAsAdmin: true,
  // //     groupPolicyMetadata: 'testing group policy metadata',
  // //     members: [{
  // //         address: _address,
  // //         weight: '50',
  // //         metadata: 'test-0',
  // //         addedAt: new Date(Date.now()),
  // //     } ],
  // //     decisionPolicy: PercentageDecisionPolicy.toProtoMsg({
  // //         percentage: '0.5',
  // //         windows: {
  // //             votingPeriod: {
  // //                 nanos: 0,
  // //                 seconds: Long.fromValue(3600)
  // //             },
  // //             minExecutionPeriod: {
  // //                 nanos: 0,
  // //                 seconds: Long.fromValue(3600)
  // //             }
  // //     }
  // //     })};

  // //     const msg = {
  // //         typeUrl: '/cosmos.group.v1.MsgCreateGroupWithPolicy',
  // //         value: policy
  // //     }

  //     const signed_tx = await signClient.sign(_address, [msg], fee, 'grpc-gateway',signerData);
  //     console.log(signed_tx);
  //     const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());

  //     const res = await client.cosmos.tx.v1beta1.broadcastTx(
  //       {
  //         txBytes: txRawBytes,
  //         mode: BroadcastMode.BROADCAST_MODE_BLOCK
  //       }
  //     )

  //     console.log(res);
};

main().then(() => {
  console.log("done");
});

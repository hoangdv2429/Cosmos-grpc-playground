import { chains } from "chain-registry";
import { getOfflineSignerProto as getOfflineSigner } from "cosmjs-utils";
import { cosmos, osmosis } from "./codegen_grpc_gateway";
import {
  getSigningCosmosClient,
  getSigningOsmosisClient,
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
  MsgCreateGroupWithPolicyEncoded,
  MsgSubmitProposal,
} from "./codegen_grpc_gateway/cosmos/group/v1/tx";

//transaction transition is sign => encode => broadcast

const main = async () => {
  const _address = "osmo1xa382g55fvyyp3rmdsk548qpdzmh6p37ajdk99";

  //create gRPC-web client
  const client = await osmosis.ClientFactory.createGrpcGateWayClient({
    // rpcEndpoint: 'https://grpc.testnet.secretsaturn.net'
    // rpcEndpoint: 'https://juno-grpc-web.polkachu.com/'
    // ✨  Done in 28.57s. This is grpc-web
    // rpcEndpoint: 'https://osmosis-grpc-web.polkachu.com/'
    // ✨  Done in 43.94s. This is grpc-gateway
    // rpcEndpoint: 'https://osmosis-rpc.polkachu.com'
    // Osmosis mainnet
    // endpoint: 'https://lcd.osmosis.zone'
    // Osmosis testnet
    endpoint: "https://lcd.osmotest5.osmosis.zone/",
  });

  console.time("node_status");
  const nodeStatus = await client.cosmos.base.tendermint.v1beta1.getNodeInfo(
    {}
  );
  console.timeEnd("node_status");

  // get signer data
  console.time("accountInfo");
  const account = await client.cosmos.auth.v1beta1.account({
    address: _address,
  });
  console.timeEnd("accountInfo");
  // console.log(account);

  const baseAccount =
    account.account as import("./codegen_grpc_gateway/cosmos/auth/v1beta1/auth").BaseAccount;

  let signerData;
  try {
    signerData = {
      accountNumber: Number(baseAccount.account_number),
      sequence: Number(baseAccount.sequence),
      //chainId: 'pulsar-2',
      //chainId: 'osmosis-1'
      chainId: "osmo-test-5",
    };
  } catch (error) {
    console.log("error getting signer data!!:", JSON.stringify(signerData));
    return;
  }

  const data = await client.cosmos.bank.v1beta1.allBalances({
    address: _address,
    pagination: null,
  });
  // console.log("Before: ", data);

  //for whomever take my 1 OSMO when I'm developing for the whole community, I pity you
  const mnemonic =
    "chef pigeon panic shadow tool picnic soda axis display element gadget finger";
  const chain = chains.find(({ chain_name }) => chain_name === "osmosis");

  // get proto offline signer
  const signer = await getOfflineSigner({
    mnemonic,
    chain,
  });

  //get signer
  const signClient = await getSigningCosmosClient({
    rpcEndpoint: "https://cosmos-rpc.quickapi.com:443",
    signer,
  });

  //--------------------------------------------
  // example for send msg
  //--------------------------------------------

  const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
  const msg = send({
    amount: [
      {
        denom: "uosmo",
        amount: "1000",
      },
    ],
    toAddress: _address,
    fromAddress: _address,
  });

  const fee = {
    amount: [
      {
        denom: "uosmo",
        amount: "864",
      },
    ],
    gas: "86364",
  };

  const account_data = await signer.getAccounts();
  console.log(account_data);

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
  const res = await client.cosmos.tx.v1beta1.broadcastTx({
    txBytes: txRawBytes,
    mode: BroadcastMode.BROADCAST_MODE_BLOCK,
  });
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

export * from './codegen_tm';
import { chains } from 'chain-registry';
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
import { cosmos, osmosis } from './codegen_grpc_gateway';
import { getSigningCosmosClient, getSigningOsmosisClient } from './codegen_grpc_gateway';
import { TxRaw } from './codegen_grpc_gateway/cosmos/tx/v1beta1/tx';
import { BroadcastMode } from './codegen_grpc_gateway/cosmos/tx/v1beta1/service';
import { MsgDelegate } from './codegen_grpc_gateway/cosmos/staking/v1beta1/tx';
import { MsgGrant } from './codegen_grpc_gateway/cosmos/authz/v1beta1/tx';
import { AuthorizationType, StakeAuthorization } from './codegen_grpc_gateway/cosmos/staking/v1beta1/authz';
import { Timestamp } from './codegen_grpc_gateway/google/protobuf/timestamp';
import long from 'long';

//transaction transition is sign => encode => broadcast 


const main = async () => {

    const address___ = "osmo1xa382g55fvyyp3rmdsk548qpdzmh6p37ajdk99"
    
    //create gRPC-web client
    const client = await osmosis.ClientFactory.createGrpcGateWayClient({
        // rpcEndpoint: 'https://grpc.testnet.secretsaturn.net'
        // rpcEndpoint: 'https://juno-grpc-web.polkachu.com/'
        // ✨  Done in 28.57s.
        // ✨  Done in 36.97s
        // rpcEndpoint: 'https://osmosis-grpc-web.polkachu.com/'
        // ✨  Done in 52.69s.
        // ✨  Done in 43.94s.
        // rpcEndpoint: 'https://osmosis-rpc.polkachu.com'
        endpoint: 'https://lcd.osmosis.zone'
        // endpoint: 'https://api.pulsar.scrttestnet.com'
    });

    // get signer data
    const account = await client.cosmos.auth.v1beta1.account({
        address: address___
      });
    console.log(account);

    const baseAccount = account.account 
    //   as import("./codegen_grpc_gateway/cosmos/auth/v1beta1/auth").BaseAccount;
    
    const signerData = {
      accountNumber: Number(baseAccount.account_number),
      sequence: Number(baseAccount.sequence),
    //   chainId: 'pulsar-2',
      chainId: 'osmosis-1'
    };
    if (!signerData.accountNumber || !signerData.sequence) {
        console.log('error getting signer data!!');
        return;    
    }

    const data = await client.cosmos.bank.v1beta1.allBalances({
        address: address___,
        pagination: null
    });
    console.log('Before: ', data);

    const mnemonic =
    'chef pigeon panic shadow tool picnic soda axis display element gadget finger';
    const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');
    
    // get proto offline signer
    const signer = await getOfflineSigner({
        mnemonic,
        chain
    });
    
    //get signer
    const signClient = await getSigningCosmosClient({
      rpcEndpoint: 'https://cosmos-rpc.quickapi.com:443',
      signer
    })
    
    //scaffold send msg
    // const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
    // const msg = send({
    //     amount: [
    //     {
    //         denom: 'uosmo',
    //         amount: '1000'
    //     }
    //     ],
    //     toAddress: address__,
    //     fromAddress: address__
    // });

    const fee = {
        amount: [
            {
                denom: 'uosmo',
                amount: '864'
            }
            ],
            gas: '86364'
    }

    const account_data = await signer.getAccounts();
    console.log(account_data);
    
    // const signed_tx = await signClient.sign(address__, [msg], fee, 'grpc gateway', signerData);
    // console.log(signed_tx);
    // const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());

    // uncomment the following snippet to send transaction
    // const res = await client.cosmos.tx.v1beta1.broadcastTx(  
    //   {
    //     txBytes: txRawBytes,
    //     mode: BroadcastMode.BROADCAST_MODE_BLOCK
    //   }
    // )
    
    // console.log(res);

    //--------------------------------------------

    const { grant } = cosmos.authz.v1beta1.MessageComposer.withTypeUrl;
    const msg = grant({
      granter: address___,
      grantee: 'osmo19crd4fwzm9qtf5ln5l3e2vmquhevjwpr7uccsn',
      grant: {
        // authorization: {
        //   typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        //   value: Uint8Array.from(StakeAuthorization.encode(StakeAuthorization.fromPartial({
        //     maxTokens: {
        //       denom: 'uosmo',
        //       amount: '100000000'
        //     },
        //     authorizationType: AuthorizationType.AUTHORIZATION_TYPE_DELEGATE
        //   })).finish())
        // },
        authorization: StakeAuthorization.toProtoMsg({
          maxTokens: {
                  denom: 'uosmo',
                  amount: '100000000'
                },
                authorizationType: AuthorizationType.AUTHORIZATION_TYPE_DELEGATE
              }),
            expiration: new Date(Date.now() + 60 * 60 * 24 * 7)
    }})

    const signed_tx = await signClient.sign(address___, [msg], fee, 'grpc gateway', signerData);
    console.log(signed_tx);
    const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());

    const res = await client.cosmos.tx.v1beta1.broadcastTx(  
      {
        txBytes: txRawBytes,
        mode: BroadcastMode.BROADCAST_MODE_BLOCK
      }
    )

    console.log(res);
    

}

main().then(() => {
    console.log("done");
})


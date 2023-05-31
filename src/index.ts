export * from './codegen_tm';
import { chains } from 'chain-registry';
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
import { cosmos, osmosis } from './codegen_grpc_gateway';
import { fromBase64, toBase64 } from '@cosmjs/encoding';
import { akash, getSigningCosmosClient, getSigningOsmosisClient } from './codegen_grpc_gateway';
import { TxRaw } from './codegen_grpc_gateway/cosmos/tx/v1beta1/tx';
import { BroadcastMode } from './codegen_grpc_gateway/cosmos/tx/v1beta1/service';
import OsmosisWebSocket from './codegen_grpc_gateway/ws';

//transaction transition is sign => encode => broadcast 


const main = async () => {
  const params = ["tm.event='NewBlock'"]
  const method = "subscribe"
  new OsmosisWebSocket('wss://rpc.osmosis.zone/websocket', method, params, 1 );

  return;
  

    // const address_ = "secret1wwp2e8hn70kqkkqcf2r4z2km7tse6nwdg96qlk"
    const address_ = "osmo1xa382g55fvyyp3rmdsk548qpdzmh6p37ajdk99"
    
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
        endpoint: 'https://lcd-osmosis.blockapsis.com'
        // endpoint: 'https://api.pulsar.scrttestnet.com'
    });

    // get signer data
    const account = await client.cosmos.auth.v1beta1.account({
        address: address_
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
        address: address_  
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
    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
    const msg = send({
        amount: [
        {
            denom: 'uosmo',
            amount: '1000'
        }
        ],
        toAddress: address_,
        fromAddress: address_
    });

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
    
    const signed_tx = await signClient.sign(address_, [msg], fee, 'grpc gateway', signerData);
    console.log(signed_tx);
    const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());

    // uncomment the following snippet to send transaction
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


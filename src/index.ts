export * from './codegen_tm';
import { chains } from 'chain-registry';
// import { osmosis } from './codegen_tm';
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
import { cosmos, osmosis, secret } from './outputv2';
import { StdFee, StdSignDoc, StdSignature } from '@cosmjs/amino';
import { fromBase64, toBase64 } from '@cosmjs/encoding';
import { Long } from './outputv2/helpers';
import { Coin } from '@cosmjs/stargate';
import { AminoMsg } from '@cosmjs/amino';
import { getSigningCosmosClient, getSigningOsmosisClient } from './codegen_tm';
import { TxRaw } from './outputv2/cosmos/tx/v1beta1/tx';
import { BroadcastMode } from './codegen_tm/cosmos/tx/v1beta1/service';

//transaction transition is sign => encode => broadcast 


const main = async () => {
    
    //create gRPC-web client
    const client = await osmosis.ClientFactory.createRPCQueryClient({
        // rpcEndpoint: 'https://grpc.testnet.secretsaturn.net'
        // rpcEndpoint: 'https://juno-grpc-web.polkachu.com/'
        rpcEndpoint: 'https://osmosis-grpc-web.polkachu.com/'
    });

    //connect and get node_info
    const nodeInfo = await client.cosmos.base.tendermint.v1beta1.getNodeInfo();
    console.log(nodeInfo);

    // get signer data
    const account = await client.cosmos.auth.v1beta1.account({
        // address: 'secret1wwp2e8hn70kqkkqcf2r4z2km7tse6nwdg96qlk',
        // address: 'juno1vjrx0lks65yefnsz4xk92vugda2z25esjfhlxa'
        address: 'osmo1xa382g55fvyyp3rmdsk548qpdzmh6p37ajdk99'
        // address: 'cosmos1xpvhjypxz2p8t3zgwngq7k623r6allrp9xm2zw'
      });
    console.log(account)

    const baseAccount =
      account.account as import("./outputv2/cosmos/auth/v1beta1/auth").BaseAccount;
    const signerData = {
      accountNumber: Number(baseAccount.accountNumber),
      sequence: Number(baseAccount.sequence),
      // chainId: 'pulsar-2',
      chainId: 'osmosis-1'
    };

    const data = await client.cosmos.bank.v1beta1.allBalances({
        // address: 'secret1wwp2e8hn70kqkkqcf2r4z2km7tse6nwdg96qlk'
        // address: 'juno1xa382g55fvyyp3rmdsk548qpdzmh6p37rmaa5t'
        address: 'osmo1xa382g55fvyyp3rmdsk548qpdzmh6p37ajdk99'
    });
    console.log('Before: ', data);

    const mnemonic =
    'chef pigeon panic shadow tool picnic soda axis display element gadget finger';
    const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');
    // console.log('chain: ', chain);
    
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
        toAddress: 'osmo1xa382g55fvyyp3rmdsk548qpdzmh6p37ajdk99',
        fromAddress: 'osmo1xa382g55fvyyp3rmdsk548qpdzmh6p37ajdk99'
    });

    // console.log(msg);

    const fee = {
        amount: [
            {
                denom: 'uosmo',
                amount: '864'
            }
            ],
            gas: '86364'
    }

    // const account_data = await signer.getAccounts();
    // console.log(account_data);
    
    // uncomment the following snippet to send transaction
    // const signed_tx = await signClient.sign('osmo1xa382g55fvyyp3rmdsk548qpdzmh6p37ajdk99', [msg], fee, 'grpc webbbbbb', signerData);
    // console.log(signed_tx);
    // const txRawBytes = Uint8Array.from(TxRaw.encode(signed_tx).finish());
    // const res = await client.cosmos.tx.v1beta1.broadcastTx(  
    //   {
    //     txBytes: txRawBytes,
    //     mode: 1
    //   }
    // )
    
    // console.log(res);

}

main().then(() => {
    console.log("done");
})


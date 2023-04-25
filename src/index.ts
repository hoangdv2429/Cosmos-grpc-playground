export * from './codegen_tm';

// import { osmosis } from './codegen_tm';
import { cosmos } from './outputv2';

const main = async () => {
    const client = await cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint: 'https://grpc.testnet.secretsaturn.net'
    });
    const data = await client.cosmos.bank.v1beta1.allBalances({
        address: 'secret1wwp2e8hn70kqkkqcf2r4z2km7tse6nwdg96qlk'
    });
    console.log(data);



    
}

main().then(() => {
    console.log("done");
})


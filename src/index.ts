export * from './codegen_tm';

// import { osmosis } from './codegen_tm';
import { cosmos } from './outputv2';

const main = async () => {
    const client = await cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint: 'http://cosmos-grpc.polkachu.com:14990'
    });
    const data = await client.cosmos.bank.v1beta1.allBalances({
        address: 'cosmos19crd4fwzm9qtf5ln5l3e2vmquhevjwprk8tgxp'
    });
    console.log(data);

    // const pools = await client.osmosis.gamm.v1beta1.pools();
    // console.log(pools);
    
}

main().then(() => {
    console.log("done");
})


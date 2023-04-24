export * from './codegen_tm';

// import { osmosis } from './codegen_tm';
import { cosmos } from './outputv2';

const main = async () => {
    const client = await cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint: 'https://wgrpc.secret.express'
    });
    const data = await client.cosmos.bank.v1beta1.allBalances({
        address: 'secret1snwxzm37zm7p75dneyzxm5wr9c6se0zs6zupxc'
    });
    console.log(data);

    // const pools = await client.osmosis.gamm.v1beta1.pools();
    // console.log(pools);
    
}

main().then(() => {
    console.log("done");
})


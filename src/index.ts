import Long from "long";
import { LightBlock } from "./codegen_grpc_gateway/tendermint/types/types";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient, setupIbcExtension } from "@cosmjs/stargate";
import { TxProof } from "./codegen_grpc_gateway/tendermint/types/types";
import { Header } from "./codegen_grpc_gateway/tendermint/types/types";

// this function connect to Tendermint Rpc and get Proof of transaction
async function getProof(txHash: string): Promise<TxProof> {
  const rpcEndpoint = "https://rpc-stargaze.whispernode.com/";

  const _client = await Tendermint34Client.connect(rpcEndpoint);

  // Convert hex string to Uint8Array or []byte in Go
  const byteArray = new Uint8Array(
    txHash.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
  );
  // console.log("byteArray:", byteArray);

  let tx;
  try {
    tx = await _client.tx({ hash: byteArray, prove: true });
    // console.log(tx);
    // console.log(tx.result);
    // console.log(toHexString(tx.result.data));
    // console.log("Proof.Data:", JSON.stringify(tx.proof.data));
  } catch (error) {
    console.error("Error fetching transaction:", error);
  }

  return tx.proof as TxProof;
}

// this function connect to Tendermint RPC and get Tendermint Header of that specific height
async function fetchLightClientHeader(height: number): Promise<Header> {
  const rpcEndpoint = "https://rpc-stargaze.pupmos.network/";
  const tmRPCClient = await Tendermint34Client.connect(rpcEndpoint);
  const queryClient = QueryClient.withExtensions(
    tmRPCClient,
    setupIbcExtension
  );

  /**
   * CONSTRUCT LIGHTBLOCK at revisionHeight
   * **/
  // Fetch block header
  const header = (await tmRPCClient.block(height)).block.header;
  // console.log("header:", header);
  // Fetch commit info
  const commit = (await tmRPCClient.commit(height)).commit;
  // console.log("commit:", commit);
  // Fetch validator set
  const trustedValidators = (await tmRPCClient.validators({ height: height }))
    .validators;
  // Manually construct a light block
  let lightBlock = {
    header,
    commit,
    trustedValidators,
  };
  // END

  // Fetch new validator set
  const trustedValidators1 = (
    await tmRPCClient.validators({ height: height + 1 })
  ).validators;

  // contain TimeStamp, Root/AppHash, nextValidatorsHash
  try {
    const tmConsensusStateAtHeight =
      await queryClient.ibc.client.consensusStateTm(
        "07-tendermint-0",
        // seem height is not working rn
        {
          revisionNumber: new Long(1),
          revisionHeight: new Long(10076458),
        }
      );
    console.log("tmConsensusStateAtHeight:", tmConsensusStateAtHeight);
  } catch (error) {
    console.log("err tmConsensusStateAtHeight:", error);
  }

  let clientConsensusStateAtHeight;
  try {
    // contain consensusState, proof, proofHeight
    clientConsensusStateAtHeight = await queryClient.ibc.client.consensusState(
      "07-tendermint-0",
      height
    );
    console.log("clientConsensusStateAtHeight:", clientConsensusStateAtHeight);
  } catch (error) {
    console.log("err clientConsensusStateAtHeight:", error);
  }

  console.log("clientConsensusStateAtHeight:", clientConsensusStateAtHeight);

  // this need trustedHeight, res.Header also res.Header.Header.DataHash for validation
  // const lightClientHeader: Header = {
  //   signedHeader: {
  //     header: lightBlock.header,
  //     commit: lightBlock.commit,
  //   }
  //   validatorSet: nil,
  //   trustedHeight: height,
  //   trustedValitor: trustedValidators,
  // };

  // return lightClientHeader;
  return Header.fromPartial({});
}

// getProof(
//   "2CC0F0C5106F30F5D26ABE8CB93F1EF0CCCE10754207C38B129D76ED3B7C75B2"
// ).then((res) => {
//   console.log(res);
// });

fetchLightClientHeader(10076458);

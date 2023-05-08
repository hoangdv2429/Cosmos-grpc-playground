export * from './codegen_tm';
import { chains } from 'chain-registry';
// import { osmosis } from './codegen_tm';
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
import { cosmos, osmosis, secret } from './outputv2';
import { StdFee, StdSignDoc, StdSignature } from '@cosmjs/amino';
import { fromBase64, toBase64 } from '@cosmjs/encoding';
import { Long } from './outputv2/helpers';
import { Coin } from '@cosmjs/stargate';
import { AminoMsg } from '@cosmjs/amino';
import { MsgSend } from './outputv2/cosmos/bank/v1beta1/tx';
//transaction transition is sign => encode => broadcast 

export interface ProtoMsg {
    typeUrl: string;
    // value is used in x/compute
    value: any;
    encode(): Promise<Uint8Array>;
  }

  function makeSignDocAmino(
    msgs: readonly AminoMsg[],
    fee: StdFee,
    chainId: string,
    memo: string | undefined,
    accountNumber: number | string,
    sequence: number | string,
  ): StdSignDoc {
    return {
      chain_id: chainId,
      account_number: String(accountNumber),
      sequence: String(sequence),
      fee: fee,
      msgs: msgs,
      memo: memo || "",
    };
  }

async function encodeTx(
    txBody: {
    typeUrl: string;
    value: {
      messages: ProtoMsg[];
      memo: string;
    }
  }): Promise<Uint8Array> {
    const { Any } = await import("./outputv2/google/protobuf/any");

    //HOW ??
    const wrappedMessages = await Promise.all(
      txBody.value.messages.map(async (message) => {
        const binaryValue = await message.encode();
        return Any.fromPartial({
          typeUrl: message.typeUrl,
          value: binaryValue,
        });
      }),
    );

    const { TxBody } = await import("./outputv2/cosmos/tx/v1beta1/tx");

    const txBodyEncoded = TxBody.fromPartial({
      ...txBody.value,
      messages: wrappedMessages,
    });
    return TxBody.encode(txBodyEncoded).finish();
}

//---sign Amino helper
type Algo = "secp256k1" | "ed25519" | "sr25519";

export type AccountData = {
    /** A printable address (typically bech32 encoded) */
    readonly address: string;
    readonly algo: Algo;
    readonly pubkey: Uint8Array;
  };
  /**
 * Signing information for a single signer that is not included in the transaction.
 *
 * @see https://github.com/cosmos/cosmos-sdk/blob/v0.42.2/x/auth/signing/sign_mode_handler.go#L23-L37
 */
export interface SignerData {
    readonly accountNumber: number;
    readonly sequence: number;
    readonly chainId: string;
  }

  export type AminoSignResponse = {
    /**
     * The sign doc that was signed.
     * This may be different from the input signDoc when the signer modifies it as part of the signing process.
     */
    readonly signed: StdSignDoc;
    readonly signature: StdSignature;
  };

  export interface AminoSigner {
    /**
     * Get SignMode for signing a tx.
     */
    readonly getSignMode?: () => Promise<
      import("./outputv2/cosmos/tx/signing/v1beta1/signing").SignMode
    >;
  
    /**
     * Get AccountData array from wallet. Rejects if not enabled.
     */
    readonly getAccounts: () => Promise<readonly AccountData[]>;
  
    /**
     * Request signature from whichever key corresponds to provided bech32-encoded address. Rejects if not enabled.
     *
     * The signer implementation may offer the user the ability to override parts of the signDoc. It must
     * return the doc that was signed in the response.
     *
     * @param signerAddress The address of the account that should sign the transaction
     * @param signDoc The content that should be signed
     */
    readonly signAmino: (
      signerAddress: string,
      signDoc: StdSignDoc,
    ) => Promise<AminoSignResponse>;
  }

  function isSecp256k1Pubkey(pubkey: Pubkey): boolean {
    return pubkey.type === "tendermint/PubKeySecp256k1";
  }

  function isMultisigThresholdPubkey(pubkey: Pubkey): boolean {
    return pubkey.type === "tendermint/PubKeyMultisigThreshold";
  }

  async function encodePubkey(
    pubkey: Pubkey,
  ): Promise<import("./outputv2/google/protobuf/any").Any> {
    const { Any } = await import("./outputv2/google/protobuf/any");
  
    if (isSecp256k1Pubkey(pubkey)) {
      const { PubKey } = await import(
        "./outputv2/cosmos/crypto/secp256k1/keys"
      );
  
      const pubkeyProto = PubKey.fromPartial({
        key: fromBase64(pubkey.value),
      });
      return Any.fromPartial({
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: Uint8Array.from(PubKey.encode(pubkeyProto).finish()),
      });
    } else if (isMultisigThresholdPubkey(pubkey)) {
      const { LegacyAminoPubKey } = await import(
        "./outputv2/cosmos/crypto/multisig/keys"
      );
  
      const pubkeyProto = LegacyAminoPubKey.fromPartial({
        threshold: Number(pubkey.value.threshold),
        publicKeys: pubkey.value.pubkeys.map(encodePubkey),
      });
      return Any.fromPartial({
        typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
        value: Uint8Array.from(LegacyAminoPubKey.encode(pubkeyProto).finish()),
      });
    } else {
      throw new Error(`Pubkey type ${pubkey.type} not recognized`);
    }
  }

  export type Pubkey = {
    // don't use a string literal union here as that makes trouble with json test data:
    // https://github.com/cosmos/cosmjs/pull/44#pullrequestreview-353280504
    readonly type: string;
    readonly value: any;
  };

  export function encodeSecp256k1Pubkey(pubkey: Uint8Array): Pubkey {
    if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
      throw new Error(
        "Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03",
      );
    }
    return {
      type: "tendermint/PubKeySecp256k1",
      value: toBase64(pubkey),
    };
  }

  /**
 * Creates and serializes an AuthInfo document.
 *
 * This implementation does not support different signing modes for the different signers.
 */
async function makeAuthInfoBytes(
    signers: ReadonlyArray<{
      readonly pubkey: import("./outputv2/google/protobuf/any").Any;
      readonly sequence: number;
    }>,
    feeAmount: readonly Coin[],
    gasLimit: number,
    feeGranter?: string,
    signMode?: import("./outputv2/cosmos/tx/signing/v1beta1/signing").SignMode,
  ): Promise<Uint8Array> {
    if (!signMode) {
      signMode = (
        await import("./outputv2/cosmos/tx/signing/v1beta1/signing")
      ).SignMode.SIGN_MODE_DIRECT;
    }
  
    const authInfo = {
      signerInfos: makeSignerInfos(signers, signMode),
      fee: {
        amount: [...feeAmount],
        gasLimit: String(gasLimit),
        granter: feeGranter,
      },
    };
  
    const { AuthInfo } = await import("./outputv2/cosmos/tx/v1beta1/tx");
    return AuthInfo.encode(AuthInfo.fromPartial(authInfo)).finish();
  }
  /**
 * Create signer infos from the provided signers.
 *
 * This implementation does not support different signing modes for the different signers.
 */
function makeSignerInfos(
    signers: ReadonlyArray<{
      readonly pubkey: import("./outputv2/google/protobuf/any").Any;
      readonly sequence: number;
    }>,
    signMode: import("./outputv2/cosmos/tx/signing/v1beta1/signing").SignMode,
  ): import("./outputv2/cosmos/tx/v1beta1/tx").SignerInfo[] {
    return signers.map(
      ({
        pubkey,
        sequence,
      }): import("./outputv2/cosmos/tx/v1beta1/tx").SignerInfo => ({
        publicKey: pubkey,
        modeInfo: {
          single: { mode: signMode },
        },
        sequence: new Long(sequence),
      }),
    );
  }

  export interface Msg {
    // any will be some kind of request (e.g: )
    toProto(msg: any): Promise<ProtoMsg>;
    toAmino(msg: MsgSend): Promise<AminoMsg>;
  }
//---

async function signAmino(
    signer: AminoSigner,
    account: AccountData,
    messages: Msg[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
  ): Promise<import("./outputv2/cosmos/tx/v1beta1/tx").TxRaw> {

    let signMode = (
      await import("./outputv2/cosmos/tx/signing/v1beta1/signing")
    ).SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    if (typeof signer.getSignMode === "function") {
      signMode = await signer.getSignMode();
    }
    
    const msgs = messages
    const signDoc = makeSignDocAmino(
      [msgs as unknown as AminoMsg],
      fee,
      chainId,
      memo,
      accountNumber,
      sequence,
    );

    const { signature, signed } = await signer.signAmino(
      account.address,
      signDoc,
    );

    console.log(messages);
    

    const txBody = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: [messages as unknown as ProtoMsg],
        memo: memo,
      },
    };
    const txBodyBytes = await encodeTx(txBody);
    const signedGasLimit = Number(signed.fee.gas);
    const signedSequence = Number(signed.sequence);
    const pubkey = await encodePubkey(encodeSecp256k1Pubkey(account.pubkey));
    const signedAuthInfoBytes = await makeAuthInfoBytes(
      [{ pubkey, sequence: signedSequence }],
      signed.fee.amount,
      signedGasLimit,
      signed.fee.granter,
      signMode,
    );
    return (
      await import("./outputv2/cosmos/tx/v1beta1/tx")
    ).TxRaw.fromPartial({
      bodyBytes: txBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

const main = async () => {
    
    //query client
    const client = await osmosis.ClientFactory.createRPCQueryClient({
        // rpcEndpoint: 'https://grpc.testnet.secretsaturn.net'
        rpcEndpoint: 'https://juno-grpc-web.polkachu.com/'
        // rpcEndpoint: 'https://osmosis-grpc-web.polkachu.com/'
        // rpcEndpoint: 'http://localhost:1317'
    });
    // get signer data
    // const account = await client.cosmos.auth.v1beta1.account({
    //     // address: 'secret1wwp2e8hn70kqkkqcf2r4z2km7tse6nwdg96qlk',
        // address: 'juno1vjrx0lks65yefnsz4xk92vugda2z25esjfhlxa'
    //     // address: 'osmo19crd4fwzm9qtf5ln5l3e2vmquhevjwpr7uccsn'
    //     // address: 'cosmos1xpvhjypxz2p8t3zgwngq7k623r6allrp9xm2zw'
    //   });
    
    // console.log(account)
    // const baseAccount =
    //   account.account as import("./outputv2/cosmos/auth/v1beta1/auth").BaseAccount;
    // const signerData = {
    //   accountNumber: Number(baseAccount.accountNumber),
    //   sequence: Number(baseAccount.sequence),
    //   chainId: 'pulsar-2',
    //   // chainId: 'osmosis-1'
    // };

    const data = await client.cosmos.bank.v1beta1.allBalances({
        // address: 'secret1wwp2e8hn70kqkkqcf2r4z2km7tse6nwdg96qlk'
        address: 'juno1xa382g55fvyyp3rmdsk548qpdzmh6p37rmaa5t'
    });
    console.log('Before: ', data);

    // const mnemonic =
    // 'chef pigeon panic shadow tool picnic soda axis display element gadget finger';
    // const chain = chains.find(({ chain_name }) => chain_name === 'secretnetwork');
    // // console.log('chain: ', chain);
    
    // // get AminoSigner and then cast it into offlineWallet to broadcast later
    // const signer = await getOfflineSigner({
    //     mnemonic,
    //     chain
    // });

    // // console.log('offline signer: ', await signer.getAccounts());
    
    // //sign not working on offlineSigner
    // // const offlineSigner = await SigningStargateClient.offline(signer);

    // const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
    // const msg = send({
    //     amount: [
    //     {
    //         denom: 'uscrt',
    //         amount: '1000'
    //     }
    //     ],
    //     toAddress: 'secret1e8sw7zztd2nzgtxp6mc3fz4z8va2e4lewxspwg',
    //     fromAddress: 'secret1wwp2e8hn70kqkkqcf2r4z2km7tse6nwdg96qlk'
    // });

    // const fee = {
    //     amount: [
    //         {
    //             denom: 'uscrt',
    //             amount: '20000'
    //         }
    //         ],
    //         gas: '80000'
    // }
    // const account_data = await signer.getAccounts();
    
    // // still cannnot sign
    // // const signed_tx = await signAmino(signer, account_data[0], msg as any, fee, 'so tired', signerData);
    // // console.log(signed_tx);
    
    // // const res = await txClient.cosmos.bank.v1beta1.send(
    // //     {
    // //         amount: [
    // //             {
    // //                 denom: 'uscrt',
    // //                 amount: '1000'
    // //             }
    // //             ],
    // //             toAddress: 'secret1e8sw7zztd2nzgtxp6mc3fz4z8va2e4lewxspwg',
    // //             fromAddress: 'secret1wwp2e8hn70kqkkqcf2r4z2km7tse6nwdg96qlk'
    // //     }
    // // )

    // // const res = await client.cosmos.tx.v1beta1.broadcastTx(  
    // // )
    
    // // console.log(res);
    

}

main().then(() => {
    console.log("done");
})


import { LCDClient } from "@osmonauts/lcd";
import { Empty } from "../../../google/protobuf/empty";
import { KeySDKType } from "./msg";
import { QueryEncryptedSeedRequest, QueryEncryptedSeedResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.txKey = this.txKey.bind(this);
    this.registrationKey = this.registrationKey.bind(this);
    this.encryptedSeed = this.encryptedSeed.bind(this);
  }
  /* Returns the key used for transactions */


  async txKey(_params: google.protobuf.Empty = {}): Promise<KeySDKType> {
    const endpoint = `registration/v1beta1/tx-key`;
    return await this.req.get<KeySDKType>(endpoint);
  }
  /* Returns the key used for registration */


  async registrationKey(_params: google.protobuf.Empty = {}): Promise<KeySDKType> {
    const endpoint = `registration/v1beta1/registration-key`;
    return await this.req.get<KeySDKType>(endpoint);
  }
  /* Returns the encrypted seed for a registered node by public key */


  async encryptedSeed(params: QueryEncryptedSeedRequest): Promise<QueryEncryptedSeedResponseSDKType> {
    const endpoint = `registration/v1beta1/encrypted-seed/${params.pubKey}`;
    return await this.req.get<QueryEncryptedSeedResponseSDKType>(endpoint);
  }

}
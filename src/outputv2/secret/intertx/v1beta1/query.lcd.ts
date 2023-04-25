import { LCDClient } from "@osmonauts/lcd";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
  }
  /* QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair */


  async interchainAccountFromAddress(params: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType> {
    const endpoint = `mauth/interchain_account/owner/${params.owner}/connection/${params.connectionId}`;
    return await this.req.get<QueryInterchainAccountFromAddressResponseSDKType>(endpoint);
  }

}
import { LCDClient } from "@osmonauts/lcd";
import { QueryByContractAddressRequest, QueryContractInfoResponseSDKType, QueryByCodeIdRequest, QueryContractsByCodeIdResponseSDKType, QuerySecretContractRequest, QuerySecretContractResponseSDKType, QueryCodeResponseSDKType, QueryCodesResponseSDKType, QueryCodeHashResponseSDKType, QueryContractLabelResponseSDKType, QueryByLabelRequest, QueryContractAddressResponseSDKType } from "./query";
import { Empty } from "../../../google/protobuf/empty";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractsByCodeId = this.contractsByCodeId.bind(this);
    this.querySecretContract = this.querySecretContract.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.codeHashByContractAddress = this.codeHashByContractAddress.bind(this);
    this.codeHashByCodeId = this.codeHashByCodeId.bind(this);
    this.labelByAddress = this.labelByAddress.bind(this);
    this.addressByLabel = this.addressByLabel.bind(this);
  }
  /* Query contract info by address */


  async contractInfo(params: QueryByContractAddressRequest): Promise<QueryContractInfoResponseSDKType> {
    const endpoint = `compute/v1beta1/info/${params.contractAddress}`;
    return await this.req.get<QueryContractInfoResponseSDKType>(endpoint);
  }
  /* Query code info by id */


  async contractsByCodeId(params: QueryByCodeIdRequest): Promise<QueryContractsByCodeIdResponseSDKType> {
    const endpoint = `compute/v1beta1/contracts/${params.codeId}`;
    return await this.req.get<QueryContractsByCodeIdResponseSDKType>(endpoint);
  }
  /* Query secret contract */


  async querySecretContract(params: QuerySecretContractRequest): Promise<QuerySecretContractResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.query !== "undefined") {
      options.params.query = params.query;
    }

    const endpoint = `compute/v1beta1/query/${params.contractAddress}`;
    return await this.req.get<QuerySecretContractResponseSDKType>(endpoint, options);
  }
  /* Query a specific contract code by id */


  async code(params: QueryByCodeIdRequest): Promise<QueryCodeResponseSDKType> {
    const endpoint = `compute/v1beta1/code/${params.codeId}`;
    return await this.req.get<QueryCodeResponseSDKType>(endpoint);
  }
  /* Query all contract codes on-chain */


  async codes(_params: google.protobuf.Empty = {}): Promise<QueryCodesResponseSDKType> {
    const endpoint = `compute/v1beta1/codes`;
    return await this.req.get<QueryCodesResponseSDKType>(endpoint);
  }
  /* Query code hash by contract address */


  async codeHashByContractAddress(params: QueryByContractAddressRequest): Promise<QueryCodeHashResponseSDKType> {
    const endpoint = `compute/v1beta1/code_hash/by_contract_address/${params.contractAddress}`;
    return await this.req.get<QueryCodeHashResponseSDKType>(endpoint);
  }
  /* Query code hash by code id */


  async codeHashByCodeId(params: QueryByCodeIdRequest): Promise<QueryCodeHashResponseSDKType> {
    const endpoint = `compute/v1beta1/code_hash/by_code_id/${params.codeId}`;
    return await this.req.get<QueryCodeHashResponseSDKType>(endpoint);
  }
  /* Query contract label by address */


  async labelByAddress(params: QueryByContractAddressRequest): Promise<QueryContractLabelResponseSDKType> {
    const endpoint = `compute/v1beta1/label/${params.contractAddress}`;
    return await this.req.get<QueryContractLabelResponseSDKType>(endpoint);
  }
  /* Query contract address by label */


  async addressByLabel(params: QueryByLabelRequest): Promise<QueryContractAddressResponseSDKType> {
    const endpoint = `compute/v1beta1/contract_address/${params.label}`;
    return await this.req.get<QueryContractAddressResponseSDKType>(endpoint);
  }

}
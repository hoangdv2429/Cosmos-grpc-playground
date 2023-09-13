import { MsgEthereumTxResponse } from "./tx";
import * as fm from "../../../grpc-gateway";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
export class Query {
  /** Account queries an Ethereum account. */
  static account(request: QueryAccountRequest, initRequest?: fm.InitReq): Promise<QueryAccountResponse> {
    return fm.fetchReq(`/evmos/evm/v1/account/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** CosmosAccount queries an Ethereum account's Cosmos Address. */
  static cosmosAccount(request: QueryCosmosAccountRequest, initRequest?: fm.InitReq): Promise<QueryCosmosAccountResponse> {
    return fm.fetchReq(`/evmos/evm/v1/cosmos_account/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ValidatorAccount queries an Ethereum account's from a validator consensus
   * Address.
   */
  static validatorAccount(request: QueryValidatorAccountRequest, initRequest?: fm.InitReq): Promise<QueryValidatorAccountResponse> {
    return fm.fetchReq(`/evmos/evm/v1/validator_account/${request["cons_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["cons_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Balance queries the balance of a the EVM denomination for a single
   * EthAccount.
   */
  static balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse> {
    return fm.fetchReq(`/evmos/evm/v1/balances/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Storage queries the balance of all coins for a single account. */
  static storage(request: QueryStorageRequest, initRequest?: fm.InitReq): Promise<QueryStorageResponse> {
    return fm.fetchReq(`/evmos/evm/v1/storage/${request["address"]}/${request["key"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address", "key"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Code queries the balance of all coins for a single account. */
  static code(request: QueryCodeRequest, initRequest?: fm.InitReq): Promise<QueryCodeResponse> {
    return fm.fetchReq(`/evmos/evm/v1/codes/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params queries the parameters of x/evm module. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/evm/v1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** EthCall implements the `eth_call` rpc api */
  static ethCall(request: EthCallRequest, initRequest?: fm.InitReq): Promise<MsgEthereumTxResponse> {
    return fm.fetchReq(`/evmos/evm/v1/eth_call?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** EstimateGas implements the `eth_estimateGas` rpc api */
  static estimateGas(request: EthCallRequest, initRequest?: fm.InitReq): Promise<EstimateGasResponse> {
    return fm.fetchReq(`/evmos/evm/v1/estimate_gas?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TraceTx implements the `debug_traceTransaction` rpc api */
  static traceTx(request: QueryTraceTxRequest, initRequest?: fm.InitReq): Promise<QueryTraceTxResponse> {
    return fm.fetchReq(`/evmos/evm/v1/trace_tx?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
  static traceBlock(request: QueryTraceBlockRequest, initRequest?: fm.InitReq): Promise<QueryTraceBlockResponse> {
    return fm.fetchReq(`/evmos/evm/v1/trace_block?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * BaseFee queries the base fee of the parent block of the current block,
   * it's similar to feemarket module's method, but also checks london hardfork status.
   */
  static baseFee(request: QueryBaseFeeRequest, initRequest?: fm.InitReq): Promise<QueryBaseFeeResponse> {
    return fm.fetchReq(`/evmos/evm/v1/base_fee?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Account queries an Ethereum account. */
  async account(req: QueryAccountRequest, headers?: HeadersInit): Promise<QueryAccountResponse> {
    return Query.account(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** CosmosAccount queries an Ethereum account's Cosmos Address. */
  async cosmosAccount(req: QueryCosmosAccountRequest, headers?: HeadersInit): Promise<QueryCosmosAccountResponse> {
    return Query.cosmosAccount(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ValidatorAccount queries an Ethereum account's from a validator consensus
   * Address.
   */
  async validatorAccount(req: QueryValidatorAccountRequest, headers?: HeadersInit): Promise<QueryValidatorAccountResponse> {
    return Query.validatorAccount(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Balance queries the balance of a the EVM denomination for a single
   * EthAccount.
   */
  async balance(req: QueryBalanceRequest, headers?: HeadersInit): Promise<QueryBalanceResponse> {
    return Query.balance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Storage queries the balance of all coins for a single account. */
  async storage(req: QueryStorageRequest, headers?: HeadersInit): Promise<QueryStorageResponse> {
    return Query.storage(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Code queries the balance of all coins for a single account. */
  async code(req: QueryCodeRequest, headers?: HeadersInit): Promise<QueryCodeResponse> {
    return Query.code(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params queries the parameters of x/evm module. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** EthCall implements the `eth_call` rpc api */
  async ethCall(req: EthCallRequest, headers?: HeadersInit): Promise<MsgEthereumTxResponse> {
    return Query.ethCall(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** EstimateGas implements the `eth_estimateGas` rpc api */
  async estimateGas(req: EthCallRequest, headers?: HeadersInit): Promise<EstimateGasResponse> {
    return Query.estimateGas(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TraceTx implements the `debug_traceTransaction` rpc api */
  async traceTx(req: QueryTraceTxRequest, headers?: HeadersInit): Promise<QueryTraceTxResponse> {
    return Query.traceTx(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
  async traceBlock(req: QueryTraceBlockRequest, headers?: HeadersInit): Promise<QueryTraceBlockResponse> {
    return Query.traceBlock(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * BaseFee queries the base fee of the parent block of the current block,
   * it's similar to feemarket module's method, but also checks london hardfork status.
   */
  async baseFee(req: QueryBaseFeeRequest, headers?: HeadersInit): Promise<QueryBaseFeeResponse> {
    return Query.baseFee(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
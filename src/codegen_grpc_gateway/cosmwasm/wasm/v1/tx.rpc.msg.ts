import * as fm from "../../../grpc-gateway";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse } from "./tx";
export class Msg {
  /** StoreCode to submit Wasm code to the system */
  static storeCode(request: MsgStoreCode, initRequest?: fm.InitReq): Promise<MsgStoreCodeResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/storeCode`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * InstantiateContract creates a new smart contract instance for the given
   *  code id.
   */
  static instantiateContract(request: MsgInstantiateContract, initRequest?: fm.InitReq): Promise<MsgInstantiateContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/instantiateContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * InstantiateContract2 creates a new smart contract instance for the given
   *  code id with a predictable address
   */
  static instantiateContract2(request: MsgInstantiateContract2, initRequest?: fm.InitReq): Promise<MsgInstantiateContract2Response> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/instantiateContract2`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Execute submits the given message data to a smart contract */
  static executeContract(request: MsgExecuteContract, initRequest?: fm.InitReq): Promise<MsgExecuteContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/executeContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  static migrateContract(request: MsgMigrateContract, initRequest?: fm.InitReq): Promise<MsgMigrateContractResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/migrateContract`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateAdmin sets a new   admin for a smart contract */
  static updateAdmin(request: MsgUpdateAdmin, initRequest?: fm.InitReq): Promise<MsgUpdateAdminResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/updateAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** ClearAdmin removes any admin stored for a smart contract */
  static clearAdmin(request: MsgClearAdmin, initRequest?: fm.InitReq): Promise<MsgClearAdminResponse> {
    return fm.fetchReq(`/cosmwasm.wasm.v1/clearAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
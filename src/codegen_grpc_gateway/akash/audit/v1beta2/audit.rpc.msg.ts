import * as fm from "../../../grpc-gateway";
import { MsgSignProviderAttributes, MsgSignProviderAttributesResponse, MsgDeleteProviderAttributes, MsgDeleteProviderAttributesResponse } from "./audit";
export class Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  static signProviderAttributes(request: MsgSignProviderAttributes, initRequest?: fm.InitReq): Promise<MsgSignProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta2/signProviderAttributes`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  static deleteProviderAttributes(request: MsgDeleteProviderAttributes, initRequest?: fm.InitReq): Promise<MsgDeleteProviderAttributesResponse> {
    return fm.fetchReq(`/akash.audit.v1beta2/deleteProviderAttributes`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
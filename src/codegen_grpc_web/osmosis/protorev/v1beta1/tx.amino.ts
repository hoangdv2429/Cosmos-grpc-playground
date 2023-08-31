import { TokenPairArbRoutes, TokenPairArbRoutesSDKType } from "./protorev";
import { MsgSetHotRoutes, MsgSetHotRoutesSDKType, MsgSetDeveloperAccount, MsgSetDeveloperAccountSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
    aminoType: "osmosis/MsgSetHotRoutes",
    toAmino: MsgSetHotRoutes.toAmino,
    fromAmino: MsgSetHotRoutes.fromAmino
  },
  "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
    aminoType: "osmosis/MsgSetDeveloperAccount",
    toAmino: MsgSetDeveloperAccount.toAmino,
    fromAmino: MsgSetDeveloperAccount.fromAmino
  }
};
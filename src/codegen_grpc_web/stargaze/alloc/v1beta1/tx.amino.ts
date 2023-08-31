import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType } from "./tx";
export const AminoConverter = {
  "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
    aminoType: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
    toAmino: MsgCreateVestingAccount.toAmino,
    fromAmino: MsgCreateVestingAccount.fromAmino
  }
};
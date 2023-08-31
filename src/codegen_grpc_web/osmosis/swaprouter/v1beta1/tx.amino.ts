import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/swaprouter/swap-exact-amount-in",
    toAmino: MsgSwapExactAmountIn.toAmino,
    fromAmino: MsgSwapExactAmountIn.fromAmino
  },
  "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/swaprouter/swap-exact-amount-out",
    toAmino: MsgSwapExactAmountOut.toAmino,
    fromAmino: MsgSwapExactAmountOut.fromAmino
  }
};
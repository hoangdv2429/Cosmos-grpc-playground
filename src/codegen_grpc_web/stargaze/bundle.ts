import * as _264 from "./mint/v1beta1/genesis";
import * as _265 from "./mint/v1beta1/mint";
import * as _266 from "./mint/v1beta1/query";
import * as _495 from "./mint/v1beta1/query.lcd";
import * as _496 from "./mint/v1beta1/query.rpc.Query";
import * as _517 from "./lcd";
import * as _518 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._264,
      ..._265,
      ..._266,
      ..._495,
      ..._496
    };
  }
  export const ClientFactory = {
    ..._517,
    ..._518
  };
}
import * as _265 from "./mint/v1beta1/genesis";
import * as _266 from "./mint/v1beta1/mint";
import * as _267 from "./mint/v1beta1/query";
import * as _496 from "./mint/v1beta1/query.lcd";
import * as _497 from "./mint/v1beta1/query.rpc.Query";
import * as _518 from "./lcd";
import * as _519 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = { ..._265,
      ..._266,
      ..._267,
      ..._496,
      ..._497
    };
  }
  export const ClientFactory = { ..._518,
    ..._519
  };
}
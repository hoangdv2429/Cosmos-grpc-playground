import * as _304 from "./mint/v1beta1/genesis";
import * as _305 from "./mint/v1beta1/mint";
import * as _306 from "./mint/v1beta1/query";
import * as _570 from "./mint/v1beta1/query.lcd";
import * as _571 from "./mint/v1beta1/query.rpc.Query";
import * as _598 from "./lcd";
import * as _599 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._304,
      ..._305,
      ..._306,
      ..._570,
      ..._571
    };
  }
  export const ClientFactory = {
    ..._598,
    ..._599
  };
}
import * as _289 from "./mint/v1beta1/genesis";
import * as _290 from "./mint/v1beta1/mint";
import * as _291 from "./mint/v1beta1/query";
import * as _545 from "./mint/v1beta1/query.lcd";
import * as _546 from "./mint/v1beta1/query.rpc.Query";
import * as _570 from "./lcd";
import * as _571 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._289,
      ..._290,
      ..._291,
      ..._545,
      ..._546
    };
  }
  export const ClientFactory = {
    ..._570,
    ..._571
  };
}
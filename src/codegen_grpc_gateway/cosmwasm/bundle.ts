import * as _149 from "./wasm/v1/authz";
import * as _150 from "./wasm/v1/genesis";
import * as _151 from "./wasm/v1/ibc";
import * as _152 from "./wasm/v1/proposal";
import * as _153 from "./wasm/v1/query";
import * as _154 from "./wasm/v1/tx";
import * as _155 from "./wasm/v1/types";
import * as _420 from "./wasm/v1/tx.amino";
import * as _421 from "./wasm/v1/tx.registry";
import * as _422 from "./wasm/v1/query.lcd";
import * as _423 from "./wasm/v1/query.rpc.Query";
import * as _424 from "./wasm/v1/tx.rpc.msg";
import * as _553 from "./lcd";
import * as _554 from "./rpc.query";
import * as _555 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._420,
      ..._421,
      ..._422,
      ..._423,
      ..._424
    };
  }
  export const ClientFactory = {
    ..._553,
    ..._554,
    ..._555
  };
}
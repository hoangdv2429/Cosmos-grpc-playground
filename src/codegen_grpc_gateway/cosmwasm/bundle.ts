import * as _149 from "./wasm/v1/authz";
import * as _150 from "./wasm/v1/genesis";
import * as _151 from "./wasm/v1/ibc";
import * as _152 from "./wasm/v1/proposal";
import * as _153 from "./wasm/v1/query";
import * as _154 from "./wasm/v1/tx";
import * as _155 from "./wasm/v1/types";
import * as _435 from "./wasm/v1/tx.amino";
import * as _436 from "./wasm/v1/tx.registry";
import * as _437 from "./wasm/v1/query.lcd";
import * as _438 from "./wasm/v1/query.rpc.Query";
import * as _439 from "./wasm/v1/tx.rpc.msg";
import * as _578 from "./lcd";
import * as _579 from "./rpc.query";
import * as _580 from "./rpc.tx";
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
      ..._435,
      ..._436,
      ..._437,
      ..._438,
      ..._439
    };
  }
  export const ClientFactory = {
    ..._578,
    ..._579,
    ..._580
  };
}
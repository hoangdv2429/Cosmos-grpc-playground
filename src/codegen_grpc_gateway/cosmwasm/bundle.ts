import * as _149 from "./wasm/v1/authz";
import * as _150 from "./wasm/v1/genesis";
import * as _151 from "./wasm/v1/ibc";
import * as _152 from "./wasm/v1/proposal";
import * as _153 from "./wasm/v1/query";
import * as _154 from "./wasm/v1/tx";
import * as _155 from "./wasm/v1/types";
import * as _396 from "./wasm/v1/tx.amino";
import * as _397 from "./wasm/v1/tx.registry";
import * as _398 from "./wasm/v1/query.lcd";
import * as _399 from "./wasm/v1/query.rpc.Query";
import * as _400 from "./wasm/v1/tx.rpc.msg";
import * as _504 from "./lcd";
import * as _505 from "./rpc.query";
import * as _506 from "./rpc.tx";
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
      ..._396,
      ..._397,
      ..._398,
      ..._399,
      ..._400
    };
  }
  export const ClientFactory = {
    ..._504,
    ..._505,
    ..._506
  };
}
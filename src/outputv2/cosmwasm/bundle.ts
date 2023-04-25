import * as _147 from "./wasm/v1/genesis";
import * as _148 from "./wasm/v1/ibc";
import * as _149 from "./wasm/v1/proposal";
import * as _150 from "./wasm/v1/query";
import * as _151 from "./wasm/v1/tx";
import * as _152 from "./wasm/v1/types";
import * as _444 from "./wasm/v1/tx.amino";
import * as _445 from "./wasm/v1/tx.registry";
import * as _446 from "./wasm/v1/query.lcd";
import * as _447 from "./wasm/v1/query.rpc.Query";
import * as _448 from "./wasm/v1/tx.rpc.msg";
import * as _560 from "./lcd";
import * as _561 from "./rpc.query";
import * as _562 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._444,
      ..._445,
      ..._446,
      ..._447,
      ..._448
    };
  }
  export const ClientFactory = { ..._560,
    ..._561,
    ..._562
  };
}
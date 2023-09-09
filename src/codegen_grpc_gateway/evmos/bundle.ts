import * as _156 from "./claims/v1/claims";
import * as _157 from "./claims/v1/genesis";
import * as _158 from "./claims/v1/query";
import * as _159 from "./epochs/v1/genesis";
import * as _160 from "./epochs/v1/query";
import * as _161 from "./erc20/v1/erc20";
import * as _162 from "./erc20/v1/genesis";
import * as _163 from "./erc20/v1/query";
import * as _164 from "./erc20/v1/tx";
import * as _165 from "./fees/v1/fees";
import * as _166 from "./fees/v1/genesis";
import * as _167 from "./fees/v1/query";
import * as _168 from "./fees/v1/tx";
import * as _169 from "./incentives/v1/genesis";
import * as _170 from "./incentives/v1/incentives";
import * as _171 from "./incentives/v1/query";
import * as _172 from "./inflation/v1/genesis";
import * as _173 from "./inflation/v1/inflation";
import * as _174 from "./inflation/v1/query";
import * as _175 from "./recovery/v1/genesis";
import * as _176 from "./recovery/v1/query";
import * as _177 from "./vesting/v1/query";
import * as _178 from "./vesting/v1/tx";
import * as _179 from "./vesting/v1/vesting";
import * as _425 from "./erc20/v1/tx.amino";
import * as _426 from "./fees/v1/tx.amino";
import * as _427 from "./vesting/v1/tx.amino";
import * as _428 from "./erc20/v1/tx.registry";
import * as _429 from "./fees/v1/tx.registry";
import * as _430 from "./vesting/v1/tx.registry";
import * as _431 from "./claims/v1/query.lcd";
import * as _432 from "./epochs/v1/query.lcd";
import * as _433 from "./erc20/v1/query.lcd";
import * as _434 from "./fees/v1/query.lcd";
import * as _435 from "./incentives/v1/query.lcd";
import * as _436 from "./inflation/v1/query.lcd";
import * as _437 from "./recovery/v1/query.lcd";
import * as _438 from "./vesting/v1/query.lcd";
import * as _439 from "./claims/v1/query.rpc.Query";
import * as _440 from "./epochs/v1/query.rpc.Query";
import * as _441 from "./erc20/v1/query.rpc.Query";
import * as _442 from "./fees/v1/query.rpc.Query";
import * as _443 from "./incentives/v1/query.rpc.Query";
import * as _444 from "./inflation/v1/query.rpc.Query";
import * as _445 from "./recovery/v1/query.rpc.Query";
import * as _446 from "./vesting/v1/query.rpc.Query";
import * as _447 from "./erc20/v1/tx.rpc.msg";
import * as _448 from "./fees/v1/tx.rpc.msg";
import * as _449 from "./vesting/v1/tx.rpc.msg";
import * as _556 from "./lcd";
import * as _557 from "./rpc.query";
import * as _558 from "./rpc.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._431,
      ..._439
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._159,
      ..._160,
      ..._432,
      ..._440
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._425,
      ..._428,
      ..._433,
      ..._441,
      ..._447
    };
  }
  export namespace fees {
    export const v1 = {
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._426,
      ..._429,
      ..._434,
      ..._442,
      ..._448
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._435,
      ..._443
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._172,
      ..._173,
      ..._174,
      ..._436,
      ..._444
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._175,
      ..._176,
      ..._437,
      ..._445
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._177,
      ..._178,
      ..._179,
      ..._427,
      ..._430,
      ..._438,
      ..._446,
      ..._449
    };
  }
  export const ClientFactory = {
    ..._556,
    ..._557,
    ..._558
  };
}
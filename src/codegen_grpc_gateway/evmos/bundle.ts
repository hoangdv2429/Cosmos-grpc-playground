import * as _171 from "./claims/v1/claims";
import * as _172 from "./claims/v1/genesis";
import * as _173 from "./claims/v1/query";
import * as _174 from "./epochs/v1/genesis";
import * as _175 from "./epochs/v1/query";
import * as _176 from "./erc20/v1/erc20";
import * as _177 from "./erc20/v1/genesis";
import * as _178 from "./erc20/v1/query";
import * as _179 from "./erc20/v1/tx";
import * as _180 from "./fees/v1/fees";
import * as _181 from "./fees/v1/genesis";
import * as _182 from "./fees/v1/query";
import * as _183 from "./fees/v1/tx";
import * as _184 from "./incentives/v1/genesis";
import * as _185 from "./incentives/v1/incentives";
import * as _186 from "./incentives/v1/query";
import * as _187 from "./inflation/v1/genesis";
import * as _188 from "./inflation/v1/inflation";
import * as _189 from "./inflation/v1/query";
import * as _190 from "./recovery/v1/genesis";
import * as _191 from "./recovery/v1/query";
import * as _192 from "./vesting/v1/query";
import * as _193 from "./vesting/v1/tx";
import * as _194 from "./vesting/v1/vesting";
import * as _450 from "./erc20/v1/tx.amino";
import * as _451 from "./fees/v1/tx.amino";
import * as _452 from "./vesting/v1/tx.amino";
import * as _453 from "./erc20/v1/tx.registry";
import * as _454 from "./fees/v1/tx.registry";
import * as _455 from "./vesting/v1/tx.registry";
import * as _456 from "./claims/v1/query.lcd";
import * as _457 from "./epochs/v1/query.lcd";
import * as _458 from "./erc20/v1/query.lcd";
import * as _459 from "./fees/v1/query.lcd";
import * as _460 from "./incentives/v1/query.lcd";
import * as _461 from "./inflation/v1/query.lcd";
import * as _462 from "./recovery/v1/query.lcd";
import * as _463 from "./vesting/v1/query.lcd";
import * as _464 from "./claims/v1/query.rpc.Query";
import * as _465 from "./epochs/v1/query.rpc.Query";
import * as _466 from "./erc20/v1/query.rpc.Query";
import * as _467 from "./fees/v1/query.rpc.Query";
import * as _468 from "./incentives/v1/query.rpc.Query";
import * as _469 from "./inflation/v1/query.rpc.Query";
import * as _470 from "./recovery/v1/query.rpc.Query";
import * as _471 from "./vesting/v1/query.rpc.Query";
import * as _472 from "./erc20/v1/tx.rpc.msg";
import * as _473 from "./fees/v1/tx.rpc.msg";
import * as _474 from "./vesting/v1/tx.rpc.msg";
import * as _584 from "./lcd";
import * as _585 from "./rpc.query";
import * as _586 from "./rpc.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._456,
      ..._464
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._174,
      ..._175,
      ..._457,
      ..._465
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._450,
      ..._453,
      ..._458,
      ..._466,
      ..._472
    };
  }
  export namespace fees {
    export const v1 = {
      ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._451,
      ..._454,
      ..._459,
      ..._467,
      ..._473
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._184,
      ..._185,
      ..._186,
      ..._460,
      ..._468
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._187,
      ..._188,
      ..._189,
      ..._461,
      ..._469
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._190,
      ..._191,
      ..._462,
      ..._470
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._452,
      ..._455,
      ..._463,
      ..._471,
      ..._474
    };
  }
  export const ClientFactory = {
    ..._584,
    ..._585,
    ..._586
  };
}
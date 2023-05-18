import * as _153 from "./claims/v1/claims";
import * as _154 from "./claims/v1/genesis";
import * as _155 from "./claims/v1/query";
import * as _156 from "./epochs/v1/genesis";
import * as _157 from "./epochs/v1/query";
import * as _158 from "./erc20/v1/erc20";
import * as _159 from "./erc20/v1/genesis";
import * as _160 from "./erc20/v1/query";
import * as _161 from "./erc20/v1/tx";
import * as _162 from "./fees/v1/fees";
import * as _163 from "./fees/v1/genesis";
import * as _164 from "./fees/v1/query";
import * as _165 from "./fees/v1/tx";
import * as _166 from "./incentives/v1/genesis";
import * as _167 from "./incentives/v1/incentives";
import * as _168 from "./incentives/v1/query";
import * as _169 from "./inflation/v1/genesis";
import * as _170 from "./inflation/v1/inflation";
import * as _171 from "./inflation/v1/query";
import * as _172 from "./recovery/v1/genesis";
import * as _173 from "./recovery/v1/query";
import * as _174 from "./vesting/v1/query";
import * as _175 from "./vesting/v1/tx";
import * as _176 from "./vesting/v1/vesting";
import * as _449 from "./erc20/v1/tx.amino";
import * as _450 from "./fees/v1/tx.amino";
import * as _451 from "./vesting/v1/tx.amino";
import * as _452 from "./erc20/v1/tx.registry";
import * as _453 from "./fees/v1/tx.registry";
import * as _454 from "./vesting/v1/tx.registry";
import * as _455 from "./claims/v1/query.lcd";
import * as _456 from "./epochs/v1/query.lcd";
import * as _457 from "./erc20/v1/query.lcd";
import * as _458 from "./fees/v1/query.lcd";
import * as _459 from "./incentives/v1/query.lcd";
import * as _460 from "./inflation/v1/query.lcd";
import * as _461 from "./recovery/v1/query.lcd";
import * as _462 from "./vesting/v1/query.lcd";
import * as _463 from "./claims/v1/query.rpc.Query";
import * as _464 from "./epochs/v1/query.rpc.Query";
import * as _465 from "./erc20/v1/query.rpc.Query";
import * as _466 from "./fees/v1/query.rpc.Query";
import * as _467 from "./incentives/v1/query.rpc.Query";
import * as _468 from "./inflation/v1/query.rpc.Query";
import * as _469 from "./recovery/v1/query.rpc.Query";
import * as _470 from "./vesting/v1/query.rpc.Query";
import * as _471 from "./erc20/v1/tx.rpc.msg";
import * as _472 from "./fees/v1/tx.rpc.msg";
import * as _473 from "./vesting/v1/tx.rpc.msg";
import * as _563 from "./lcd";
import * as _564 from "./rpc.query";
import * as _565 from "./rpc.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = { ..._153,
      ..._154,
      ..._155,
      ..._455,
      ..._463
    };
  }
  export namespace epochs {
    export const v1 = { ..._156,
      ..._157,
      ..._456,
      ..._464
    };
  }
  export namespace erc20 {
    export const v1 = { ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._449,
      ..._452,
      ..._457,
      ..._465,
      ..._471
    };
  }
  export namespace fees {
    export const v1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._450,
      ..._453,
      ..._458,
      ..._466,
      ..._472
    };
  }
  export namespace incentives {
    export const v1 = { ..._166,
      ..._167,
      ..._168,
      ..._459,
      ..._467
    };
  }
  export namespace inflation {
    export const v1 = { ..._169,
      ..._170,
      ..._171,
      ..._460,
      ..._468
    };
  }
  export namespace recovery {
    export const v1 = { ..._172,
      ..._173,
      ..._461,
      ..._469
    };
  }
  export namespace vesting {
    export const v1 = { ..._174,
      ..._175,
      ..._176,
      ..._451,
      ..._454,
      ..._462,
      ..._470,
      ..._473
    };
  }
  export const ClientFactory = { ..._563,
    ..._564,
    ..._565
  };
}
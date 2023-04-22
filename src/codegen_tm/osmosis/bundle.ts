import * as _192 from "./downtime-detector/v1beta1/downtime_duration";
import * as _193 from "./downtime-detector/v1beta1/genesis";
import * as _194 from "./downtime-detector/v1beta1/query";
import * as _195 from "./epochs/genesis";
import * as _196 from "./epochs/query";
import * as _197 from "./gamm/pool-models/balancer/balancerPool";
import * as _198 from "./gamm/v1beta1/genesis";
import * as _199 from "./gamm/v1beta1/query";
import * as _200 from "./gamm/v1beta1/tx";
import * as _201 from "./gamm/pool-models/balancer/tx/tx";
import * as _202 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _203 from "./gamm/pool-models/stableswap/tx";
import * as _204 from "./gamm/v2/query";
import * as _205 from "./ibc-rate-limit/v1beta1/params";
import * as _206 from "./ibc-rate-limit/v1beta1/query";
import * as _207 from "./incentives/gauge";
import * as _208 from "./incentives/genesis";
import * as _209 from "./incentives/params";
import * as _210 from "./incentives/query";
import * as _211 from "./incentives/tx";
import * as _212 from "./lockup/genesis";
import * as _213 from "./lockup/lock";
import * as _214 from "./lockup/params";
import * as _215 from "./lockup/query";
import * as _216 from "./lockup/tx";
import * as _217 from "./mint/v1beta1/genesis";
import * as _218 from "./mint/v1beta1/mint";
import * as _219 from "./mint/v1beta1/query";
import * as _220 from "./pool-incentives/v1beta1/genesis";
import * as _221 from "./pool-incentives/v1beta1/gov";
import * as _222 from "./pool-incentives/v1beta1/incentives";
import * as _223 from "./pool-incentives/v1beta1/query";
import * as _224 from "./protorev/v1beta1/genesis";
import * as _225 from "./protorev/v1beta1/gov";
import * as _226 from "./protorev/v1beta1/params";
import * as _227 from "./protorev/v1beta1/protorev";
import * as _228 from "./protorev/v1beta1/query";
import * as _229 from "./protorev/v1beta1/tx";
import * as _230 from "./sumtree/v1beta1/tree";
import * as _231 from "./superfluid/genesis";
import * as _232 from "./superfluid/params";
import * as _233 from "./superfluid/query";
import * as _234 from "./superfluid/superfluid";
import * as _235 from "./superfluid/tx";
import * as _236 from "./swaprouter/v1beta1/genesis";
import * as _237 from "./swaprouter/v1beta1/module_route";
import * as _238 from "./swaprouter/v1beta1/query";
import * as _239 from "./swaprouter/v1beta1/swap_route";
import * as _240 from "./swaprouter/v1beta1/tx";
import * as _241 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _242 from "./tokenfactory/v1beta1/genesis";
import * as _243 from "./tokenfactory/v1beta1/params";
import * as _244 from "./tokenfactory/v1beta1/query";
import * as _245 from "./tokenfactory/v1beta1/tx";
import * as _246 from "./twap/v1beta1/genesis";
import * as _247 from "./twap/v1beta1/query";
import * as _248 from "./twap/v1beta1/twap_record";
import * as _249 from "./txfees/v1beta1/feetoken";
import * as _250 from "./txfees/v1beta1/genesis";
import * as _251 from "./txfees/v1beta1/gov";
import * as _252 from "./txfees/v1beta1/query";
import * as _253 from "./valset-pref/v1beta1/query";
import * as _254 from "./valset-pref/v1beta1/state";
import * as _255 from "./valset-pref/v1beta1/tx";
import * as _424 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _425 from "./gamm/pool-models/stableswap/tx.amino";
import * as _426 from "./gamm/v1beta1/tx.amino";
import * as _427 from "./incentives/tx.amino";
import * as _428 from "./lockup/tx.amino";
import * as _429 from "./protorev/v1beta1/tx.amino";
import * as _430 from "./superfluid/tx.amino";
import * as _431 from "./swaprouter/v1beta1/tx.amino";
import * as _432 from "./tokenfactory/v1beta1/tx.amino";
import * as _433 from "./valset-pref/v1beta1/tx.amino";
import * as _434 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _435 from "./gamm/pool-models/stableswap/tx.registry";
import * as _436 from "./gamm/v1beta1/tx.registry";
import * as _437 from "./incentives/tx.registry";
import * as _438 from "./lockup/tx.registry";
import * as _439 from "./protorev/v1beta1/tx.registry";
import * as _440 from "./superfluid/tx.registry";
import * as _441 from "./swaprouter/v1beta1/tx.registry";
import * as _442 from "./tokenfactory/v1beta1/tx.registry";
import * as _443 from "./valset-pref/v1beta1/tx.registry";
import * as _444 from "./downtime-detector/v1beta1/query.lcd";
import * as _445 from "./epochs/query.lcd";
import * as _446 from "./gamm/v1beta1/query.lcd";
import * as _447 from "./gamm/v2/query.lcd";
import * as _448 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _449 from "./incentives/query.lcd";
import * as _450 from "./lockup/query.lcd";
import * as _451 from "./mint/v1beta1/query.lcd";
import * as _452 from "./pool-incentives/v1beta1/query.lcd";
import * as _453 from "./protorev/v1beta1/query.lcd";
import * as _454 from "./superfluid/query.lcd";
import * as _455 from "./swaprouter/v1beta1/query.lcd";
import * as _456 from "./tokenfactory/v1beta1/query.lcd";
import * as _457 from "./twap/v1beta1/query.lcd";
import * as _458 from "./txfees/v1beta1/query.lcd";
import * as _459 from "./valset-pref/v1beta1/query.lcd";
import * as _460 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _461 from "./epochs/query.rpc.Query";
import * as _462 from "./gamm/v1beta1/query.rpc.Query";
import * as _463 from "./gamm/v2/query.rpc.Query";
import * as _464 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _465 from "./incentives/query.rpc.Query";
import * as _466 from "./lockup/query.rpc.Query";
import * as _467 from "./mint/v1beta1/query.rpc.Query";
import * as _468 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _469 from "./protorev/v1beta1/query.rpc.Query";
import * as _470 from "./superfluid/query.rpc.Query";
import * as _471 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _472 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _473 from "./twap/v1beta1/query.rpc.Query";
import * as _474 from "./txfees/v1beta1/query.rpc.Query";
import * as _475 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _476 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _477 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _478 from "./gamm/v1beta1/tx.rpc.msg";
import * as _479 from "./incentives/tx.rpc.msg";
import * as _480 from "./lockup/tx.rpc.msg";
import * as _481 from "./protorev/v1beta1/tx.rpc.msg";
import * as _482 from "./superfluid/tx.rpc.msg";
import * as _483 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _484 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _485 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _512 from "./lcd";
import * as _513 from "./rpc.query";
import * as _514 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = { ..._192,
      ..._193,
      ..._194,
      ..._444,
      ..._460
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._195,
      ..._196,
      ..._445,
      ..._461
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._426,
      ..._436,
      ..._446,
      ..._462,
      ..._478
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._201,
          ..._424,
          ..._434,
          ..._476
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._202,
          ..._203,
          ..._425,
          ..._435,
          ..._477
        };
      }
    }
    export const v2 = { ..._204,
      ..._447,
      ..._463
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._205,
      ..._206,
      ..._448,
      ..._464
    };
  }
  export const incentives = { ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
    ..._427,
    ..._437,
    ..._449,
    ..._465,
    ..._479
  };
  export const lockup = { ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._428,
    ..._438,
    ..._450,
    ..._466,
    ..._480
  };
  export namespace mint {
    export const v1beta1 = { ..._217,
      ..._218,
      ..._219,
      ..._451,
      ..._467
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._452,
      ..._468
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._429,
      ..._439,
      ..._453,
      ..._469,
      ..._481
    };
  }
  export namespace store {
    export const v1beta1 = { ..._230
    };
  }
  export const superfluid = { ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._430,
    ..._440,
    ..._454,
    ..._470,
    ..._482
  };
  export namespace swaprouter {
    export const v1beta1 = { ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._431,
      ..._441,
      ..._455,
      ..._471,
      ..._483
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = { ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._432,
      ..._442,
      ..._456,
      ..._472,
      ..._484
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._246,
      ..._247,
      ..._248,
      ..._457,
      ..._473
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._458,
      ..._474
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._253,
      ..._254,
      ..._255,
      ..._433,
      ..._443,
      ..._459,
      ..._475,
      ..._485
    };
  }
  export const ClientFactory = { ..._512,
    ..._513,
    ..._514
  };
}
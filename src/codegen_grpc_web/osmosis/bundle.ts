import * as _191 from "./downtime-detector/v1beta1/downtime_duration";
import * as _192 from "./downtime-detector/v1beta1/genesis";
import * as _193 from "./downtime-detector/v1beta1/query";
import * as _194 from "./epochs/genesis";
import * as _195 from "./epochs/query";
import * as _196 from "./gamm/pool-models/balancer/balancerPool";
import * as _197 from "./gamm/v1beta1/genesis";
import * as _198 from "./gamm/v1beta1/query";
import * as _199 from "./gamm/v1beta1/tx";
import * as _200 from "./gamm/pool-models/balancer/tx/tx";
import * as _201 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _202 from "./gamm/pool-models/stableswap/tx";
import * as _203 from "./gamm/v2/query";
import * as _204 from "./ibc-rate-limit/v1beta1/params";
import * as _205 from "./ibc-rate-limit/v1beta1/query";
import * as _206 from "./incentives/gauge";
import * as _207 from "./incentives/genesis";
import * as _208 from "./incentives/params";
import * as _209 from "./incentives/query";
import * as _210 from "./incentives/tx";
import * as _211 from "./lockup/genesis";
import * as _212 from "./lockup/lock";
import * as _213 from "./lockup/params";
import * as _214 from "./lockup/query";
import * as _215 from "./lockup/tx";
import * as _216 from "./mint/v1beta1/genesis";
import * as _217 from "./mint/v1beta1/mint";
import * as _218 from "./mint/v1beta1/query";
import * as _219 from "./pool-incentives/v1beta1/genesis";
import * as _220 from "./pool-incentives/v1beta1/gov";
import * as _221 from "./pool-incentives/v1beta1/incentives";
import * as _222 from "./pool-incentives/v1beta1/query";
import * as _223 from "./protorev/v1beta1/genesis";
import * as _224 from "./protorev/v1beta1/gov";
import * as _225 from "./protorev/v1beta1/params";
import * as _226 from "./protorev/v1beta1/protorev";
import * as _227 from "./protorev/v1beta1/query";
import * as _228 from "./protorev/v1beta1/tx";
import * as _229 from "./sumtree/v1beta1/tree";
import * as _230 from "./superfluid/genesis";
import * as _231 from "./superfluid/params";
import * as _232 from "./superfluid/query";
import * as _233 from "./superfluid/superfluid";
import * as _234 from "./superfluid/tx";
import * as _235 from "./swaprouter/v1beta1/genesis";
import * as _236 from "./swaprouter/v1beta1/module_route";
import * as _237 from "./swaprouter/v1beta1/query";
import * as _238 from "./swaprouter/v1beta1/swap_route";
import * as _239 from "./swaprouter/v1beta1/tx";
import * as _240 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _241 from "./tokenfactory/v1beta1/genesis";
import * as _242 from "./tokenfactory/v1beta1/params";
import * as _243 from "./tokenfactory/v1beta1/query";
import * as _244 from "./tokenfactory/v1beta1/tx";
import * as _245 from "./twap/v1beta1/genesis";
import * as _246 from "./twap/v1beta1/query";
import * as _247 from "./twap/v1beta1/twap_record";
import * as _248 from "./txfees/v1beta1/feetoken";
import * as _249 from "./txfees/v1beta1/genesis";
import * as _250 from "./txfees/v1beta1/gov";
import * as _251 from "./txfees/v1beta1/query";
import * as _252 from "./valset-pref/v1beta1/query";
import * as _253 from "./valset-pref/v1beta1/state";
import * as _254 from "./valset-pref/v1beta1/tx";
import * as _423 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _424 from "./gamm/pool-models/stableswap/tx.amino";
import * as _425 from "./gamm/v1beta1/tx.amino";
import * as _426 from "./incentives/tx.amino";
import * as _427 from "./lockup/tx.amino";
import * as _428 from "./protorev/v1beta1/tx.amino";
import * as _429 from "./superfluid/tx.amino";
import * as _430 from "./swaprouter/v1beta1/tx.amino";
import * as _431 from "./tokenfactory/v1beta1/tx.amino";
import * as _432 from "./valset-pref/v1beta1/tx.amino";
import * as _433 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _434 from "./gamm/pool-models/stableswap/tx.registry";
import * as _435 from "./gamm/v1beta1/tx.registry";
import * as _436 from "./incentives/tx.registry";
import * as _437 from "./lockup/tx.registry";
import * as _438 from "./protorev/v1beta1/tx.registry";
import * as _439 from "./superfluid/tx.registry";
import * as _440 from "./swaprouter/v1beta1/tx.registry";
import * as _441 from "./tokenfactory/v1beta1/tx.registry";
import * as _442 from "./valset-pref/v1beta1/tx.registry";
import * as _443 from "./downtime-detector/v1beta1/query.lcd";
import * as _444 from "./epochs/query.lcd";
import * as _445 from "./gamm/v1beta1/query.lcd";
import * as _446 from "./gamm/v2/query.lcd";
import * as _447 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _448 from "./incentives/query.lcd";
import * as _449 from "./lockup/query.lcd";
import * as _450 from "./mint/v1beta1/query.lcd";
import * as _451 from "./pool-incentives/v1beta1/query.lcd";
import * as _452 from "./protorev/v1beta1/query.lcd";
import * as _453 from "./superfluid/query.lcd";
import * as _454 from "./swaprouter/v1beta1/query.lcd";
import * as _455 from "./tokenfactory/v1beta1/query.lcd";
import * as _456 from "./twap/v1beta1/query.lcd";
import * as _457 from "./txfees/v1beta1/query.lcd";
import * as _458 from "./valset-pref/v1beta1/query.lcd";
import * as _459 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _460 from "./epochs/query.rpc.Query";
import * as _461 from "./gamm/v1beta1/query.rpc.Query";
import * as _462 from "./gamm/v2/query.rpc.Query";
import * as _463 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _464 from "./incentives/query.rpc.Query";
import * as _465 from "./lockup/query.rpc.Query";
import * as _466 from "./mint/v1beta1/query.rpc.Query";
import * as _467 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _468 from "./protorev/v1beta1/query.rpc.Query";
import * as _469 from "./superfluid/query.rpc.Query";
import * as _470 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _471 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _472 from "./twap/v1beta1/query.rpc.Query";
import * as _473 from "./txfees/v1beta1/query.rpc.Query";
import * as _474 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _475 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _476 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _477 from "./gamm/v1beta1/tx.rpc.msg";
import * as _478 from "./incentives/tx.rpc.msg";
import * as _479 from "./lockup/tx.rpc.msg";
import * as _480 from "./protorev/v1beta1/tx.rpc.msg";
import * as _481 from "./superfluid/tx.rpc.msg";
import * as _482 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _483 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _484 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _511 from "./lcd";
import * as _512 from "./rpc.query";
import * as _513 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._191,
      ..._192,
      ..._193,
      ..._443,
      ..._459
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._194,
      ..._195,
      ..._444,
      ..._460
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._425,
      ..._435,
      ..._445,
      ..._461,
      ..._477
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._200,
          ..._423,
          ..._433,
          ..._475
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._201,
          ..._202,
          ..._424,
          ..._434,
          ..._476
        };
      }
    }
    export const v2 = {
      ..._203,
      ..._446,
      ..._462
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._204,
      ..._205,
      ..._447,
      ..._463
    };
  }
  export const incentives = {
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._426,
    ..._436,
    ..._448,
    ..._464,
    ..._478
  };
  export const lockup = {
    ..._211,
    ..._212,
    ..._213,
    ..._214,
    ..._215,
    ..._427,
    ..._437,
    ..._449,
    ..._465,
    ..._479
  };
  export namespace mint {
    export const v1beta1 = {
      ..._216,
      ..._217,
      ..._218,
      ..._450,
      ..._466
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._451,
      ..._467
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._428,
      ..._438,
      ..._452,
      ..._468,
      ..._480
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._229
    };
  }
  export const superfluid = {
    ..._230,
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._429,
    ..._439,
    ..._453,
    ..._469,
    ..._481
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._430,
      ..._440,
      ..._454,
      ..._470,
      ..._482
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._431,
      ..._441,
      ..._455,
      ..._471,
      ..._483
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._245,
      ..._246,
      ..._247,
      ..._456,
      ..._472
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._457,
      ..._473
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._252,
      ..._253,
      ..._254,
      ..._432,
      ..._442,
      ..._458,
      ..._474,
      ..._484
    };
  }
  export const ClientFactory = {
    ..._511,
    ..._512,
    ..._513
  };
}
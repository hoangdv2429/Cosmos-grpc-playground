import * as _216 from "./downtime-detector/v1beta1/downtime_duration";
import * as _217 from "./downtime-detector/v1beta1/genesis";
import * as _218 from "./downtime-detector/v1beta1/query";
import * as _219 from "./epochs/genesis";
import * as _220 from "./epochs/query";
import * as _221 from "./gamm/pool-models/balancer/balancerPool";
import * as _222 from "./gamm/v1beta1/genesis";
import * as _223 from "./gamm/v1beta1/query";
import * as _224 from "./gamm/v1beta1/tx";
import * as _225 from "./gamm/pool-models/balancer/tx/tx";
import * as _226 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _227 from "./gamm/pool-models/stableswap/tx";
import * as _228 from "./gamm/v2/query";
import * as _229 from "./ibc-rate-limit/v1beta1/params";
import * as _230 from "./ibc-rate-limit/v1beta1/query";
import * as _231 from "./incentives/gauge";
import * as _232 from "./incentives/genesis";
import * as _233 from "./incentives/params";
import * as _234 from "./incentives/query";
import * as _235 from "./incentives/tx";
import * as _236 from "./lockup/genesis";
import * as _237 from "./lockup/lock";
import * as _238 from "./lockup/params";
import * as _239 from "./lockup/query";
import * as _240 from "./lockup/tx";
import * as _241 from "./mint/v1beta1/genesis";
import * as _242 from "./mint/v1beta1/mint";
import * as _243 from "./mint/v1beta1/query";
import * as _244 from "./pool-incentives/v1beta1/genesis";
import * as _245 from "./pool-incentives/v1beta1/gov";
import * as _246 from "./pool-incentives/v1beta1/incentives";
import * as _247 from "./pool-incentives/v1beta1/query";
import * as _248 from "./protorev/v1beta1/genesis";
import * as _249 from "./protorev/v1beta1/gov";
import * as _250 from "./protorev/v1beta1/params";
import * as _251 from "./protorev/v1beta1/protorev";
import * as _252 from "./protorev/v1beta1/query";
import * as _253 from "./protorev/v1beta1/tx";
import * as _254 from "./sumtree/v1beta1/tree";
import * as _255 from "./superfluid/genesis";
import * as _256 from "./superfluid/params";
import * as _257 from "./superfluid/query";
import * as _258 from "./superfluid/superfluid";
import * as _259 from "./superfluid/tx";
import * as _260 from "./swaprouter/v1beta1/genesis";
import * as _261 from "./swaprouter/v1beta1/module_route";
import * as _262 from "./swaprouter/v1beta1/query";
import * as _263 from "./swaprouter/v1beta1/swap_route";
import * as _264 from "./swaprouter/v1beta1/tx";
import * as _265 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _266 from "./tokenfactory/v1beta1/genesis";
import * as _267 from "./tokenfactory/v1beta1/params";
import * as _268 from "./tokenfactory/v1beta1/query";
import * as _269 from "./tokenfactory/v1beta1/tx";
import * as _270 from "./twap/v1beta1/genesis";
import * as _271 from "./twap/v1beta1/query";
import * as _272 from "./twap/v1beta1/twap_record";
import * as _273 from "./txfees/v1beta1/feetoken";
import * as _274 from "./txfees/v1beta1/genesis";
import * as _275 from "./txfees/v1beta1/gov";
import * as _276 from "./txfees/v1beta1/query";
import * as _277 from "./valset-pref/v1beta1/query";
import * as _278 from "./valset-pref/v1beta1/state";
import * as _279 from "./valset-pref/v1beta1/tx";
import * as _473 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _474 from "./gamm/pool-models/stableswap/tx.amino";
import * as _475 from "./gamm/v1beta1/tx.amino";
import * as _476 from "./incentives/tx.amino";
import * as _477 from "./lockup/tx.amino";
import * as _478 from "./protorev/v1beta1/tx.amino";
import * as _479 from "./superfluid/tx.amino";
import * as _480 from "./swaprouter/v1beta1/tx.amino";
import * as _481 from "./tokenfactory/v1beta1/tx.amino";
import * as _482 from "./valset-pref/v1beta1/tx.amino";
import * as _483 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _484 from "./gamm/pool-models/stableswap/tx.registry";
import * as _485 from "./gamm/v1beta1/tx.registry";
import * as _486 from "./incentives/tx.registry";
import * as _487 from "./lockup/tx.registry";
import * as _488 from "./protorev/v1beta1/tx.registry";
import * as _489 from "./superfluid/tx.registry";
import * as _490 from "./swaprouter/v1beta1/tx.registry";
import * as _491 from "./tokenfactory/v1beta1/tx.registry";
import * as _492 from "./valset-pref/v1beta1/tx.registry";
import * as _493 from "./downtime-detector/v1beta1/query.lcd";
import * as _494 from "./epochs/query.lcd";
import * as _495 from "./gamm/v1beta1/query.lcd";
import * as _496 from "./gamm/v2/query.lcd";
import * as _497 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _498 from "./incentives/query.lcd";
import * as _499 from "./lockup/query.lcd";
import * as _500 from "./mint/v1beta1/query.lcd";
import * as _501 from "./pool-incentives/v1beta1/query.lcd";
import * as _502 from "./protorev/v1beta1/query.lcd";
import * as _503 from "./superfluid/query.lcd";
import * as _504 from "./swaprouter/v1beta1/query.lcd";
import * as _505 from "./tokenfactory/v1beta1/query.lcd";
import * as _506 from "./twap/v1beta1/query.lcd";
import * as _507 from "./txfees/v1beta1/query.lcd";
import * as _508 from "./valset-pref/v1beta1/query.lcd";
import * as _509 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _510 from "./epochs/query.rpc.Query";
import * as _511 from "./gamm/v1beta1/query.rpc.Query";
import * as _512 from "./gamm/v2/query.rpc.Query";
import * as _513 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _514 from "./incentives/query.rpc.Query";
import * as _515 from "./lockup/query.rpc.Query";
import * as _516 from "./mint/v1beta1/query.rpc.Query";
import * as _517 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _518 from "./protorev/v1beta1/query.rpc.Query";
import * as _519 from "./superfluid/query.rpc.Query";
import * as _520 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _521 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _522 from "./twap/v1beta1/query.rpc.Query";
import * as _523 from "./txfees/v1beta1/query.rpc.Query";
import * as _524 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _525 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _526 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _527 from "./gamm/v1beta1/tx.rpc.msg";
import * as _528 from "./incentives/tx.rpc.msg";
import * as _529 from "./lockup/tx.rpc.msg";
import * as _530 from "./protorev/v1beta1/tx.rpc.msg";
import * as _531 from "./superfluid/tx.rpc.msg";
import * as _532 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _533 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _534 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _564 from "./lcd";
import * as _565 from "./rpc.query";
import * as _566 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._216,
      ..._217,
      ..._218,
      ..._493,
      ..._509
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._219,
      ..._220,
      ..._494,
      ..._510
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._475,
      ..._485,
      ..._495,
      ..._511,
      ..._527
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._225,
          ..._473,
          ..._483,
          ..._525
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._226,
          ..._227,
          ..._474,
          ..._484,
          ..._526
        };
      }
    }
    export const v2 = {
      ..._228,
      ..._496,
      ..._512
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._229,
      ..._230,
      ..._497,
      ..._513
    };
  }
  export const incentives = {
    ..._231,
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._476,
    ..._486,
    ..._498,
    ..._514,
    ..._528
  };
  export const lockup = {
    ..._236,
    ..._237,
    ..._238,
    ..._239,
    ..._240,
    ..._477,
    ..._487,
    ..._499,
    ..._515,
    ..._529
  };
  export namespace mint {
    export const v1beta1 = {
      ..._241,
      ..._242,
      ..._243,
      ..._500,
      ..._516
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._501,
      ..._517
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._478,
      ..._488,
      ..._502,
      ..._518,
      ..._530
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._254
    };
  }
  export const superfluid = {
    ..._255,
    ..._256,
    ..._257,
    ..._258,
    ..._259,
    ..._479,
    ..._489,
    ..._503,
    ..._519,
    ..._531
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._480,
      ..._490,
      ..._504,
      ..._520,
      ..._532
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._481,
      ..._491,
      ..._505,
      ..._521,
      ..._533
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._270,
      ..._271,
      ..._272,
      ..._506,
      ..._522
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._507,
      ..._523
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._277,
      ..._278,
      ..._279,
      ..._482,
      ..._492,
      ..._508,
      ..._524,
      ..._534
    };
  }
  export const ClientFactory = {
    ..._564,
    ..._565,
    ..._566
  };
}
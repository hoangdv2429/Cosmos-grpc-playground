import * as _57 from "./app/v1alpha1/config";
import * as _58 from "./app/v1alpha1/module";
import * as _59 from "./app/v1alpha1/query";
import * as _60 from "./auth/v1beta1/auth";
import * as _61 from "./auth/v1beta1/genesis";
import * as _62 from "./auth/v1beta1/query";
import * as _63 from "./authz/v1beta1/authz";
import * as _64 from "./authz/v1beta1/event";
import * as _65 from "./authz/v1beta1/genesis";
import * as _66 from "./authz/v1beta1/query";
import * as _67 from "./authz/v1beta1/tx";
import * as _68 from "./bank/v1beta1/authz";
import * as _69 from "./bank/v1beta1/bank";
import * as _70 from "./bank/v1beta1/genesis";
import * as _71 from "./bank/v1beta1/query";
import * as _72 from "./bank/v1beta1/tx";
import * as _73 from "./base/abci/v1beta1/abci";
import * as _74 from "./base/kv/v1beta1/kv";
import * as _75 from "./base/query/v1beta1/pagination";
import * as _76 from "./base/reflection/v1beta1/reflection";
import * as _77 from "./base/reflection/v2alpha1/reflection";
import * as _78 from "./base/snapshots/v1beta1/snapshot";
import * as _79 from "./base/store/v1beta1/commit_info";
import * as _80 from "./base/store/v1beta1/listening";
import * as _81 from "./base/tendermint/v1beta1/query";
import * as _82 from "./base/v1beta1/coin";
import * as _83 from "./capability/v1beta1/capability";
import * as _84 from "./capability/v1beta1/genesis";
import * as _85 from "./crisis/v1beta1/genesis";
import * as _86 from "./crisis/v1beta1/tx";
import * as _87 from "./crypto/ed25519/keys";
import * as _88 from "./crypto/hd/v1/hd";
import * as _89 from "./crypto/keyring/v1/record";
import * as _90 from "./crypto/multisig/keys";
import * as _91 from "./crypto/secp256k1/keys";
import * as _92 from "./crypto/secp256r1/keys";
import * as _93 from "./distribution/v1beta1/distribution";
import * as _94 from "./distribution/v1beta1/genesis";
import * as _95 from "./distribution/v1beta1/query";
import * as _96 from "./distribution/v1beta1/tx";
import * as _97 from "./evidence/v1beta1/evidence";
import * as _98 from "./evidence/v1beta1/genesis";
import * as _99 from "./evidence/v1beta1/query";
import * as _100 from "./evidence/v1beta1/tx";
import * as _101 from "./feegrant/v1beta1/feegrant";
import * as _102 from "./feegrant/v1beta1/genesis";
import * as _103 from "./feegrant/v1beta1/query";
import * as _104 from "./feegrant/v1beta1/tx";
import * as _105 from "./genutil/v1beta1/genesis";
import * as _106 from "./gov/v1/genesis";
import * as _107 from "./gov/v1/gov";
import * as _108 from "./gov/v1/query";
import * as _109 from "./gov/v1/tx";
import * as _110 from "./gov/v1beta1/genesis";
import * as _111 from "./gov/v1beta1/gov";
import * as _112 from "./gov/v1beta1/query";
import * as _113 from "./gov/v1beta1/tx";
import * as _114 from "./group/v1/events";
import * as _115 from "./group/v1/genesis";
import * as _116 from "./group/v1/query";
import * as _117 from "./group/v1/tx";
import * as _118 from "./group/v1/types";
import * as _119 from "./mint/v1beta1/genesis";
import * as _120 from "./mint/v1beta1/mint";
import * as _121 from "./mint/v1beta1/query";
import * as _122 from "./msg/v1/msg";
import * as _123 from "./nft/v1beta1/event";
import * as _124 from "./nft/v1beta1/genesis";
import * as _125 from "./nft/v1beta1/nft";
import * as _126 from "./nft/v1beta1/query";
import * as _127 from "./nft/v1beta1/tx";
import * as _128 from "./orm/v1/orm";
import * as _129 from "./orm/v1alpha1/schema";
import * as _130 from "./params/v1beta1/params";
import * as _131 from "./params/v1beta1/query";
import * as _132 from "./slashing/v1beta1/genesis";
import * as _133 from "./slashing/v1beta1/query";
import * as _134 from "./slashing/v1beta1/slashing";
import * as _135 from "./slashing/v1beta1/tx";
import * as _136 from "./staking/v1beta1/authz";
import * as _137 from "./staking/v1beta1/genesis";
import * as _138 from "./staking/v1beta1/query";
import * as _139 from "./staking/v1beta1/staking";
import * as _140 from "./staking/v1beta1/tx";
import * as _141 from "./tx/signing/v1beta1/signing";
import * as _142 from "./tx/v1beta1/service";
import * as _143 from "./tx/v1beta1/tx";
import * as _144 from "./upgrade/v1beta1/query";
import * as _145 from "./upgrade/v1beta1/tx";
import * as _146 from "./upgrade/v1beta1/upgrade";
import * as _147 from "./vesting/v1beta1/tx";
import * as _148 from "./vesting/v1beta1/vesting";
import * as _343 from "./authz/v1beta1/tx.amino";
import * as _344 from "./bank/v1beta1/tx.amino";
import * as _345 from "./crisis/v1beta1/tx.amino";
import * as _346 from "./distribution/v1beta1/tx.amino";
import * as _347 from "./evidence/v1beta1/tx.amino";
import * as _348 from "./feegrant/v1beta1/tx.amino";
import * as _349 from "./gov/v1/tx.amino";
import * as _350 from "./gov/v1beta1/tx.amino";
import * as _351 from "./group/v1/tx.amino";
import * as _352 from "./nft/v1beta1/tx.amino";
import * as _353 from "./slashing/v1beta1/tx.amino";
import * as _354 from "./staking/v1beta1/tx.amino";
import * as _355 from "./upgrade/v1beta1/tx.amino";
import * as _356 from "./vesting/v1beta1/tx.amino";
import * as _357 from "./authz/v1beta1/tx.registry";
import * as _358 from "./bank/v1beta1/tx.registry";
import * as _359 from "./crisis/v1beta1/tx.registry";
import * as _360 from "./distribution/v1beta1/tx.registry";
import * as _361 from "./evidence/v1beta1/tx.registry";
import * as _362 from "./feegrant/v1beta1/tx.registry";
import * as _363 from "./gov/v1/tx.registry";
import * as _364 from "./gov/v1beta1/tx.registry";
import * as _365 from "./group/v1/tx.registry";
import * as _366 from "./nft/v1beta1/tx.registry";
import * as _367 from "./slashing/v1beta1/tx.registry";
import * as _368 from "./staking/v1beta1/tx.registry";
import * as _369 from "./upgrade/v1beta1/tx.registry";
import * as _370 from "./vesting/v1beta1/tx.registry";
import * as _371 from "./auth/v1beta1/query.lcd";
import * as _372 from "./authz/v1beta1/query.lcd";
import * as _373 from "./bank/v1beta1/query.lcd";
import * as _374 from "./base/tendermint/v1beta1/query.lcd";
import * as _375 from "./distribution/v1beta1/query.lcd";
import * as _376 from "./evidence/v1beta1/query.lcd";
import * as _377 from "./feegrant/v1beta1/query.lcd";
import * as _378 from "./gov/v1/query.lcd";
import * as _379 from "./gov/v1beta1/query.lcd";
import * as _380 from "./group/v1/query.lcd";
import * as _381 from "./mint/v1beta1/query.lcd";
import * as _382 from "./nft/v1beta1/query.lcd";
import * as _383 from "./params/v1beta1/query.lcd";
import * as _384 from "./slashing/v1beta1/query.lcd";
import * as _385 from "./staking/v1beta1/query.lcd";
import * as _386 from "./tx/v1beta1/service.lcd";
import * as _387 from "./upgrade/v1beta1/query.lcd";
import * as _388 from "./app/v1alpha1/query.rpc.Query";
import * as _389 from "./auth/v1beta1/query.rpc.Query";
import * as _390 from "./authz/v1beta1/query.rpc.Query";
import * as _391 from "./bank/v1beta1/query.rpc.Query";
import * as _392 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _393 from "./distribution/v1beta1/query.rpc.Query";
import * as _394 from "./evidence/v1beta1/query.rpc.Query";
import * as _395 from "./feegrant/v1beta1/query.rpc.Query";
import * as _396 from "./gov/v1/query.rpc.Query";
import * as _397 from "./gov/v1beta1/query.rpc.Query";
import * as _398 from "./group/v1/query.rpc.Query";
import * as _399 from "./mint/v1beta1/query.rpc.Query";
import * as _400 from "./nft/v1beta1/query.rpc.Query";
import * as _401 from "./params/v1beta1/query.rpc.Query";
import * as _402 from "./slashing/v1beta1/query.rpc.Query";
import * as _403 from "./staking/v1beta1/query.rpc.Query";
import * as _404 from "./tx/v1beta1/service.rpc.Service";
import * as _405 from "./upgrade/v1beta1/query.rpc.Query";
import * as _406 from "./authz/v1beta1/tx.rpc.msg";
import * as _407 from "./bank/v1beta1/tx.rpc.msg";
import * as _408 from "./crisis/v1beta1/tx.rpc.msg";
import * as _409 from "./distribution/v1beta1/tx.rpc.msg";
import * as _410 from "./evidence/v1beta1/tx.rpc.msg";
import * as _411 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _412 from "./gov/v1/tx.rpc.msg";
import * as _413 from "./gov/v1beta1/tx.rpc.msg";
import * as _414 from "./group/v1/tx.rpc.msg";
import * as _415 from "./nft/v1beta1/tx.rpc.msg";
import * as _416 from "./slashing/v1beta1/tx.rpc.msg";
import * as _417 from "./staking/v1beta1/tx.rpc.msg";
import * as _418 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _419 from "./vesting/v1beta1/tx.rpc.msg";
import * as _550 from "./lcd";
import * as _551 from "./rpc.query";
import * as _552 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._388
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._371,
      ..._389
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._343,
      ..._357,
      ..._372,
      ..._390,
      ..._406
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._344,
      ..._358,
      ..._373,
      ..._391,
      ..._407
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._73
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._74
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._75
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._76
      };
      export const v2alpha1 = {
        ..._77
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._78
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._79,
        ..._80
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._81,
        ..._374,
        ..._392
      };
    }
    export const v1beta1 = {
      ..._82
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._83,
      ..._84
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._85,
      ..._86,
      ..._345,
      ..._359,
      ..._408
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._87
    };
    export namespace hd {
      export const v1 = {
        ..._88
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._89
      };
    }
    export const multisig = {
      ..._90
    };
    export const secp256k1 = {
      ..._91
    };
    export const secp256r1 = {
      ..._92
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._346,
      ..._360,
      ..._375,
      ..._393,
      ..._409
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._347,
      ..._361,
      ..._376,
      ..._394,
      ..._410
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._348,
      ..._362,
      ..._377,
      ..._395,
      ..._411
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._105
    };
  }
  export namespace gov {
    export const v1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._349,
      ..._363,
      ..._378,
      ..._396,
      ..._412
    };
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._350,
      ..._364,
      ..._379,
      ..._397,
      ..._413
    };
  }
  export namespace group {
    export const v1 = {
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._351,
      ..._365,
      ..._380,
      ..._398,
      ..._414
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._119,
      ..._120,
      ..._121,
      ..._381,
      ..._399
    };
  }
  export namespace msg {
    export const v1 = {
      ..._122
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._352,
      ..._366,
      ..._382,
      ..._400,
      ..._415
    };
  }
  export namespace orm {
    export const v1 = {
      ..._128
    };
    export const v1alpha1 = {
      ..._129
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._383,
      ..._401
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._353,
      ..._367,
      ..._384,
      ..._402,
      ..._416
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._354,
      ..._368,
      ..._385,
      ..._403,
      ..._417
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._141
      };
    }
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._386,
      ..._404
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._355,
      ..._369,
      ..._387,
      ..._405,
      ..._418
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._147,
      ..._148,
      ..._356,
      ..._370,
      ..._419
    };
  }
  export const ClientFactory = {
    ..._550,
    ..._551,
    ..._552
  };
}
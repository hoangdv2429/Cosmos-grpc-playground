import * as _57 from "./app/v1alpha1/config";
import * as _58 from "./app/v1alpha1/module";
import * as _59 from "./app/v1alpha1/query";
import * as _60 from "./auth/v1beta1/auth";
import * as _61 from "./auth/v1beta1/genesis";
import * as _62 from "./auth/v1beta1/query";
import * as _63 from "./authz/v1beta1/authz";
import * as _64 from "./authz/v1beta1/genesis";
import * as _65 from "./authz/v1beta1/query";
import * as _66 from "./authz/v1beta1/tx";
import * as _67 from "./bank/v1beta1/authz";
import * as _68 from "./bank/v1beta1/bank";
import * as _69 from "./bank/v1beta1/genesis";
import * as _70 from "./bank/v1beta1/query";
import * as _71 from "./bank/v1beta1/tx";
import * as _72 from "./base/abci/v1beta1/abci";
import * as _73 from "./base/kv/v1beta1/kv";
import * as _74 from "./base/query/v1beta1/pagination";
import * as _75 from "./base/reflection/v1beta1/reflection";
import * as _76 from "./base/reflection/v2alpha1/reflection";
import * as _77 from "./base/snapshots/v1beta1/snapshot";
import * as _78 from "./base/store/v1beta1/commit_info";
import * as _79 from "./base/store/v1beta1/listening";
import * as _80 from "./base/tendermint/v1beta1/query";
import * as _81 from "./base/v1beta1/coin";
import * as _82 from "./capability/v1beta1/capability";
import * as _83 from "./capability/v1beta1/genesis";
import * as _84 from "./crisis/v1beta1/genesis";
import * as _85 from "./crisis/v1beta1/tx";
import * as _86 from "./crypto/ed25519/keys";
import * as _87 from "./crypto/hd/v1/hd";
import * as _88 from "./crypto/keyring/v1/record";
import * as _89 from "./crypto/multisig/keys";
import * as _90 from "./crypto/secp256k1/keys";
import * as _91 from "./crypto/secp256r1/keys";
import * as _92 from "./distribution/v1beta1/distribution";
import * as _93 from "./distribution/v1beta1/genesis";
import * as _94 from "./distribution/v1beta1/query";
import * as _95 from "./distribution/v1beta1/tx";
import * as _96 from "./evidence/v1beta1/evidence";
import * as _97 from "./evidence/v1beta1/genesis";
import * as _98 from "./evidence/v1beta1/query";
import * as _99 from "./evidence/v1beta1/tx";
import * as _100 from "./feegrant/v1beta1/feegrant";
import * as _101 from "./feegrant/v1beta1/genesis";
import * as _102 from "./feegrant/v1beta1/query";
import * as _103 from "./feegrant/v1beta1/tx";
import * as _104 from "./genutil/v1beta1/genesis";
import * as _105 from "./gov/v1/genesis";
import * as _106 from "./gov/v1/gov";
import * as _107 from "./gov/v1/query";
import * as _108 from "./gov/v1/tx";
import * as _109 from "./gov/v1beta1/genesis";
import * as _110 from "./gov/v1beta1/gov";
import * as _111 from "./gov/v1beta1/query";
import * as _112 from "./gov/v1beta1/tx";
import * as _113 from "./group/v1/events";
import * as _114 from "./group/v1/genesis";
import * as _115 from "./group/v1/query";
import * as _116 from "./group/v1/tx";
import * as _117 from "./group/v1/types";
import * as _118 from "./mint/v1beta1/genesis";
import * as _119 from "./mint/v1beta1/mint";
import * as _120 from "./mint/v1beta1/query";
import * as _121 from "./msg/v1/msg";
import * as _122 from "./nft/v1beta1/event";
import * as _123 from "./nft/v1beta1/genesis";
import * as _124 from "./nft/v1beta1/nft";
import * as _125 from "./nft/v1beta1/query";
import * as _126 from "./nft/v1beta1/tx";
import * as _127 from "./orm/v1/orm";
import * as _128 from "./orm/v1alpha1/schema";
import * as _129 from "./params/v1beta1/params";
import * as _130 from "./params/v1beta1/query";
import * as _131 from "./slashing/v1beta1/genesis";
import * as _132 from "./slashing/v1beta1/query";
import * as _133 from "./slashing/v1beta1/slashing";
import * as _134 from "./slashing/v1beta1/tx";
import * as _135 from "./staking/v1beta1/authz";
import * as _136 from "./staking/v1beta1/genesis";
import * as _137 from "./staking/v1beta1/query";
import * as _138 from "./staking/v1beta1/staking";
import * as _139 from "./staking/v1beta1/tx";
import * as _140 from "./tx/signing/v1beta1/signing";
import * as _141 from "./tx/v1beta1/service";
import * as _142 from "./tx/v1beta1/tx";
import * as _143 from "./upgrade/v1beta1/query";
import * as _144 from "./upgrade/v1beta1/tx";
import * as _145 from "./upgrade/v1beta1/upgrade";
import * as _146 from "./vesting/v1beta1/tx";
import * as _147 from "./vesting/v1beta1/vesting";
import * as _318 from "./authz/v1beta1/tx.amino";
import * as _319 from "./bank/v1beta1/tx.amino";
import * as _320 from "./crisis/v1beta1/tx.amino";
import * as _321 from "./distribution/v1beta1/tx.amino";
import * as _322 from "./evidence/v1beta1/tx.amino";
import * as _323 from "./feegrant/v1beta1/tx.amino";
import * as _324 from "./gov/v1/tx.amino";
import * as _325 from "./gov/v1beta1/tx.amino";
import * as _326 from "./group/v1/tx.amino";
import * as _327 from "./nft/v1beta1/tx.amino";
import * as _328 from "./slashing/v1beta1/tx.amino";
import * as _329 from "./staking/v1beta1/tx.amino";
import * as _330 from "./upgrade/v1beta1/tx.amino";
import * as _331 from "./vesting/v1beta1/tx.amino";
import * as _332 from "./authz/v1beta1/tx.registry";
import * as _333 from "./bank/v1beta1/tx.registry";
import * as _334 from "./crisis/v1beta1/tx.registry";
import * as _335 from "./distribution/v1beta1/tx.registry";
import * as _336 from "./evidence/v1beta1/tx.registry";
import * as _337 from "./feegrant/v1beta1/tx.registry";
import * as _338 from "./gov/v1/tx.registry";
import * as _339 from "./gov/v1beta1/tx.registry";
import * as _340 from "./group/v1/tx.registry";
import * as _341 from "./nft/v1beta1/tx.registry";
import * as _342 from "./slashing/v1beta1/tx.registry";
import * as _343 from "./staking/v1beta1/tx.registry";
import * as _344 from "./upgrade/v1beta1/tx.registry";
import * as _345 from "./vesting/v1beta1/tx.registry";
import * as _346 from "./auth/v1beta1/query.lcd";
import * as _347 from "./authz/v1beta1/query.lcd";
import * as _348 from "./bank/v1beta1/query.lcd";
import * as _349 from "./base/tendermint/v1beta1/query.lcd";
import * as _350 from "./distribution/v1beta1/query.lcd";
import * as _351 from "./evidence/v1beta1/query.lcd";
import * as _352 from "./feegrant/v1beta1/query.lcd";
import * as _353 from "./gov/v1/query.lcd";
import * as _354 from "./gov/v1beta1/query.lcd";
import * as _355 from "./group/v1/query.lcd";
import * as _356 from "./mint/v1beta1/query.lcd";
import * as _357 from "./nft/v1beta1/query.lcd";
import * as _358 from "./params/v1beta1/query.lcd";
import * as _359 from "./slashing/v1beta1/query.lcd";
import * as _360 from "./staking/v1beta1/query.lcd";
import * as _361 from "./tx/v1beta1/service.lcd";
import * as _362 from "./upgrade/v1beta1/query.lcd";
import * as _363 from "./app/v1alpha1/query.rpc.Query";
import * as _364 from "./auth/v1beta1/query.rpc.Query";
import * as _365 from "./authz/v1beta1/query.rpc.Query";
import * as _366 from "./bank/v1beta1/query.rpc.Query";
import * as _367 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _368 from "./distribution/v1beta1/query.rpc.Query";
import * as _369 from "./evidence/v1beta1/query.rpc.Query";
import * as _370 from "./feegrant/v1beta1/query.rpc.Query";
import * as _371 from "./gov/v1/query.rpc.Query";
import * as _372 from "./gov/v1beta1/query.rpc.Query";
import * as _373 from "./group/v1/query.rpc.Query";
import * as _374 from "./mint/v1beta1/query.rpc.Query";
import * as _375 from "./nft/v1beta1/query.rpc.Query";
import * as _376 from "./params/v1beta1/query.rpc.Query";
import * as _377 from "./slashing/v1beta1/query.rpc.Query";
import * as _378 from "./staking/v1beta1/query.rpc.Query";
import * as _379 from "./tx/v1beta1/service.rpc.Service";
import * as _380 from "./upgrade/v1beta1/query.rpc.Query";
import * as _381 from "./authz/v1beta1/tx.rpc.msg";
import * as _382 from "./bank/v1beta1/tx.rpc.msg";
import * as _383 from "./crisis/v1beta1/tx.rpc.msg";
import * as _384 from "./distribution/v1beta1/tx.rpc.msg";
import * as _385 from "./evidence/v1beta1/tx.rpc.msg";
import * as _386 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _387 from "./gov/v1/tx.rpc.msg";
import * as _388 from "./gov/v1beta1/tx.rpc.msg";
import * as _389 from "./group/v1/tx.rpc.msg";
import * as _390 from "./nft/v1beta1/tx.rpc.msg";
import * as _391 from "./slashing/v1beta1/tx.rpc.msg";
import * as _392 from "./staking/v1beta1/tx.rpc.msg";
import * as _393 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _394 from "./vesting/v1beta1/tx.rpc.msg";
import * as _500 from "./lcd";
import * as _501 from "./rpc.query";
import * as _502 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._57,
      ..._58,
      ..._59,
      ..._363
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._60,
      ..._61,
      ..._62,
      ..._346,
      ..._364
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._318,
      ..._332,
      ..._347,
      ..._365,
      ..._381
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._319,
      ..._333,
      ..._348,
      ..._366,
      ..._382
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._72
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._73
      };
    }
    export namespace query {
      export const v1beta1 = { ..._74
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._75
      };
      export const v2alpha1 = { ..._76
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._77
      };
    }
    export namespace store {
      export const v1beta1 = { ..._78,
        ..._79
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._80,
        ..._349,
        ..._367
      };
    }
    export const v1beta1 = { ..._81
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._82,
      ..._83
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._84,
      ..._85,
      ..._320,
      ..._334,
      ..._383
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._86
    };
    export namespace hd {
      export const v1 = { ..._87
      };
    }
    export namespace keyring {
      export const v1 = { ..._88
      };
    }
    export const multisig = { ..._89
    };
    export const secp256k1 = { ..._90
    };
    export const secp256r1 = { ..._91
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._321,
      ..._335,
      ..._350,
      ..._368,
      ..._384
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._322,
      ..._336,
      ..._351,
      ..._369,
      ..._385
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._323,
      ..._337,
      ..._352,
      ..._370,
      ..._386
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._104
    };
  }
  export namespace gov {
    export const v1 = { ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._324,
      ..._338,
      ..._353,
      ..._371,
      ..._387
    };
    export const v1beta1 = { ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._325,
      ..._339,
      ..._354,
      ..._372,
      ..._388
    };
  }
  export namespace group {
    export const v1 = { ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._326,
      ..._340,
      ..._355,
      ..._373,
      ..._389
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._118,
      ..._119,
      ..._120,
      ..._356,
      ..._374
    };
  }
  export namespace msg {
    export const v1 = { ..._121
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._327,
      ..._341,
      ..._357,
      ..._375,
      ..._390
    };
  }
  export namespace orm {
    export const v1 = { ..._127
    };
    export const v1alpha1 = { ..._128
    };
  }
  export namespace params {
    export const v1beta1 = { ..._129,
      ..._130,
      ..._358,
      ..._376
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._328,
      ..._342,
      ..._359,
      ..._377,
      ..._391
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._329,
      ..._343,
      ..._360,
      ..._378,
      ..._392
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._140
      };
    }
    export const v1beta1 = { ..._141,
      ..._142,
      ..._361,
      ..._379
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._143,
      ..._144,
      ..._145,
      ..._330,
      ..._344,
      ..._362,
      ..._380,
      ..._393
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._146,
      ..._147,
      ..._331,
      ..._345,
      ..._394
    };
  }
  export const ClientFactory = { ..._500,
    ..._501,
    ..._502
  };
}
import * as _204 from "./applications/transfer/v1/genesis";
import * as _205 from "./applications/transfer/v1/query";
import * as _206 from "./applications/transfer/v1/transfer";
import * as _207 from "./applications/transfer/v1/tx";
import * as _208 from "./applications/transfer/v2/packet";
import * as _209 from "./core/channel/v1/channel";
import * as _210 from "./core/channel/v1/genesis";
import * as _211 from "./core/channel/v1/query";
import * as _212 from "./core/channel/v1/tx";
import * as _213 from "./core/client/v1/client";
import * as _214 from "./core/client/v1/genesis";
import * as _215 from "./core/client/v1/query";
import * as _216 from "./core/client/v1/tx";
import * as _217 from "./core/commitment/v1/commitment";
import * as _218 from "./core/connection/v1/connection";
import * as _219 from "./core/connection/v1/genesis";
import * as _220 from "./core/connection/v1/query";
import * as _221 from "./core/connection/v1/tx";
import * as _222 from "./core/port/v1/query";
import * as _223 from "./core/types/v1/genesis";
import * as _224 from "./lightclients/localhost/v1/localhost";
import * as _225 from "./lightclients/solomachine/v1/solomachine";
import * as _226 from "./lightclients/solomachine/v2/solomachine";
import * as _227 from "./lightclients/tendermint/v1/tendermint";
import * as _475 from "./applications/transfer/v1/tx.amino";
import * as _476 from "./core/channel/v1/tx.amino";
import * as _477 from "./core/client/v1/tx.amino";
import * as _478 from "./core/connection/v1/tx.amino";
import * as _479 from "./applications/transfer/v1/tx.registry";
import * as _480 from "./core/channel/v1/tx.registry";
import * as _481 from "./core/client/v1/tx.registry";
import * as _482 from "./core/connection/v1/tx.registry";
import * as _483 from "./applications/transfer/v1/query.lcd";
import * as _484 from "./core/channel/v1/query.lcd";
import * as _485 from "./core/client/v1/query.lcd";
import * as _486 from "./core/connection/v1/query.lcd";
import * as _487 from "./applications/transfer/v1/query.rpc.Query";
import * as _488 from "./core/channel/v1/query.rpc.Query";
import * as _489 from "./core/client/v1/query.rpc.Query";
import * as _490 from "./core/connection/v1/query.rpc.Query";
import * as _491 from "./core/port/v1/query.rpc.Query";
import * as _492 from "./applications/transfer/v1/tx.rpc.msg";
import * as _493 from "./core/channel/v1/tx.rpc.msg";
import * as _494 from "./core/client/v1/tx.rpc.msg";
import * as _495 from "./core/connection/v1/tx.rpc.msg";
import * as _587 from "./lcd";
import * as _588 from "./rpc.query";
import * as _589 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._204,
        ..._205,
        ..._206,
        ..._207,
        ..._475,
        ..._479,
        ..._483,
        ..._487,
        ..._492
      };
      export const v2 = {
        ..._208
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._209,
        ..._210,
        ..._211,
        ..._212,
        ..._476,
        ..._480,
        ..._484,
        ..._488,
        ..._493
      };
    }
    export namespace client {
      export const v1 = {
        ..._213,
        ..._214,
        ..._215,
        ..._216,
        ..._477,
        ..._481,
        ..._485,
        ..._489,
        ..._494
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._217
      };
    }
    export namespace connection {
      export const v1 = {
        ..._218,
        ..._219,
        ..._220,
        ..._221,
        ..._478,
        ..._482,
        ..._486,
        ..._490,
        ..._495
      };
    }
    export namespace port {
      export const v1 = {
        ..._222,
        ..._491
      };
    }
    export namespace types {
      export const v1 = {
        ..._223
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._224
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._225
      };
      export const v2 = {
        ..._226
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._227
      };
    }
  }
  export const ClientFactory = {
    ..._587,
    ..._588,
    ..._589
  };
}
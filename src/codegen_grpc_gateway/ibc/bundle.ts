import * as _189 from "./applications/transfer/v1/genesis";
import * as _190 from "./applications/transfer/v1/query";
import * as _191 from "./applications/transfer/v1/transfer";
import * as _192 from "./applications/transfer/v1/tx";
import * as _193 from "./applications/transfer/v2/packet";
import * as _194 from "./core/channel/v1/channel";
import * as _195 from "./core/channel/v1/genesis";
import * as _196 from "./core/channel/v1/query";
import * as _197 from "./core/channel/v1/tx";
import * as _198 from "./core/client/v1/client";
import * as _199 from "./core/client/v1/genesis";
import * as _200 from "./core/client/v1/query";
import * as _201 from "./core/client/v1/tx";
import * as _202 from "./core/commitment/v1/commitment";
import * as _203 from "./core/connection/v1/connection";
import * as _204 from "./core/connection/v1/genesis";
import * as _205 from "./core/connection/v1/query";
import * as _206 from "./core/connection/v1/tx";
import * as _207 from "./core/port/v1/query";
import * as _208 from "./core/types/v1/genesis";
import * as _209 from "./lightclients/localhost/v1/localhost";
import * as _210 from "./lightclients/solomachine/v1/solomachine";
import * as _211 from "./lightclients/solomachine/v2/solomachine";
import * as _212 from "./lightclients/tendermint/v1/tendermint";
import * as _450 from "./applications/transfer/v1/tx.amino";
import * as _451 from "./core/channel/v1/tx.amino";
import * as _452 from "./core/client/v1/tx.amino";
import * as _453 from "./core/connection/v1/tx.amino";
import * as _454 from "./applications/transfer/v1/tx.registry";
import * as _455 from "./core/channel/v1/tx.registry";
import * as _456 from "./core/client/v1/tx.registry";
import * as _457 from "./core/connection/v1/tx.registry";
import * as _458 from "./applications/transfer/v1/query.lcd";
import * as _459 from "./core/channel/v1/query.lcd";
import * as _460 from "./core/client/v1/query.lcd";
import * as _461 from "./core/connection/v1/query.lcd";
import * as _462 from "./applications/transfer/v1/query.rpc.Query";
import * as _463 from "./core/channel/v1/query.rpc.Query";
import * as _464 from "./core/client/v1/query.rpc.Query";
import * as _465 from "./core/connection/v1/query.rpc.Query";
import * as _466 from "./core/port/v1/query.rpc.Query";
import * as _467 from "./applications/transfer/v1/tx.rpc.msg";
import * as _468 from "./core/channel/v1/tx.rpc.msg";
import * as _469 from "./core/client/v1/tx.rpc.msg";
import * as _470 from "./core/connection/v1/tx.rpc.msg";
import * as _559 from "./lcd";
import * as _560 from "./rpc.query";
import * as _561 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._189,
        ..._190,
        ..._191,
        ..._192,
        ..._450,
        ..._454,
        ..._458,
        ..._462,
        ..._467
      };
      export const v2 = {
        ..._193
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._194,
        ..._195,
        ..._196,
        ..._197,
        ..._451,
        ..._455,
        ..._459,
        ..._463,
        ..._468
      };
    }
    export namespace client {
      export const v1 = {
        ..._198,
        ..._199,
        ..._200,
        ..._201,
        ..._452,
        ..._456,
        ..._460,
        ..._464,
        ..._469
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._202
      };
    }
    export namespace connection {
      export const v1 = {
        ..._203,
        ..._204,
        ..._205,
        ..._206,
        ..._453,
        ..._457,
        ..._461,
        ..._465,
        ..._470
      };
    }
    export namespace port {
      export const v1 = {
        ..._207,
        ..._466
      };
    }
    export namespace types {
      export const v1 = {
        ..._208
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._209
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._210
      };
      export const v2 = {
        ..._211
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._212
      };
    }
  }
  export const ClientFactory = {
    ..._559,
    ..._560,
    ..._561
  };
}
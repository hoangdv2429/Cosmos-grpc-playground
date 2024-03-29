import * as _255 from "../stargaze/alloc/v1beta1/genesis";
import * as _256 from "../stargaze/alloc/v1beta1/params";
import * as _257 from "../stargaze/alloc/v1beta1/query";
import * as _258 from "../stargaze/alloc/v1beta1/tx";
import * as _259 from "../stargaze/claim/v1beta1/claim_record";
import * as _260 from "../stargaze/claim/v1beta1/genesis";
import * as _261 from "../stargaze/claim/v1beta1/params";
import * as _262 from "../stargaze/claim/v1beta1/query";
import * as _263 from "../stargaze/claim/v1beta1/tx";
import * as _485 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _486 from "../stargaze/claim/v1beta1/tx.amino";
import * as _487 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _488 from "../stargaze/claim/v1beta1/tx.registry";
import * as _489 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _490 from "../stargaze/claim/v1beta1/query.lcd";
import * as _491 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _492 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _493 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _494 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _514 from "./lcd";
import * as _515 from "./rpc.query";
import * as _516 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._255,
        ..._256,
        ..._257,
        ..._258,
        ..._485,
        ..._487,
        ..._489,
        ..._491,
        ..._493
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._259,
        ..._260,
        ..._261,
        ..._262,
        ..._263,
        ..._486,
        ..._488,
        ..._490,
        ..._492,
        ..._494
      };
    }
  }
  export const ClientFactory = {
    ..._514,
    ..._515,
    ..._516
  };
}
import * as _295 from "../stargaze/alloc/v1beta1/genesis";
import * as _296 from "../stargaze/alloc/v1beta1/params";
import * as _297 from "../stargaze/alloc/v1beta1/query";
import * as _298 from "../stargaze/alloc/v1beta1/tx";
import * as _299 from "../stargaze/claim/v1beta1/claim_record";
import * as _300 from "../stargaze/claim/v1beta1/genesis";
import * as _301 from "../stargaze/claim/v1beta1/params";
import * as _302 from "../stargaze/claim/v1beta1/query";
import * as _303 from "../stargaze/claim/v1beta1/tx";
import * as _560 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _561 from "../stargaze/claim/v1beta1/tx.amino";
import * as _562 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _563 from "../stargaze/claim/v1beta1/tx.registry";
import * as _564 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _565 from "../stargaze/claim/v1beta1/query.lcd";
import * as _566 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _567 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _568 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _569 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _595 from "./lcd";
import * as _596 from "./rpc.query";
import * as _597 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._295,
        ..._296,
        ..._297,
        ..._298,
        ..._560,
        ..._562,
        ..._564,
        ..._566,
        ..._568
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._299,
        ..._300,
        ..._301,
        ..._302,
        ..._303,
        ..._561,
        ..._563,
        ..._565,
        ..._567,
        ..._569
      };
    }
  }
  export const ClientFactory = {
    ..._595,
    ..._596,
    ..._597
  };
}
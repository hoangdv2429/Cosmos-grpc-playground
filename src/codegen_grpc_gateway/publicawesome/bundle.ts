import * as _280 from "../stargaze/alloc/v1beta1/genesis";
import * as _281 from "../stargaze/alloc/v1beta1/params";
import * as _282 from "../stargaze/alloc/v1beta1/query";
import * as _283 from "../stargaze/alloc/v1beta1/tx";
import * as _284 from "../stargaze/claim/v1beta1/claim_record";
import * as _285 from "../stargaze/claim/v1beta1/genesis";
import * as _286 from "../stargaze/claim/v1beta1/params";
import * as _287 from "../stargaze/claim/v1beta1/query";
import * as _288 from "../stargaze/claim/v1beta1/tx";
import * as _535 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _536 from "../stargaze/claim/v1beta1/tx.amino";
import * as _537 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _538 from "../stargaze/claim/v1beta1/tx.registry";
import * as _539 from "../stargaze/alloc/v1beta1/query.lcd";
import * as _540 from "../stargaze/claim/v1beta1/query.lcd";
import * as _541 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _542 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _543 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _544 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _567 from "./lcd";
import * as _568 from "./rpc.query";
import * as _569 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._280,
        ..._281,
        ..._282,
        ..._283,
        ..._535,
        ..._537,
        ..._539,
        ..._541,
        ..._543
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._284,
        ..._285,
        ..._286,
        ..._287,
        ..._288,
        ..._536,
        ..._538,
        ..._540,
        ..._542,
        ..._544
      };
    }
  }
  export const ClientFactory = {
    ..._567,
    ..._568,
    ..._569
  };
}
import * as _305 from "./compute/v1beta1/genesis";
import * as _306 from "./compute/v1beta1/msg";
import * as _307 from "./compute/v1beta1/query";
import * as _308 from "./compute/v1beta1/types";
import * as _309 from "./intertx/v1beta1/query";
import * as _310 from "./intertx/v1beta1/tx";
import * as _311 from "./registration/v1beta1/genesis";
import * as _312 from "./registration/v1beta1/msg";
import * as _313 from "./registration/v1beta1/query";
import * as _314 from "./registration/v1beta1/types";
import * as _315 from "./registration/v1beta1/remote_attestation/types";
import * as _542 from "./compute/v1beta1/msg.amino";
import * as _543 from "./intertx/v1beta1/tx.amino";
import * as _544 from "./compute/v1beta1/msg.registry";
import * as _545 from "./intertx/v1beta1/tx.registry";
import * as _546 from "./compute/v1beta1/query.lcd";
import * as _547 from "./intertx/v1beta1/query.lcd";
import * as _548 from "./registration/v1beta1/query.lcd";
import * as _549 from "./compute/v1beta1/query.rpc.Query";
import * as _550 from "./intertx/v1beta1/query.rpc.Query";
import * as _551 from "./registration/v1beta1/query.rpc.Query";
import * as _552 from "./compute/v1beta1/msg.rpc.msg";
import * as _553 from "./intertx/v1beta1/tx.rpc.msg";
import * as _572 from "./lcd";
import * as _573 from "./rpc.query";
import * as _574 from "./rpc.tx";
export namespace secret {
  export namespace compute {
    export const v1beta1 = { ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._542,
      ..._544,
      ..._546,
      ..._549,
      ..._552
    };
  }
  export namespace intertx {
    export const v1beta1 = { ..._309,
      ..._310,
      ..._543,
      ..._545,
      ..._547,
      ..._550,
      ..._553
    };
  }
  export namespace registration {
    export const v1beta1 = { ..._311,
      ..._312,
      ..._313,
      ..._314,
      ..._548,
      ..._551
    };
    export namespace remote_attestation {
      export const v1beta1 = { ..._315
      };
    }
  }
  export const ClientFactory = { ..._572,
    ..._573,
    ..._574
  };
}
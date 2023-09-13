import * as _156 from "./crypto/v1/ethsecp256k1/keys";
import * as _157 from "./evm/v1/events";
import * as _158 from "./evm/v1/evm";
import * as _159 from "./evm/v1/genesis";
import * as _160 from "./evm/v1/query";
import * as _161 from "./evm/v1/tx";
import * as _162 from "./feemarket/v1/events";
import * as _163 from "./feemarket/v1/feemarket";
import * as _164 from "./feemarket/v1/genesis";
import * as _165 from "./feemarket/v1/query";
import * as _166 from "./feemarket/v1/tx";
import * as _167 from "./types/v1/account";
import * as _168 from "./types/v1/dynamic_fee";
import * as _169 from "./types/v1/indexer";
import * as _170 from "./types/v1/web3";
import * as _440 from "./evm/v1/tx.amino";
import * as _441 from "./feemarket/v1/tx.amino";
import * as _442 from "./evm/v1/tx.registry";
import * as _443 from "./feemarket/v1/tx.registry";
import * as _444 from "./evm/v1/query.lcd";
import * as _445 from "./feemarket/v1/query.lcd";
import * as _446 from "./evm/v1/query.rpc.Query";
import * as _447 from "./feemarket/v1/query.rpc.Query";
import * as _448 from "./evm/v1/tx.rpc.msg";
import * as _449 from "./feemarket/v1/tx.rpc.msg";
import * as _581 from "./lcd";
import * as _582 from "./rpc.query";
import * as _583 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._156
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._440,
      ..._442,
      ..._444,
      ..._446,
      ..._448
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._441,
      ..._443,
      ..._445,
      ..._447,
      ..._449
    };
  }
  export namespace types {
    export const v1 = {
      ..._167,
      ..._168,
      ..._169,
      ..._170
    };
  }
  export const ClientFactory = {
    ..._581,
    ..._582,
    ..._583
  };
}
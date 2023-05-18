import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./msg";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/secret.compute.v1beta1.MsgStoreCode", MsgStoreCode], ["/secret.compute.v1beta1.MsgInstantiateContract", MsgInstantiateContract], ["/secret.compute.v1beta1.MsgExecuteContract", MsgExecuteContract]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish()
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract",
        value: MsgInstantiateContract.encode(value).finish()
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgExecuteContract",
        value: MsgExecuteContract.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgStoreCode",
        value
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract",
        value
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgExecuteContract",
        value
      };
    }

  },
  toJSON: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgStoreCode",
        value: MsgStoreCode.toJSON(value)
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract",
        value: MsgInstantiateContract.toJSON(value)
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgExecuteContract",
        value: MsgExecuteContract.toJSON(value)
      };
    }

  },
  fromJSON: {
    storeCode(value: any) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgStoreCode",
        value: MsgStoreCode.fromJSON(value)
      };
    },

    instantiateContract(value: any) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromJSON(value)
      };
    },

    executeContract(value: any) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgExecuteContract",
        value: MsgExecuteContract.fromJSON(value)
      };
    }

  },
  fromPartial: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value)
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromPartial(value)
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/secret.compute.v1beta1.MsgExecuteContract",
        value: MsgExecuteContract.fromPartial(value)
      };
    }

  }
};
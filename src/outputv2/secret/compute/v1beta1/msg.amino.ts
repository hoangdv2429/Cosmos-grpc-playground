import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./msg";
export const AminoConverter = {
  "/secret.compute.v1beta1.MsgStoreCode": {
    aminoType: "/secret.compute.v1beta1.MsgStoreCode",
    toAmino: MsgStoreCode.toAmino,
    fromAmino: MsgStoreCode.fromAmino
  },
  "/secret.compute.v1beta1.MsgInstantiateContract": {
    aminoType: "/secret.compute.v1beta1.MsgInstantiateContract",
    toAmino: MsgInstantiateContract.toAmino,
    fromAmino: MsgInstantiateContract.fromAmino
  },
  "/secret.compute.v1beta1.MsgExecuteContract": {
    aminoType: "/secret.compute.v1beta1.MsgExecuteContract",
    toAmino: MsgExecuteContract.toAmino,
    fromAmino: MsgExecuteContract.fromAmino
  }
};
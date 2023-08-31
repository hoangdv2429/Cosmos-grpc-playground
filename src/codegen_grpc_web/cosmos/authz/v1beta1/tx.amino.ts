import { Grant, GrantSDKType, GenericAuthorization, GenericAuthorizationSDKType } from "./authz";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization1 } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization1SDKType } from "../../../akash/deployment/v1beta1/authz";
import { DepositDeploymentAuthorization as DepositDeploymentAuthorization2 } from "../../../akash/deployment/v1beta2/authz";
import { DepositDeploymentAuthorizationSDKType as DepositDeploymentAuthorization2SDKType } from "../../../akash/deployment/v1beta2/authz";
import { SendAuthorization, SendAuthorizationSDKType } from "../../bank/v1beta1/authz";
import { StakeAuthorization, StakeAuthorizationSDKType } from "../../staking/v1beta1/authz";
import { ContractExecutionAuthorization, ContractExecutionAuthorizationSDKType, ContractMigrationAuthorization, ContractMigrationAuthorizationSDKType } from "../../../cosmwasm/wasm/v1/authz";
import { MsgGrant, MsgGrantSDKType, MsgExec, MsgExecSDKType, MsgRevoke, MsgRevokeSDKType } from "./tx";
export const AminoConverter = {
  "/cosmos.authz.v1beta1.MsgGrant": {
    aminoType: "cosmos-sdk/MsgGrant",
    toAmino: MsgGrant.toAmino,
    fromAmino: MsgGrant.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgExec": {
    aminoType: "cosmos-sdk/MsgExec",
    toAmino: MsgExec.toAmino,
    fromAmino: MsgExec.fromAmino
  },
  "/cosmos.authz.v1beta1.MsgRevoke": {
    aminoType: "cosmos-sdk/MsgRevoke",
    toAmino: MsgRevoke.toAmino,
    fromAmino: MsgRevoke.fromAmino
  }
};
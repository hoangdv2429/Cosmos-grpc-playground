/* eslint-disable no-console */
import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen_grpc_web');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
    classesUseArrowFunctions: false,

    tsDisable: {
      disableAll: false,
      patterns: ['osmosis/**/*amino.ts'],
      files: ['akash/deployment/v1beta1/deployment.ts']
    },

    eslintDisable: {
      disableAll: false,
      patterns: ['akash/**/*amino.ts'],
      files: ['akash/deployment/v1beta1/deployment.ts']
    },

    interfaces: {
      enabled: true,
      useUnionTypes: true
    },
    aminoEncoding: {
      enabled: true,
      useRecursiveV2encoding: true
    },
    prototypes: {
      enabled: true,
      parser: {
        keepCase: false
      },
      addAminoTypeToObjects: true,
      addTypeUrlToObjects: true,

      methods: {
        encode: true,
        decode: true,
        fromJSON: true,
        toJSON: true,
        fromPartial: true,
        toSDK: true,
        fromSDK: true,
        //
        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true
      },
      includePackageVar: true,
      fieldDefaultIsOptional: false,
      useOptionalNullable: true,
      allowUndefinedTypes: false,
      excluded: {
        protos: ['cosmos/authz/v1beta1/event.proto']
      },
      typingsFormat: {
        num64: 'bigint',
        useDeepPartial: true,
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      }
    },

    bundle: {
      enabled: true
    },

    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },

    rpcClients: {
      type: 'grpc-web',
      enabled: true,
      camelCase: true
    },

    reactQuery: {
      enabled: false,
      include: {
        patterns: ['osmosis/**/gamm/**/query.proto'],
        protos: ['akash/cert/v1beta2/query.proto'],
        packages: [
          'cosmos.bank.v1beta1',
          'cosmos.gov.v1beta1',
          'evmos.erc20.v1'
        ]
      }
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

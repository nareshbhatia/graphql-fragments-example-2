import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/generated/gql/': {
      preset: 'client',
      presetConfig: {
        // see https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#the-usefragment-helper
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;

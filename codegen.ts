import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/generated/gql/': {
      preset: 'client',
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as BaseApolloProvider,
  HttpLink,
} from '@apollo/client';

export interface ApolloProviderProps {
  children?: React.ReactNode;
}

export function ApolloProvider({ children }: ApolloProviderProps) {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
  });

  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
}

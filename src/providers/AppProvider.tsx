'use client';

import { ApolloProvider } from './ApolloProvider';
import { ThemeProvider } from './ThemeProvider';

export interface AppProviderProps {
  children?: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <ApolloProvider>{children}</ApolloProvider>
    </ThemeProvider>
  );
}

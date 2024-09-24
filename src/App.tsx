import React, { type ReactElement, useEffect } from 'react';
import Router from './router';

import './main.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchProvider } from './providers/SearchProvider';

const App = (): ReactElement => {
  useEffect(() => {
    window.document.title = 'Find users';
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <Router />
      </SearchProvider>
    </QueryClientProvider>
  );
};

export default App;

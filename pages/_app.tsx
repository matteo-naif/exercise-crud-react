import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient());

  return <>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
}

export default MyApp

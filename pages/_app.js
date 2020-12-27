import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { ToastProvider } from '@/features/toast/ToastContext';
import { AuthProvider } from '@/features/auth/useAuth';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={customTheme}>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;

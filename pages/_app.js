import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { ToastProvider } from '@/features/toast/ToastContext';
import { AuthProvider } from '@/features/auth/useAuth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyles } from '../theme';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ChakraProvider theme={customTheme}>
            <ToastProvider>
              <Component {...pageProps} />
            </ToastProvider>
          </ChakraProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;

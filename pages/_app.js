import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { ToastProvider } from '@/features/toast/ToastContext';
import { AuthProvider } from '@/features/auth/useAuth';

function MyApp({ Component, pageProps }) {
  console.log(customTheme);
  return (
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;

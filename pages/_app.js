import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { ToastProvider } from '@/features/toast/ToastContext';

function MyApp({ Component, pageProps }) {
  console.log(customTheme);
  return (
    <ChakraProvider theme={customTheme}>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </ChakraProvider>
  );
}

export default MyApp;

import { ChakraProvider } from "@chakra-ui/core";
import customTheme from "../styles/theme";

console.log("customTheme", customTheme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

import { ChakraProvider } from "@chakra-ui/react";
import  styles from "../styles/style.scss"
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

import { ChakraProvider } from "@chakra-ui/react";
import styles from "../styles/style.scss";
import {Layout} from "../components/Layout"
export default function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

import { ChakraProvider } from "@chakra-ui/react";
import styles from "../styles/style.scss";
import { Layout } from "../components/Layout";
import { UserProvider } from "../contexts/user";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  );
}

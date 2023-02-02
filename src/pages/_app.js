import { ChakraProvider} from '@chakra-ui/react'
import '../styles.css'
export default function MyApp({ Component, pageProps }) {
    return(
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
  }
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'

import {useState} from 'react'

export default function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return(
        <Flex
        bgColor={'#0A2647'}
        color={'#144272'}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        //bg={useColorModeValue('gray.50', 'gray.800')}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>LOG IN</Heading>
            <Text fontSize={'lg'} color={'#144272'}>
              Raise Fellow Traveller
            </Text>
          </Stack>
          <Box
            color={'white'}
            rounded={'lg'}
            bg={'#2C74B3'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" isInvalid errorBorderColor='#293462'
  />
              </FormControl>
              <FormControl id="password" >
                <FormLabel>Password</FormLabel>
                <Input type="password" isInvalid errorBorderColor='#293462'
 />
              </FormControl>
              <Stack spacing={4}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox colorScheme='#293462' >Remember me</Checkbox>
                  <Link color={'#293462'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'#144272'}
                  color={'white'}
                  _hover={{
                    bg: '#2B62B3',
                  }}>
                  LOG IN
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>       
    )
}

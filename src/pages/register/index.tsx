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
} from "@chakra-ui/react";
import { api } from "@/api";
import { IUser } from "@/api/models/IUser";
import { register } from "@/api/routes/session";

import { ChangeEvent, useState } from "react";

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [user, setUser] = useState<IUser>({ password: "", username: "" });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const onSentRegister = async () => {
    await register(user);
  };

  return (
    <Flex
      bgColor={"#0A2647"}
      color={"#144272"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      //bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Register</Heading>
          <Text fontSize={"lg"} color={"#144272"}>
            Raise Fellow Traveller
          </Text>
        </Stack>
        <Box
          color={"white"}
          rounded={"lg"}
          bg={"#2C74B3"}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Traveller Name</FormLabel>
              <Input
                type="text"
                isInvalid
                errorBorderColor="#293462"
                placeholder="traveller"
                name="username"
                value={user.username}
                onChange={handleOnChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                isInvalid
                errorBorderColor="#293462"
                placeholder="password"
                name="password"
                value={user.password}
                onChange={handleOnChange}
              />
            </FormControl>
            <Stack spacing={4}>
              <Button
                bg={"#144272"}
                color={"white"}
                _hover={{
                  bg: "#2B62B3",
                }}
                onClick={onSentRegister}
              >
                REGISTER
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

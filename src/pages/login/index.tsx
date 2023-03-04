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
import { IUser } from "@/api/models/IUser";
import { login } from "@/api/routes/session";

import { ChangeEvent, useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState<IUser>({ password: "", username: "" });

  const handleClick = () => setShow(!show);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const onSentRegister = async () => {
    await login(user);
  };

  return (
    <Flex
      bgColor={"#23221E"}
      color={"#d3af37"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>LOG IN</Heading>
          <Text fontSize={"lg"} color={"#d3af37"}>
            Greetings Fellow Traveller
          </Text>
        </Stack>
        <Box
          color={"white"}
          rounded={"lg"}
          bg={"#23221E"}
          boxShadow={"outline"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                isInvalid
                errorBorderColor="#383633"
                focusBorderColor="#d3af37"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                isInvalid
                errorBorderColor="#383633"
                focusBorderColor="#d3af37"
              />
            </FormControl>
            <Stack spacing={4}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox colorScheme="#23221E">Remember me</Checkbox>
                <Link color={"#23221E"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"#383633"}
                color={"white"}
                _hover={{
                  bg: "#d3af37",
                }}
              >
                LOG IN
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

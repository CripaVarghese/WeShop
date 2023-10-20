import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/Md";

const Login = () => {
  return (
    <Container
      maxW="md"
      py={{ base: "12", md: "24" }}
      boxShadow="lg"
      borderRadius="xl"
    >
          <Stack textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }} color={"blue"}>
              Log in to your account
            </Heading>
          </Stack>
          <Flex justifyContent={"center"}>
            <Input placeholder="Enter your email" w="80%" />
          </Flex>
          <Button variant="primary" leftIcon={<MdEmail />} iconSpacing="3">
            Sign In with email
          </Button>
          <HStack>
            <Divider />
            <Text fontSize="sm" color="muted">
              OR
            </Text>
            <Divider />
          </HStack>
          <Stack spacing="3">
            <Button
              variant="secondary"
              leftIcon={<FcGoogle />}
              iconSpacing="3"
            >
              Sign In with Google
            </Button>
            {/* <Box>{localStorage.getItem("userName")}</Box>
            <Box>{localStorage.getItem("email")}</Box>
            <Image src={localStorage.getItem("profPic")} alt="Dan Abramov" /> */}
          </Stack>
    </Container>
  );
};

export default Login;

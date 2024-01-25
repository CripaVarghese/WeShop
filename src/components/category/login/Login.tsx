import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Stack,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";

function Login() {
  return (
    <Box w="100vw" h="100vh" pt="32px" bg={"#FFEEEE"}>
      <Box
        maxW="28%"
        borderRadius="lg"
        boxShadow="lg"
        w="100%"
        mx="auto"
        h="80vh"
        bg="white"
      >
        <VStack spacing={"10"}>
          <Image src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg" />
          <Stack w="80%" spacing={"6"}>
            <Text fontSize={"lg"} fontWeight="bold">
              Login{" "}
              <chakra.span fontSize={"sm"} fontWeight="normal">
                or
              </chakra.span>{" "}
              Signup
            </Text>
            <InputGroup>
              <InputLeftAddon>+91</InputLeftAddon>
              <Input type="tel" placeholder="Mobile number" required />
            </InputGroup>
            <Text fontSize="10px">
              By continuing, I agree to the
              <Link color="#ff3f6c" href="#">
                {" Terms of Use & Privacy Policy"}
              </Link>
            </Text>
            <Button
              bg="#ff3f6c"
              fontSize={"12px"}
              fontWeight="bold"
              color={"white"}
              w="full"
              borderRadius={"0"}
            >
              CONTINUE
            </Button>
            <Text fontSize="10px">
              Have trouble logging in?
              <Link color="#ff3f6c" href="#">
                {" Get help "}
              </Link>
            </Text>
            {/* <Link color="#ff3f6c" href="#" fontSize="10px"></Link> */}
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
}

export default Login;

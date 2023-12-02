import {
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import NavbarTypeItems from "./NavbarTypeItems";

const HeaderTypeFilter = () => {
  return (
    <Stack
      w="100%"
      justifyContent="space-around"
      alignItems={"center"}
      flexDirection={"row"}
      spacing={0}
    >
      <NavbarTypeItems />

      <InputGroup
        w={{ lg: "37%", "2xl": "sm" }}
        h="60%"
        backgroundColor="#F5F4F7"
        borderColor="#F5F4F7"
        borderRadius={"3px"}
        display={{ base: "none", md: "none", lg: "block" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="muted" boxSize="5" />
        </InputLeftElement>
        <Input
          fontSize={"xs"}
          placeholder="Search for products, brands and more"
        />
      </InputGroup>
    </Stack>
  );
};

export default HeaderTypeFilter;

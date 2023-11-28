import {
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { navbarOptionsData } from "../../constants/navbarOptionsData";
import NavbarTypeItems from "../main-navbar-menu/navbar/NavbarTypeItems";

const HeaderTypeFilter = () => {
  return (
    <Stack w="100%" justifyContent="space-around" flexDirection={"row"}>
      <NavbarTypeItems data={navbarOptionsData} />
      <InputGroup
        w={{ base: "none", md: "", lg: "35%", "2xl": "sm" }}
        h="50%"
        backgroundColor="#F5F4F7"
        borderColor="#F5F4F7"
        borderRadius={"3px"}
        display={{ base: "none", md: "none", lg: "block" }}
        justifyContent={"center"}
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

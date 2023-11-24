import {
  HStack,
  Stack,
  Icon,
  ButtonGroup,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  Image,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { navbarOptionsData } from "../constants/navbarOptionsData";
import { HiOutlineShoppingBag } from "react-icons/Hi";
import { CiHeart } from "react-icons/ci";
import logo from "../constants/Images/logo.png";
import NavbarTypeItems from "./main-navbar-menu/navbar/NavbarTypeItems";
import Profile from "./profile/Profile";
import { useNavigate } from "react-router-dom";
import Wishlist_Page from "./wishList/Wishlist_Page";

const Header = () => {
  // const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Box
      as="header"
      w={"100%"}
      position={"fixed"}
      bg={"white"}
      zIndex="1"
      shadow={"lg"}
      display={"flex"}
      justifyContent={"center"}
      boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}
    >
      <Stack
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"20"}
        w={"95%"}
      >
        <HStack fontSize="md">
          <Image src={logo} w={"100px"} />
        </HStack>
        <NavbarTypeItems data={navbarOptionsData} />
        <InputGroup
          w="md"
          backgroundColor="#F5F4F7"
          borderColor="#F5F4F7"
          borderRadius={"3px"}
        >
          <InputLeftElement pointerEvents="none">
            <Icon as={FiSearch} color="muted" boxSize="5" />
          </InputLeftElement>
          <Input
            width={"30rem"}
            fontSize={"xs"}
            placeholder="Search for products, brands and more"
          />
        </InputGroup>
        <HStack w={"10%"}>
          <ButtonGroup
            variant="ghost"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"100%"}
            cursor={"pointer"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Profile />
            <Stack>
              <IconButton
                p={"0"}
                m={"0"}
                icon={<CiHeart size={25} />}
                aria-label=""
                title="wishlist"
                // onClick={() => navigate("/wishlist")}
                // _hover={{}}
              />
              {/* <Text fontSize={'xs'}>Profile</Text> */}
            </Stack>
            <Stack>
              <IconButton
                icon={<HiOutlineShoppingBag fontSize="1.50rem" />}
                aria-label=""
                title="bag"
                // _hover={{}}
              />
              {/* <Text fontSize={'xs'}>Profile</Text> */}
            </Stack>
          </ButtonGroup>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Header;

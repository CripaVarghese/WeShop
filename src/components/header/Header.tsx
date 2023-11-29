import {
  HStack,
  Stack,
  ButtonGroup,
  IconButton,
  Image,
  Box,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/Hi";
import { CiHeart } from "react-icons/ci";
import logo from "../../constants/Images/logo.png";
import Profile from "../profile/Profile";
import Hamburger from "../../constants/svg/Hamburger";
import HeaderDrawer from "./HeaderDrawer";
import HeaderTypeFilter from "./HeaderTypeFilter";
import Search_icon from "../../constants/svg/Search_icon";

const Header = () => {
  // const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        flexDirection="row"
        alignItems={"center"}
        h={"20"}
        w={"95%"}
        spacing={0}
      >
        <HStack>
          <Button
            variant={"ghost"}
            onClick={onOpen}
            display={{ base: "block", md: "none" }}
          >
            <Hamburger />
          </Button>
          <HeaderDrawer isOpen={isOpen} onClose={onClose} />
          <Image w={{ base: "200px", md: "150px" }} src={logo} />
        </HStack>
        <HeaderTypeFilter />

        <HStack>
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
            <Button
              aria-label={""}
              display={{ base: "block", lg: "none" }}
              alignItems="center"
              variant={"ghost"}
              p="0px"
            >
              <Search_icon />
            </Button>
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

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
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import logo from "../../constants/Images/logo.png";
import Profile from "./profile/Profile";
import Hamburger from "../../constants/svg/Hamburger";
import HeaderDrawer from "./HeaderDrawer";
import HeaderTypeFilter from "./HeaderTypeFilter";
import Search_icon from "../../constants/svg/SearchIcon";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
      w="100vw"
      h="80px"
      position={"fixed"}
      bg={"white"}
      zIndex="2"
      shadow={"lg"}
      display={"flex"}
      justifyContent={"center"}
      boxShadow="0 4px 12px 0 rgba(0,0,0,.05)"
    >
      <Stack flexDirection="row" alignItems={"center"} w={"95%"} spacing={0}>
        <HStack>
          <Button
            variant={"ghost"}
            onClick={onOpen}
            display={{ base: "block", md: "none" }}
          >
            <Hamburger />
          </Button>
          <HeaderDrawer isOpen={isOpen} onClose={onClose} />
          <Link to="/">
            <Image w={{ base: "200px", md: "150px" }} src={logo} />
          </Link>
        </HStack>

        <HeaderTypeFilter />

        <HStack>
          <ButtonGroup
            w={"100%"}
            variant="ghost"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            cursor={"pointer"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Button
              display={{ base: "block", lg: "none" }}
              alignItems="center"
              variant={"ghost"}
            >
              <Search_icon />
            </Button>
            <Profile />
            <Stack>
              <IconButton
                icon={<CiHeart size={25} />}
                aria-label=""
                title="wishlist"
                _hover={{ variant: "ghost" }}
                onClick={() => navigate("/wishlist-page")}
              />
              {/* <Text fontSize={'xs'}>Profile</Text> */}
            </Stack>
            <Stack>
              <IconButton
                icon={<HiOutlineShoppingBag fontSize="1.50rem" />}
                aria-label=""
                title="bag"
                _hover={{ variant: "ghost" }}
                onClick={() => navigate("/bag-page")}
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

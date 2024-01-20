import { useState } from "react";
import { HStack, Stack, Text, Box, Link } from "@chakra-ui/react";
import { navbarOptionsData } from "../../constants/navbarOptionsData";
import DropdownNavItems from "./DropdownNavItems";
import { fontStyle } from "../../constants/style";
import { Link as RouterLink } from "react-router-dom";

const NavbarTypeItems = () => {
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = (id: string | null) => {
    setSelectedMenuId(id);
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <HStack
      // w={{ md: "350px", lg: "35%", "2xl": "400px" }}
      justifyContent={{
        base: "none",
        md: "space-between",
        lg: "space-between",
      }}
    >
      {navbarOptionsData.navContents.map((navContent) => (
        <Stack
          key={navContent.header.id}
          justifyContent={"flex-end"}
          onMouseOver={() => handleMouseOver(navContent.header.id)}
          onMouseOut={() => handleMouseOut()}
          display={{ base: "none", md: "block" }}
        >
          <Box
            _hover={{
              borderBottom: `5px solid ${navContent.header.color}`,
            }}
            position="relative"
            borderBottom="2px solid white"
            py="30px"
            px="15px"
          >
            <Link
              as={RouterLink}
              _hover={{ textDecoration: "none" }}
              to={navContent.header.url}
            >
              <Text {...fontStyle.xsBold}>{navContent.header.label}</Text>
            </Link>
          </Box>
          {isVisible && selectedMenuId === navContent.header.id ? (
            <DropdownNavItems
              data={navContent.navColumns}
              color={navContent.header.color}
              onMouseOut={handleMouseOut}
            />
          ) : (
            ""
          )}
        </Stack>
      ))}
    </HStack>
  );
};

export default NavbarTypeItems;

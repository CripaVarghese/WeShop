import { useState } from "react";
import { HStack, Stack, Text, Box, Link } from "@chakra-ui/react";
import { CategoryOptions } from "../../../constants/navbarOptionsData";
import DropdownNavItems from "./dropdown/DropdownNavItems";

const NavbarTypeItems = ({ data }: { data: CategoryOptions }) => {
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
      w={{ md: "350px", lg: "300px", "2xl": "400px" }}
      justifyContent={{
        base: "none",
        md: "space-between",
        lg: "space-between",
      }}
    >
      {data.navContents.map((navContent) => (
        <Stack
          key={navContent.header.id}
          justifyContent={"flex-end"}
          onMouseOver={() => handleMouseOver(navContent.header.id)}
          onMouseOut={handleMouseOut}
          display={{ base: "none", md: "block" }}
        >
          <Box
            _hover={{
              borderBottom: `2px solid ${navContent.header.color}`,
            }}
            position="relative"
          >
            <Link
              _hover={{ textDecoration: "none" }}
              href={navContent.header.url}
            >
              <Text fontSize={"xs"} fontWeight={"bold"}>
                {navContent.header.label}
              </Text>
            </Link>
          </Box>
          {isVisible && selectedMenuId === navContent.header.id ? (
            <DropdownNavItems
              data={navContent.navColumns}
              color={navContent.header.color}
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

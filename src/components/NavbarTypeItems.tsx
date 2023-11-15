import { useState } from "react";
import { HStack, Stack, Text, Box } from "@chakra-ui/react";
import DropdownNavItems from "./DropdownNavItems";
import { CategoryOptions } from "../constants/navbarOptionsData";

const NavbarTypeItems = ({ data }: { data: CategoryOptions }) => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (id: string | null) => {
    if (selectedMenuId === id) {
      setSelectedMenuId(null);
    } else {
      setSelectedMenuId(id);
      setIsHovering(true);
    }
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <HStack w={"35%"} justifyContent={"space-between"}>
      {data.navContents.map((navContent) => (
        <Stack key={navContent.header.id} justifyContent={"flex-end"}>
          <Stack
            onMouseOver={() => handleMouseOver(navContent.header.id)}
            onMouseOut={handleMouseOut}
          >
            <Box
              mt={"28px"}
              pb={"28px"}
              px={"17px"}
              height={"43px"}
              _hover={{
                borderBottom: `2px solid ${navContent.header.color}`,
              }}
            >
              <Text fontSize={"xs"} fontWeight={"bold"} position="relative">
                {navContent.header.label}
              </Text>
            </Box>
          </Stack>
          {isHovering && selectedMenuId === navContent.header.id ? (
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

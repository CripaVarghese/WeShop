import { useState } from "react";
import { HStack, Stack, Text, Box } from "@chakra-ui/react";
import DropdownNavItems from "./DropdownNavItems";
import { CategoryOptions } from "../constants/navbarOptionsData";

const NavbarTypeItems = ({ data }: { data: CategoryOptions }) => {
  const [selectedMenuId, setSelectedMenuId] = useState<CategoryOptions | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = (id: string | null) => {
    setSelectedMenuId(id);
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <HStack w={"35%"} justifyContent={"space-between"}>
      {data.navContents.map((navContent) => (
        <Stack
          key={navContent.header.id}
          justifyContent={"flex-end"}
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
            position="relative"
          >
            <Text fontSize={"xs"} fontWeight={"bold"}>
              {navContent.header.label}
            </Text>
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

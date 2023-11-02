import React, { useState } from "react";
import { HStack, Text } from "@chakra-ui/react";
import DropdownNavItems from "./DropdownNavItems";
import { CategoryOptions } from "../constants/navbarOptionsData";

const NavbarTypeItems = ({ data }: { data: CategoryOptions }) => {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <HStack w={"35%"} justifyContent={"space-between"}>
      {data.navContents.map((navContent, navContentIndex) => (
        <Text
          key={navContentIndex}
          fontSize={"xs"}
          fontWeight={"bold"}
          margin={"0"}
          _hover={{ bgGradient: "linear(to-l, green, orange)", bgClip: "text" }}
          onClick={() => setOpen(!open)}
          position="relative"
        >
          {navContent.header.label}
        </Text>
      ))}
      {open ? <DropdownNavItems data={data} /> : ""}
    </HStack>
  );
};

export default NavbarTypeItems;

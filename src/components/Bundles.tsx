import { ChevronDownIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import BundleMenu from "./BundleMenu";

const Bundles = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <HStack justifyContent={"space-between"} w={"30%"}>
      <HStack
        p={"7px 12px"}
        borderRadius={"15px"}
        _hover={{ bgColor: "#F5F5F5" }}
        position="absolute"
        onClick={() => setOpen(!open)}
      >
        <Text>Bundles</Text>
        <ChevronDownIcon />
      </HStack>
      {open ? <BundleMenu /> : ""}
    </HStack>
  );
};

export default Bundles;

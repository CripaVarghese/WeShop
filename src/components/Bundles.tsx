import { ChevronDownIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import BundleMenu from "./BundleMenu";
import { font } from "../style";
import { bundleData } from "../constants/bundleData";

const Bundles = () => {
  const [selectedMenuId, setSelectedMenuId] = React.useState(null);

  const handleClick = (id: string) => {
    if (selectedMenuId === id) {
      setSelectedMenuId(null); // Close menu if it's already open
    } else {
      setSelectedMenuId(id);
    }
  };
  return (
    <HStack {...font} w={"65%"}>
      <HStack w={"35%"} position="relative">
        {bundleData.menu.map((item) => (
          <>
            <HStack
              p={"7px 12px"}
              key={item.id}
              borderRadius={"15px"}
              _hover={{ bgColor: "#F5F5F5" }}
              onClick={() => handleClick(item.id)}
            >
              <Text>{item.header}</Text>
              <ChevronDownIcon />
            </HStack>
            {selectedMenuId === item.id ? (
              <BundleMenu data={item.menuItem} />
            ) : (
              ""
            )}
          </>
        ))}
      </HStack>
    </HStack>
  );
};

export default Bundles;

// const handleClick = () => {
//   setOpen(!open);
// };

import { ChevronDownIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import BundleMenu from "./BundleMenu";
import { bundleData } from "../../constants/bundleData";

const Bundles = () => {
  const [selectedMenuId, setSelectedMenuId] = React.useState(null);

  const handleClick = (id: string | null) => {
    if (selectedMenuId === id) {
      setSelectedMenuId(null);
    } else {
      setSelectedMenuId(id);
    }
  };

  return (
    <HStack w={"65%"}>
      <HStack position="relative">
        {bundleData.menu.map((item) => (
          <>
            <HStack
              p={"7px 12px"}
              key={item.id}
              borderRadius={"15px"}
              _hover={{ bgColor: "#F5F5F5" }}
              onClick={() => handleClick(item.id)}
            >
              <Text fontSize={"xs"}>{item.header}</Text>
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

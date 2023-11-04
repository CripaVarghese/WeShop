import { Divider, Stack, Text, HStack } from "@chakra-ui/react";
import Sidebar from "./sidebar/Sidebar";
import { font } from "../style";

const Category = () => {
  return (
    <Stack pt={100} w={"100%"}>
      <Stack w={"100%"} alignItems={"center"}>
        <Stack w={"96%"}>
          <HStack>
            <Text {...font}>Home / Clothing /</Text>
            <Text {...font} fontWeight={"bold"}>
              Men T-Shirts
            </Text>
          </HStack>
          <HStack>
            <Text {...font.smBold}>Men T-Shirts</Text>
            <Text fontSize={"sm"} color={"grey"}>
              - 117738 items
            </Text>
          </HStack>
        </Stack>
      </Stack>

      <Stack alignItems={"center"} py={"3"}>
        <HStack justifyContent={"space-between"} w={"96%"}>
          <Text {...font.smBold}>FILTERS</Text>
          <HStack {...font}>
            <Text>Bundles</Text>
            <Text>Country of Origin</Text>
            <Text>Size</Text>
          </HStack>
          <HStack {...font}>
            <Text>Sort by: </Text>
            <Text fontWeight={"bold"}>Recommended</Text>
          </HStack>
        </HStack>
      </Stack>
      <Divider />
      <Stack w={"20%"}>
        <Sidebar />
        {/* <DisplayCategory /> */}
      </Stack>
    </Stack>
  );
};

export default Category;

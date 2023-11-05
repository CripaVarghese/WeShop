import { Divider, Stack, Text, HStack, Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import Sidebar from "./sidebar/Sidebar";
import { font } from "../style";
import DisplayCategory from "./DisplayCategory";

const Category = () => {
  return (
    <Stack pt={100} w={"100%"}>
      <Stack w={"100%"} alignItems={"center"}>
        <Stack w={"96%"} gap={2}>
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

      <Stack alignItems={"center"} py={"2"} pt={"20px"}>
        <HStack justifyContent={"space-between"} w={"96%"}>
          <Text {...font.smBold} w={"17.5%"}>
            FILTERS
          </Text>
          <HStack {...font} w={"65%"}>
            <HStack justifyContent={"space-between"} w={"30%"}>
              <HStack>
                <Text>Bundles</Text>
                <ChevronDownIcon />
              </HStack>
              <HStack>
                <Text>Country of Origin</Text>
                <ChevronDownIcon />
              </HStack>
              <HStack>
                <Text>Size</Text>
                <ChevronDownIcon />
              </HStack>
            </HStack>
          </HStack>
          <Box p={"10px 15px"} border={"1px solid #D7D9DC"} w={"17%"}>
            <HStack {...font} justifyContent={"space-between"}>
              <HStack>
                <Text>Sort by: </Text>
                <Text fontWeight={"bold"}>Recommended</Text>
              </HStack>
              <ChevronDownIcon />
            </HStack>
          </Box>
        </HStack>
      </Stack>
      <Divider />
      <HStack w={"100%"}>
        <Sidebar />
        <Stack height="430px" marginStart="0">
          <Divider orientation="vertical" />
        </Stack>
        <DisplayCategory />
      </HStack>
    </Stack>
  );
};

export default Category;

import { Divider, Stack, Text, HStack, Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Sidebar from "../sidebar/Sidebar";
import DisplayCategory from "./DisplayCategory";
import Recommendation from "./Recommendation";
import { useState } from "react";
import Bundles from "./Bundles";
import { fontStyle } from "../../constants/style";

const Category = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Stack pt={100} w={"100%"}>
      <Stack w={"100%"} alignItems={"center"}>
        <Stack w={"96%"} gap={2}>
          <HStack>
            <Text fontSize={"xs"}>Home / Clothing /</Text>
            <Text {...fontStyle.smBold}>Men T-Shirts</Text>
          </HStack>
          <HStack>
            <Text {...fontStyle.smBold}>Men T-Shirts</Text>
            <Text fontSize={"sm"} color={"grey"}>
              - 117738 items
            </Text>
          </HStack>
        </Stack>
      </Stack>

      <Stack alignItems={"center"} py={"2"} pt={"20px"}>
        <HStack justifyContent={"space-between"} w={"96%"}>
          <Text {...fontStyle.smBold} w={"17.5%"}>
            FILTERS
          </Text>

          <Bundles />

          <Box
            p={"10px 15px"}
            border={"1px solid #D7D9DC"}
            w={"17%"}
            position={"relative"}
            onMouseOver={handleMouseOver}
          >
            <HStack justifyContent={"space-between"}>
              <HStack>
                <Text fontSize={"xs"}>Sort by: </Text>
                <Text {...fontStyle.xsBold}>Recommended</Text>
              </HStack>
              <ChevronDownIcon />
            </HStack>
          </Box>

          {isHovering && <Recommendation onMouseOut={handleMouseOut} />}
        </HStack>
      </Stack>
      <Divider />
      <HStack w={"100%"} alignItems={"flex-start"}>
        <Sidebar />
        <Stack height="500px" marginStart="0">
          <Divider orientation="vertical" />
        </Stack>
        <DisplayCategory />
      </HStack>
    </Stack>
  );
};

export default Category;

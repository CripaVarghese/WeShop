import { Divider, Stack, Text, HStack, Box } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Sidebar from "./sidebar/Sidebar";
import { font } from "../style";
import DisplayCategory from "./DisplayCategory";
import Recommendation from "./Recommendation";
import { useState } from "react";
import { recommendationMenu } from "../constants/recommendation";
import { CategoryOptions } from "../constants/navbarOptionsData";
import Bundles from "./Bundles";

const Category = ({ data }: { data: CategoryOptions }) => {
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
            <Bundles />
          </HStack>
          <Box
            p={"10px 15px"}
            border={"1px solid #D7D9DC"}
            w={"17%"}
            position={"relative"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <HStack {...font} justifyContent={"space-between"}>
              <HStack>
                <Text>Sort by: </Text>
                <Text fontWeight={"bold"}>Recommended</Text>
              </HStack>
              <ChevronDownIcon />
            </HStack>
          </Box>
          {isHovering && <Recommendation data={recommendationMenu} />}
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

import { Box, Checkbox, Flex, Divider, HStack, Text } from "@chakra-ui/react";

const TotalNumber = () => {
  return (
    <Box
      borderWidth={{ base: "1px", md: "0px" }}
      borderRadius={{ base: "lg" }}
      pl={{ base: "4", md: "4" }}
      py="20px"
    >
      <Flex
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
        gap={5}
      >
        <Checkbox fontWeight={"bold"}>
          <Text
            fontSize={{ base: "xs", sm: "xs", md: "xs", lg: "xs", "2xl": "sm" }}
          >
            1/1 ITEMS SELECTED
          </Text>
        </Checkbox>
        <HStack>
          <Text
            fontSize={"11px"}
            fontWeight={"bold"}
            variant={"ghost"}
            color={"#616472"}
          >
            REMOVE
          </Text>
          <Divider orientation="vertical" />
          <Text
            fontSize={"11px"}
            fontWeight={"bold"}
            variant={"ghost"}
            color={"#616472"}
          >
            MOVE TO WISHLIST
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default TotalNumber;

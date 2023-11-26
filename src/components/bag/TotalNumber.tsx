import {
  Box,
  Checkbox,
  Button,
  Flex,
  Divider,
  HStack,
  Text,
} from "@chakra-ui/react";

const TotalNumber = () => {
  return (
    <Box pl={4} py={2}>
      <Flex justify="space-between" mb={4}>
        <Checkbox fontWeight={"bold"}>
          <Text fontSize={"sm"}>1/1 ITEMS SELECTED</Text>
        </Checkbox>
        <HStack>
          <Button
            fontSize={"11px"}
            fontWeight={"bold"}
            mr={2}
            variant={"ghost"}
            color={"#616472"}
          >
            REMOVE
          </Button>
          <Divider orientation="vertical" />
          <Button
            fontSize={"11px"}
            fontWeight={"bold"}
            variant={"ghost"}
            color={"#616472"}
          >
            MOVE TO WISHLIST
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default TotalNumber;

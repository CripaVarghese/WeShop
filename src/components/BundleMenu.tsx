import { HStack, Checkbox, Text } from "@chakra-ui/react";
import { font } from "../style";

const BundleMenu = () => {
  return (
    <HStack
      position="absolute"
      top="230px"
      right="0px"
      height="40px"
      zIndex={"1"}
      backgroundColor="white"
      w="81%"
      pl="30px"
      pb="20px"
      boxShadow="0 10px 10px -10px #000000"
      gap={10}
    >
      <Checkbox size="md" borderColor={"#C8C7CD"} colorScheme="red">
        <Text {...font}>Tshirts</Text>
      </Checkbox>
      <Checkbox size="md" borderColor={"#C8C7CD"} colorScheme="red">
        <Text {...font}>Jeans</Text>
      </Checkbox>
    </HStack>
  );
};

export default BundleMenu;

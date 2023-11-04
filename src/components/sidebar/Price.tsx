import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { categoryStyles, font } from "../../style";

const Price = () => {
  return (
    <Stack
      w={"100%"}
      h={"70px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack w={"80%"}>
        <Text {...categoryStyles.headingStyle}>PRICE</Text>
        <Checkbox size="md" borderColor={"#C8C7CD"} colorScheme="red">
          <Text {...font}>1000-2000</Text>
        </Checkbox>
      </Stack>
    </Stack>
  );
};

export default Price;

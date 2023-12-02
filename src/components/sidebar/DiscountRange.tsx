import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { categoryStyles, fontStyle } from "../../constants/style";

const DiscountRange = () => {
  return (
    <Stack
      w={"100%"}
      h={"70px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack w={"80%"}>
        <Text {...categoryStyles.headingStyle}>DISCOUNT RANGE</Text>
        <Checkbox size="md" borderColor={"#C8C7CD"} colorScheme="red">
          <Text {...fontStyle}>10% and above</Text>
        </Checkbox>
      </Stack>
    </Stack>
  );
};

export default DiscountRange;

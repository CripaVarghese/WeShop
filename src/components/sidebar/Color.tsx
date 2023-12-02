import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { categoryStyles, fontStyle } from "../../style";

const Color = () => {
  return (
    <Stack
      w={"100%"}
      h={"70px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack w={"80%"}>
        <Text {...categoryStyles.headingStyle}>COLOR</Text>
        <Checkbox size="md" borderColor={"#C8C7CD"} colorScheme="red">
          <Text {...fontStyle}>blue</Text>
        </Checkbox>
      </Stack>
    </Stack>
  );
};

export default Color;

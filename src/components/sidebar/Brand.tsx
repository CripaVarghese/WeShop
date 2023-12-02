import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { categoryStyles, fontStyle } from "../../constants/style";

const Brand = () => {
  return (
    <Stack
      w={"100%"}
      h={"70px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack w={"80%"}>
        <Text {...categoryStyles.headingStyle}>BRAND</Text>
        <Checkbox size="md" borderColor={"#C8C7CD"} colorScheme="red">
          <Text {...fontStyle}>Roadster</Text>
        </Checkbox>
      </Stack>
    </Stack>
  );
};

export default Brand;

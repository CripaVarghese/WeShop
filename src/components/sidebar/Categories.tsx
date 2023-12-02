import { Stack, Text, Checkbox } from "@chakra-ui/react";
import { categoryStyles, fontStyle } from "../../constants/style";

const Categories = () => {
  return (
    <Stack
      w={"100%"}
      h={"70px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack w={"80%"}>
        <Text {...categoryStyles.headingStyle}>CATEGORIES</Text>
        <Checkbox size="md" borderColor={"#C8C7CD"} colorScheme="red">
          <Text {...fontStyle}>Tshirts</Text>
        </Checkbox>
      </Stack>
    </Stack>
  );
};

export default Categories;

import { Text } from "@chakra-ui/react";
import { fontStyle } from "../../constants/style";

const SelectedProduct_Wishlisted = () => {
  return (
    <>
      <Text {...fontStyle.smBold}>Urbano Fashion</Text>
      <Text fontSize={"13px"} color={"#535766"} _hover={{ display: "none" }}>
        Slim Tropical Printed Cotton
      </Text>
      <Text {...fontStyle.xsBold} pt={"6px"} position="absolute" top="99%">
        Rs 450
      </Text>
    </>
  );
};

export default SelectedProduct_Wishlisted;

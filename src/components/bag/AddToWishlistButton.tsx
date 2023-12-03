import { HStack, Text } from "@chakra-ui/react";
import AddToWishlistIcon from "../../constants/svg/AddToWishlistIcon";
import { fontStyle } from "../../constants/style";

const AddToWishlistButton = () => {
  return (
    <HStack borderWidth="1px" borderRadius="lg" p={4}>
      <AddToWishlistIcon />
      <Text {...fontStyle.xsBold}>Add More From Wishlist</Text>
    </HStack>
  );
};

export default AddToWishlistButton;

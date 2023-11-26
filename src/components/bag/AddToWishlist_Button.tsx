import { HStack, Text } from "@chakra-ui/react";
import AddToWishlist_Icon from "../../constants/svg/AddToWishlist_icon";

const AddToWishlist_Button = () => {
  return (
    <HStack borderWidth="1px" borderRadius="lg" p={4}>
      <AddToWishlist_Icon />
      <Text fontWeight="bold" fontSize="xs">
        Add More From Wishlist
      </Text>
    </HStack>
  );
};

export default AddToWishlist_Button;

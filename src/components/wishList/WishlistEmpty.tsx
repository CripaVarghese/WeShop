import { Button, Stack, Image, Text } from "@chakra-ui/react";
import wishlist_Empty from "./wishlist_Empty.png";

const WishlistEmpty = () => {
  return (
    <Stack h={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        w={"25%"}
        h={"42%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text fontSize={"lg"} fontWeight={"bold"}>
          YOUR WISHLIST IS EMPTY
        </Text>
        <Text color={"#979BA2"}>
          Add items that you like to your wishlist. Review them anytime and
          easily move them to the bag.
        </Text>
        <Image src={wishlist_Empty} />
        <Button
          colorScheme="blue"
          variant="outline"
          fontWeight={"bold"}
          border="1px solid #3466e8"
          p={"25px 51px"}
        >
          CONTINUE SHOPPING
        </Button>
      </Stack>
    </Stack>
  );
};

export default WishlistEmpty;

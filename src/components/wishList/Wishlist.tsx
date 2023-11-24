import { CiHeart } from "react-icons/ci";
import { Button, Stack, Text } from "@chakra-ui/react";

const Wishlist = () => {
  return (
    <Stack
      w={"14.35%"}
      p={2}
      spacing={1}
      backgroundColor={"white"}
      position={"absolute"}
      top="505px"
    >
      <Button
        w={"100%"}
        borderRadius={"2"}
        leftIcon={<CiHeart size={20} />}
        variant="outline"
        borderColor={"gray.300"}
        fontSize={11}
        padding={"10px"}
      >
        WISHLIST
      </Button>
      <Text fontSize={"13px"} color={"#535766"} pt={"10px"}>
        Sizes:L
      </Text>
      <Text fontSize={"xs"} fontWeight={"bold"}>
        Rs 450
      </Text>
    </Stack>
  );
};

export default Wishlist;

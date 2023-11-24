import { Button, Stack, Image, Text } from "@chakra-ui/react";
import bag_empty from "./bag_empty.png";

const Bag_Page = () => {
  return (
    <Stack h={"85vh"} justifyContent={"center"} alignItems={"center"}>
      <Stack w={"25%"} alignItems={"center"} justifyContent={"space-between"}>
        <Image src={bag_empty} />
        <Stack alignItems={"center"} spacing={1} py="20px">
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Hey, it feels so light!
          </Text>
          <Text fontSize={"xs"} color={"#979BA2"}>
            There is nothing in your bag. Let's add some items.
          </Text>
        </Stack>
        <Button
          color={"#ff3f6c"}
          variant="outline"
          fontSize={"xs"}
          fontWeight={"bold"}
          border="1px solid "
          p={"20px 10px"}
          borderRadius={"none"}
          letterSpacing={1}
        >
          ADD ITEMS FROM WISHLIST
        </Button>
      </Stack>
    </Stack>
  );
};

export default Bag_Page;

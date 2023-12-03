import { Button, Grid, GridItem, Stack, Text, chakra } from "@chakra-ui/react";
import Product from "../category/Product";
import { fontStyle } from "../../constants/style";

const WishlistProdAdded = () => {
  return (
    <Stack w={"100%"} h={"100vh"} alignItems={"center"}>
      <Stack w={"90%"} h={"400px"} gap={10} mt="130px">
        <Text fontWeight={"700"} fontSize={"16px"}>
          My Wishlist{" "}
          <chakra.span color={"#282828"} fontWeight={"normal"} fontSize={"md"}>
            1 item
          </chakra.span>
        </Text>
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={4}
          h={"100%"}
          position={"relative"}
        >
          <GridItem w={"90%"} border={"1px solid #e9e9eb"}>
            <Product />
            <Button
              color={"#ff3f6c"}
              variant={"outline"}
              borderRadius={"none"}
              w="100%"
              mt="25px"
              {...fontStyle.xsBold}
            >
              MOVE TO BAG
            </Button>
          </GridItem>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default WishlistProdAdded;

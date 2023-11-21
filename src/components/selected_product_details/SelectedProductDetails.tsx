import { Grid, GridItem, Stack, Text, chakra } from "@chakra-ui/react";
import SelectedProduct from "./SelectedProduct";
import ProductDetails from "../ProductDetails";

const SelectedProductDetails = () => {
  return (
    <Stack width={"100%"} alignItems={"center"} pt={"90px"}>
      <Stack w="96%">
        <Text fontSize={"xs"} py="20px">
          Home / Clothing / Men Clothing / Tshirts /
          <chakra.span fontWeight={"bold"}>
            Urbano Fashion Tshirts More By Urbano Fashion
          </chakra.span>
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem colSpan={3}>
            <SelectedProduct />
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <ProductDetails />
          </GridItem>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default SelectedProductDetails;

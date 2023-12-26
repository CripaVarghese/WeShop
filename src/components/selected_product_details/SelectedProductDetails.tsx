import { Grid, GridItem, Stack, Text, chakra } from "@chakra-ui/react";
import ImageDetails from "./ImageDetails";
import ProductDetails from "../category/ProductDetails";
import { useLocation } from "react-router-dom";

const SelectedProductDetails = () => {
  const location = useLocation();
  const { data } = location.state;
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
            <ImageDetails data={data} />
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

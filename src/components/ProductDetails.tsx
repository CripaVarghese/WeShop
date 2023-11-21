import { Divider, Stack } from "@chakra-ui/react";
import DeliveryOptions from "./selected_product_details/DeliveryOptions";
import ProductSpec from "./selected_product_details/ProductSpec";
import MainProdDetails from "./selected_product_details/MainProdDetails";

const ProductDetails = () => {
  return (
    <Stack>
      <MainProdDetails />
      <Divider />
      <DeliveryOptions />
      <Divider />
      <ProductSpec />
      <Divider />
    </Stack>
  );
};

export default ProductDetails;

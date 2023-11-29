import { Stack, Center, Divider } from "@chakra-ui/react";
import AddToWishlist_Button from "./AddToWishlist_Button";
import DiscountOffer from "./DiscountOffer";
import PriceDetails from "./PriceDetails";
import ProductInBag from "./ProductInBag";
import TotalNumber from "./TotalNumber";

const Bag_Page = () => {
  return (
    <Stack
      flexDirection={{ base: "column", md: "row" }}
      pt={"130px"}
      pb="50px"
      w={"100%"}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={"center"}
      spacing={2}
    >
      <Stack w={{ base: "85%", sm: "90%", md: "50%", lg: "40%" }}>
        <DiscountOffer />
        <TotalNumber />
        <ProductInBag />
        <AddToWishlist_Button />
      </Stack>
      <Center
        height="50vh"
        px="10px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Divider orientation="vertical" />
        {/* {{ base: "horizontal", md: "vertical" }} */}
      </Center>

      <PriceDetails />
    </Stack>
  );
};

export default Bag_Page;

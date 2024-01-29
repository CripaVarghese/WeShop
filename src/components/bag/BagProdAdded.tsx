import { Stack, Center, Divider } from "@chakra-ui/react";
import AddToWishlistButton from "./AddToWishlistButton";
import DiscountOffer from "./DiscountOffer";
import PriceDetails from "./PriceDetails";
import ProductInBag from "./ProductInBag";
import TotalNumber from "./TotalNumber";
import { useShoppingCart } from "../../context/ShopCartContext";

const BagProdAdded = () => {
  const { bagItems } = useShoppingCart();

  return (
    <Stack
      flexDirection={{ base: "column", md: "row" }}
      pt={"40px"}
      w={"80vw"}
      h="100vh"
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={"center"}
      spacing={2}
    >
      <Stack w="50%">
        {/* w={{ base: "85%", sm: "90%", md: "50%", lg: "40%" }} */}
        <DiscountOffer />
        <TotalNumber />
        {bagItems &&
          bagItems.map((item: { id: any }) => (
            <ProductInBag key={item.id} {...item} />
          ))}

        <AddToWishlistButton />
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

export default BagProdAdded;

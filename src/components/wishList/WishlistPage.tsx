import { Stack } from "@chakra-ui/react";
import { useShoppingCart } from "../../context/ShopCartContext";
import WishlistEmpty from "./WishlistEmpty";
import WishlistProdAdded from "./WishlistProdAdded";

const WishlistPage = () => {
  const { cartItems } = useShoppingCart();
  console.log(cartItems?.length);
  return (
    <Stack>
      {cartItems?.length === 0 ? (
        <WishlistEmpty />
      ) : (
        <WishlistProdAdded cartItems={cartItems} />
      )}
    </Stack>
  );
};

export default WishlistPage;

import { Stack } from "@chakra-ui/react";
import { useShoppingCart } from "../../context/ShopCartContext";
import BagEmpty from "./BagEmpty";
import BagProdAdded from "./BagProdAdded";

const BagPage = () => {
  const { bagItems } = useShoppingCart();

  return (
    <Stack>{bagItems?.length === 0 ? <BagEmpty /> : <BagProdAdded />}</Stack>
  );
};

export default BagPage;

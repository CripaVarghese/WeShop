import { Stack, Image, Button } from "@chakra-ui/react";
import SelectedProductWishlisted from "./SelectedProductWishlisted";
import { imageItems } from "../../constants/imageItems";
import { IoCloseOutline } from "react-icons/io5";
import { useShoppingCart } from "../../context/ShopCartContext";

type CartItemProps = {
  id: number;
};

const ProductInCart = ({ id }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = imageItems.dataItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack position={"relative"}>
      <>
        <Image key={item.id} src={item.url} />
        <Button
          width={2}
          boxSize={10}
          p={0}
          borderRadius={20}
          pos={"absolute"}
          left={"170px"}
          onClick={() => removeFromCart(id)}
        >
          <IoCloseOutline size={20} />
        </Button>
        <Stack px={"10px"} mt={"12px"} spacing={".5px"}>
          <SelectedProductWishlisted display="none" />
        </Stack>
      </>
    </Stack>
  );
};

export default ProductInCart;

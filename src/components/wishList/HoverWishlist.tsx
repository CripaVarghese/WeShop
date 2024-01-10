import { Stack, Button, Text } from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { fontStyle } from "../../constants/style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShopCartContext";

const HoverWishlist = ({ id }: any) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [buttonText, setButtonText] = useState("WISHLIST");
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <Stack
      w={"100%"}
      right={"0.01px"}
      top="89%"
      backgroundColor={"white"}
      position={"absolute"}
      pl="10px"
    >
      <Button
        w="95%"
        borderRadius={"2"}
        leftIcon={
          <CiHeart
            style={{
              color: active ? "#FC8181" : "black",
            }}
            size={25}
          />
        }
        variant="outline"
        borderColor={"gray.300"}
        fontSize={11}
        mt="10px"
        padding={"2px 10px"}
        _hover={{ variant: "ghost", borderColor: "black" }}
        onClick={() => {
          setButtonText(buttonText === "WISHLIST" ? "WISHLISTED" : "WISHLIST");
          setActive(!active);
          increaseCartQuantity(id);
          navigate("/wishlist-page");
        }}
        style={{
          backgroundColor: active ? "rgb(83, 87, 102)" : "white",
          color: active ? "white" : "black",
        }}
      >
        {buttonText}
      </Button>
      <Text fontSize={"13px"}>Sizes: XL</Text>
      <Text {...fontStyle.xsBold} pt={"6px"} position="absolute" top="90%">
        Rs 450
      </Text>
    </Stack>
  );
};

export default HoverWishlist;

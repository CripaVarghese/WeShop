import { Stack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectedProductWishlisted from "./SelectedProductWishlisted";
import HoverWishlist from "../wishList/HoverWishlist";

type CartItemProps = {
  id: number;
  quantity: number;
};

const Product = (
  { mainDetails, data }: any,
  { id, quantity }: CartItemProps
) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleClick = ({ data }: any) => {
    navigate("/selected-product-details", { state: { data } });
  };
  return (
    <Stack
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      position={"relative"}
    >
      <>
        <Image key={data.id} onClick={() => handleClick(data)} src={data.url} />
        <Stack px={"10px"} mt={"12px"} spacing={".5px"}>
          {isHovering ? (
            <HoverWishlist id={data.id} />
          ) : (
            <SelectedProductWishlisted display={undefined} />
          )}
        </Stack>
      </>
    </Stack>
  );
};

export default Product;

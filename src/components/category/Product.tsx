import { Stack, Image, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { fontStyle } from "../../constants/style";
import SelectedProductWishlisted from "./SelectedProductWishlisted";

const Product = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [buttonText, setButtonText] = useState("WISHLIST");
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Stack
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      position={"relative"}
    >
      <Image
        onClick={() => navigate("/selected-product-details")}
        src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg"
      />
      <Stack px={"10px"} mt={"12px"} spacing={".5px"}>
        <Stack>
          {isHovering ? (
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
                  setButtonText(
                    buttonText === "WISHLIST" ? "WISHLISTED" : "WISHLIST"
                  );
                  setActive(!active);
                }}
                style={{
                  backgroundColor: active ? "rgb(83, 87, 102)" : "white",
                  color: active ? "white" : "black",
                }}
              >
                {buttonText}
              </Button>
              <Text fontSize={"13px"}>Sizes: XL</Text>
              <Text
                {...fontStyle.xsBold}
                pt={"6px"}
                // bottom="205px"
                // position={"fixed"}
                position="absolute"
                top="90%"
              >
                Rs 450
              </Text>
            </Stack>
          ) : (
            <SelectedProductWishlisted />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;

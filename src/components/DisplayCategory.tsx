import { Grid, GridItem, Stack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import Wishlist from "./wishList/Wishlist";

const DisplayCategory = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Stack w={"80%"} h={"400px"} p={"20px"}>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={5}
        h={"100%"}
        position={"relative"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <GridItem
          w="100%"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}
        >
          <Image src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg" />
          <Stack px={"10px"} mt={"12px"} spacing={".5px"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Urbano Fashion
            </Text>
            <Text fontSize={"13px"} color={"#535766"}>
              Slim Tropical Printed Cotton
            </Text>
            <Text fontSize={"xs"} fontWeight={"bold"} pt={"6px"}>
              Rs 450
            </Text>
          </Stack>
        </GridItem>
        {/* {isHovering && <Wishlist />} */}
      </Grid>
    </Stack>
  );
};

export default DisplayCategory;

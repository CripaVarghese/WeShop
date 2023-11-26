import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Product from "./Product";

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
          <Product />
        </GridItem>
        {/* {isHovering && <Wishlist />} */}
      </Grid>
    </Stack>
  );
};

export default DisplayCategory;

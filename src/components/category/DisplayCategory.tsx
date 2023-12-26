import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Product from "./Product";
import { imageItems } from "../../constants/imageItems";

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
        {imageItems.dataItems.map((dataItem) => (
          <GridItem
            w="100%"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <Product data={dataItem} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

interface categoryItems {
  id: string;
  url: string;
}
[];

const categoryItems = [
  {
    id: "image1",
    url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg",
  },
  {
    id: "image2",
    url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24014310/2023/7/14/e0d643e5-05bc-4249-833b-0ddf80440f851689274793057BULLMERMenBeigePrintedV-NeckPocketsT-shirt1.jpg",
  },
];
export default DisplayCategory;

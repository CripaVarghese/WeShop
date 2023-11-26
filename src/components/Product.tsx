import { Stack, Image, Text } from "@chakra-ui/react";

const Product = () => {
  return (
    <Stack>
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
    </Stack>
  );
};

export default Product;

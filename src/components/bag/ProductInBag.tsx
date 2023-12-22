import {
  VStack,
  HStack,
  Flex,
  Button,
  Box,
  Text,
  Image,
  chakra,
} from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { fontStyle } from "../../constants/style";
import { imageItems } from "../../constants/imageItems";

type CartItemProps = {
  id: number;
};

const ProductInBag = ({ id }: CartItemProps) => {
  const item = imageItems.dataItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <HStack
        alignItems={"flex-start"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "20px", md: "10px" }}
      >
        <Image w={{ base: "100%", md: "100px" }} key={item.id} src={item.url} />
        <VStack align="stretch" spacing={1}>
          <Text {...fontStyle.xsBold}>Urbano Fashion</Text>
          <Text fontSize="xs">
            Men Teal Green Slim Fit Tropical Printed Pure Cotton T-shirt
          </Text>
          <Text fontSize="10px" color={"#94969f"}>
            Sold by: IMPERIAL ONLINE SERVICES - SJIT
          </Text>
          <HStack
            justify="space-between"
            w={{ base: "65%", md: "100%", lg: "100%" }}
          >
            <Button {...fontStyle.xsBold} size="xs" borderRadius={"sm"}>
              Size: XL
              <IoMdArrowDropdown />
            </Button>
            <Button {...fontStyle.xsBold} size="xs" borderRadius={"sm"}>
              Qty: 1
              <IoMdArrowDropdown />
            </Button>
          </HStack>
          <Flex
            align="center"
            justify="space-between"
            w={{ base: "55%", sm: "25%", md: "70%", lg: "55%", "2xl": "45%" }}
          >
            <Text {...fontStyle.xsBold}>₹ 850</Text>
            <Text as="s" fontSize="xs" color="gray.500">
              ₹ 3,699
            </Text>
            <Text fontSize="xs" color="red.500">
              50% OFF
            </Text>
          </Flex>
          <Text fontWeight="bold" fontSize="12px">
            14 days{" "}
            <chakra.span fontSize={"12px"} fontWeight="normal">
              return available
            </chakra.span>
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProductInBag;

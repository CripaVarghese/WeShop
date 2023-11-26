import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Divider,
  Stack,
} from "@chakra-ui/react";
import ApplyCouponTag_icon from "../../constants/svg/ApplyCouponTag_icon";

const PriceDetails = () => {
  return (
    <Box w={"22%"}>
      <VStack spacing={4} w="100%" alignItems={"flex-start"}>
        <Stack w="100%">
          <Text fontSize="11px" fontWeight="bold" color={"#535766"}>
            COUPONS
          </Text>
          <HStack w="100%" justifyContent={"space-between"}>
            <HStack w="40%" justifyContent={"space-between"}>
              <ApplyCouponTag_icon />
              <Text fontSize="xs" fontWeight="bold">
                Apply Coupons
              </Text>
            </HStack>
            <Button
              variant="outline"
              colorScheme="red"
              color={"rgb(255, 63, 108)"}
              fontSize="11px"
              fontWeight="bold"
              size="xs"
              borderRadius={"none"}
            >
              APPLY
            </Button>
          </HStack>
        </Stack>

        <Divider />
        <VStack spacing={1} alignItems={"flex-start"} w="100%">
          <Stack w="100%">
            <Text fontSize="11px" fontWeight="bold" color="#535766">
              PRICE DETAILS (1 item)
            </Text>
            <HStack fontSize={"xs"} justifyContent="space-between">
              <Text>Total MRP</Text>
              <Text>₹1,099</Text>
            </HStack>
            <HStack fontSize={"xs"} justifyContent="space-between">
              <Text>Discount on MRP</Text>
              <Text color={"green"}>- ₹605</Text>
            </HStack>
            <HStack fontSize={"xs"} justifyContent="space-between">
              <Text>Coupon Discount</Text>
              <Button
                variant="link"
                colorScheme="red"
                fontWeight={"sm"}
                fontSize={"12px"}
              >
                Apply Coupon
              </Button>
            </HStack>
            <HStack fontSize={"xs"} justifyContent="space-between">
              <Text>Platform Fee</Text>
              <Text>₹20</Text>
            </HStack>
            <HStack fontSize={"xs"} justifyContent="space-between">
              <Text>Shipping Fee</Text>
              <Text>FREE</Text>
            </HStack>
          </Stack>
        </VStack>
        <Divider />
        <HStack justifyContent="space-between" w="100%">
          <Text fontSize={"xs"} fontWeight="bold">
            Total Amount
          </Text>
          <Text fontSize={"xs"} fontWeight="bold">
            ₹514
          </Text>
        </HStack>
        <Button
          w="100%"
          borderRadius={"none"}
          colorScheme="white"
          bg={"rgb(255 15 108);"}
          fontSize={"xs"}
          fontWeight="extrabold"
        >
          PLACE ORDER
        </Button>
      </VStack>
    </Box>
  );
};

export default PriceDetails;

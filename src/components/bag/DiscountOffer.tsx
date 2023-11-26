import { Box, Text, Button, VStack, HStack } from "@chakra-ui/react";
import AvailableOffers_icon from "../../constants/svg/AvailableOffers_icon";

const DiscountOffer = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <VStack spacing={2} alignItems={"flex-start"}>
        <HStack>
          <AvailableOffers_icon />
          <Text fontSize="xs" fontWeight="bold">
            Available Offers
          </Text>
        </HStack>

        <Text fontSize="xs">
          10% Instant Discount on RBL Bank Credit Cards on a min spend of Rs
          3,000. TCA
        </Text>
        <Button variant="link" color="#ff3f6c" fontSize="xs">
          Show More
        </Button>
      </VStack>
    </Box>
  );
};

export default DiscountOffer;

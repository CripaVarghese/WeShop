import { fontStyle } from "../../constants/style";
import { Input, Stack, Text } from "@chakra-ui/react";

const DeliveryOptions = () => {
  return (
    <Stack py="20px">
      <Stack>
        <Text {...fontStyle.smBold}>DELIVERY OPTIONS</Text>
        <Input type="text" placeholder="Enter a PIN code"></Input>
        <Text fontSize={"xs"}>
          Please enter PIN code to check delivery time & Pay on Delivery
          Availability
        </Text>
      </Stack>
      <Stack pt={"20px"}>
        {deliveryOptionsArray.data.map((item, index) => (
          <Text key={index} fontSize={"sm"}>
            {item.option}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default DeliveryOptions;

interface deliveryOptionsArrayType {
  data: {
    option: string;
  }[];
}
const deliveryOptionsArray: deliveryOptionsArrayType = {
  data: [
    {
      option: "100% Original Products",
    },
    {
      option: "Pay on delivery might be available",
    },
    {
      option: "Easy 14 days returns and exchanges",
    },
    {
      option: "Try & Buy might be available",
    },
  ],
};

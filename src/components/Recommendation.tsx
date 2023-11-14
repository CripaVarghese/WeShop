import { Stack, Text } from "@chakra-ui/react";
import { recommendationMenuType } from "../constants/recommendation";

const Recommendation = ({ data }: { data: recommendationMenuType }) => {
  return (
    <>
      <Stack
        backgroundColor={"white"}
        position={"absolute"}
        top="222px"
        right="29px"
        w={"16.2%"}
        h={"24%"}
        p={"15px"}
        zIndex={"1"}
        gap={2}
        border={"1px solid #D7D9DC"}
        borderTopColor={"white"}
      >
        {data.menuItems.map((item, itemIndex) => (
          <a href={item.url} key={itemIndex}>
            <Text fontSize={"13px"} fontWeight={"normal"}>
              {item.label}
            </Text>
          </a>
        ))}
      </Stack>
    </>
  );
};

export default Recommendation;

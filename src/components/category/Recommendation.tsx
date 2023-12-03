import { Stack, Text } from "@chakra-ui/react";
import { recommendationMenu } from "../../constants/recommendation";
import { Link } from "react-router-dom";

const Recommendation = ({ onMouseOut }: any) => {
  return (
    <>
      <Stack
        backgroundColor={"white"}
        position={"absolute"}
        top="222px"
        right="29px"
        w={"16.2%"}
        h={"22%"}
        p={"15px"}
        zIndex={"1"}
        gap={2}
        border={"1px solid #D7D9DC"}
        borderTopColor={"white"}
        cursor={"pointer"}
        onMouseOut={onMouseOut}
        onClick={onMouseOut}
      >
        {recommendationMenu.menuItems.map((item, itemIndex) => (
          <Link to={item?.url} key={itemIndex}>
            <Text fontSize={"13px"} fontWeight={"normal"}>
              {/* _hover={{ bg: "grey", cursor: "pointer" }} */}
              {item.label}
            </Text>
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default Recommendation;

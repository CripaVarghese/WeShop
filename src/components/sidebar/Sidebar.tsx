import { Stack, Divider } from "@chakra-ui/react";
import Categories from "./Categories";
import Brand from "./Brand";
import Color from "./Color";
import DiscountRange from "./DiscountRange";
import Price from "./Price";

const Sidebar = () => {
  return (
    <Stack width={"250px"}>
      <Stack>
        <Categories />
        <Divider />
        <Brand />
        <Divider />
        <Price />
        <Divider />
        <Color />
        <Divider />
        <DiscountRange />
      </Stack>
    </Stack>
  );
};

export default Sidebar;

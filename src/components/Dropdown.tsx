import { Box } from "@chakra-ui/react";
import DropdownSubItems from "./DropdownSubItems";

const Dropdown = ({ submenus }: any) => {
  return (
    <Box
      position="absolute"
      top="80px"
      right="100px"
      width="83%"
      height="440px"
      backgroundColor="white"
      p={"20px 40px"}
    >
      <DropdownSubItems submenus={submenus} fontWeight={"bold"} />
    </Box>
  );
};

export default Dropdown;

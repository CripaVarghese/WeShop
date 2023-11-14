import { Stack, Text, Divider } from "@chakra-ui/react";
import { profileMenuType } from "../constants/profileMenu";

const ProfileMenu = ({ data }: { data: profileMenuType }) => {
  return (
    <Stack
      position={"absolute"}
      top="74px"
      right="40px"
      w={"250px"}
      p={"15px"}
      zIndex={"1401"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
    >
      {data.menuItems.map((item) => (
        <>
          {item.category.map((menuItem, menuItemIndex) => (
            <Text key={menuItemIndex} fontSize={"13px"} fontWeight={"normal"}>
              {menuItem.label}
            </Text>
          ))}
          <Divider />
        </>
      ))}
    </Stack>
  );
};

export default ProfileMenu;

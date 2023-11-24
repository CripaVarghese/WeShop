import { Stack, Divider, Text } from "@chakra-ui/react";
import { profileMenu } from "../../constants/profileMenu";

const ProfileDropdown = () => {
  return (
    <Stack
      position={"absolute"}
      top="74px"
      right="40px"
      w={"18%"}
      p={"15px"}
      zIndex={"1401"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      bg={"white"}
    >
      {profileMenu.menuItems.map((item) => (
        <>
          {item.category.map((menuItem) => (
            <Text key={menuItem.id} fontSize={"13px"} fontWeight={"normal"}>
              {menuItem.label}
            </Text>
          ))}
          <Divider />
        </>
      ))}
    </Stack>
  );
};

export default ProfileDropdown;

import { Stack, Divider, Text } from "@chakra-ui/react";
import { profileMenu } from "../../../constants/profileMenu";

const ProfileDropdown = ({ onMouseOut }: any) => {
  return (
    <Stack
      position={"absolute"}
      top="72px"
      right="40px"
      w={"18%"}
      p={"15px"}
      zIndex={"1401"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      bg={"white"}
      onMouseOut={onMouseOut}
      onClick={onMouseOut}
    >
      {profileMenu.menuItems.map((item) => (
        <>
          {item.category.map((menuItem) => (
            <Text
              key={menuItem.id}
              fontSize={"13px"}
              fontWeight={"normal"}
              _hover={{ fontWeight: "700" }}
            >
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

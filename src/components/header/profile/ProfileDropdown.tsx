import { Stack, Divider, Text } from "@chakra-ui/react";
import { profileMenu } from "../../../constants/profileMenu";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
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
    >
      {profileMenu.menuItems.map((item) => (
        <>
          {item.category.map((menuItem) => (
            <Link to={`${menuItem?.url}`} key={menuItem.id}>
              <Text
                fontSize={"13px"}
                fontWeight={"normal"}
                _hover={{ fontWeight: "700" }}
              >
                {menuItem.label}
              </Text>
            </Link>
          ))}
          <Divider />
        </>
      ))}
    </Stack>
  );
};

export default ProfileDropdown;

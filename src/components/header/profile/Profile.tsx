import { Stack, Avatar } from "@chakra-ui/react";
import ProfileDropdown from "./ProfileDropdown";

const Profile = (props: any) => {
  const { isHovering, onMouseOver, onMouseOut } = props;
  return (
    <Stack
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      marginRight={"0.5rem"}
      p="30px 5px"
    >
      <Avatar boxSize="6" />
      {/* <Text fontSize={'xs'}>Profile</Text> */}
      {isHovering ? <ProfileDropdown /> : ""}
    </Stack>
  );
};

export default Profile;

import { Stack, Avatar } from "@chakra-ui/react";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Stack onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Avatar boxSize="6" />
        {/* <Text fontSize={'xs'}>Profile</Text> */}
        {isVisible ? <ProfileDropdown /> : ""}
      </Stack>
    </>
  );
};

export default Profile;

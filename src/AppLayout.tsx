import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

const AppLayout = () => {
  return (
    <Stack flexDirection={"column"} alignItems={"center"} height={"100%"}>
      <Box
        w={"100%"}
        mb={3}
        boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}
        position={"fixed"}
        zIndex={"1"}
        bg="white"
      >
        <Header />
      </Box>

      <Box pt="70px">
        <Outlet />
      </Box>
    </Stack>
  );
};

export default AppLayout;

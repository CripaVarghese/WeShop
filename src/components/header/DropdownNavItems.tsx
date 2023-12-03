import { Stack, Box, Grid, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavItem = (props: {
  data: { url?: string; label: string };
  color?: string;
}) => (
  <Box
    fontSize={"13px"}
    py={"2px"}
    _hover={{ fontWeight: "bold" }}
    marginTop={0}
    color={props.color}
  >
    <Link as={RouterLink} to="/men">
      {props.data.label}
    </Link>
  </Box>
);

const DropdownNavItems = (props: any) => {
  const { data, color, onMouseOut } = props;
  return (
    <Box
      position="absolute"
      top="73px"
      right="100px"
      width="83%"
      height="440px"
      zIndex={"1"}
      backgroundColor="white"
      p={"15px 40px"}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      }
      onMouseOut={onMouseOut}
    >
      <Grid templateColumns="repeat(5, 1fr)">
        {data.map(
          (navColumn: { categories: any[] }, navColumnIndex: string) => (
            <Stack key={navColumnIndex} spacing={0}>
              {navColumn.categories.map(
                (navColumn: { categories: any[] }, navColumnIndex: number) => (
                  <Box key={navColumnIndex}>
                    {navColumn.categories.map(
                      (navGroup: any, navGroupIndex: number) => (
                        <Box key={navGroupIndex} pt={"7px"}>
                          <Box
                            fontSize={"13px"}
                            fontWeight={"bold"}
                            py={"2px"}
                            color={color}
                          >
                            <a href={navGroup.header.url}>
                              {navGroup.header.label}
                            </a>
                          </Box>
                          <Stack spacing={0}>
                            {navGroup.menuItems?.map((navGroupItem: any) => (
                              <Link _hover={{ textDecoration: "none" }}>
                                <NavItem data={navGroupItem} />
                              </Link>
                            ))}
                          </Stack>
                        </Box>
                      )
                    )}
                  </Box>
                )
              )}
            </Stack>
          )
        )}
      </Grid>
    </Box>
  );
};

export default DropdownNavItems;

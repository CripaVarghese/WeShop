import { Stack, Box, Grid, Divider } from "@chakra-ui/react";
import { CategoryOptions } from "../constants/navbarOptionsData";

const NavItem = (props: {
  data: { url?: string; label: any };
  color?: string;
}) => (
  <Box
    fontSize={"13px"}
    py={"2px"}
    _hover={{ fontWeight: "bold" }}
    marginTop={0}
    color={props.color}
  >
    <a href={props.data.url ?? "#"}>{props.data.label}</a>
  </Box>
);

const DropdownNavItems = ({ data }: { data: CategoryOptions }) => {
  return (
    <Box
      position="absolute"
      top="80px"
      right="100px"
      width="83%"
      height="440px"
      backgroundColor="white"
      p={"15px 40px"}
    >
      <Grid templateColumns="repeat(5, 1fr)">
        {data.navContents.map((navContent) =>
          navContent.navColumns.map((navColumn, navColumnIndex) => (
            <Stack key={navColumnIndex} spacing={0}>
              {navColumn.categories.map((navColumn, navColumnIndex) => (
                <Box key={navColumnIndex}>
                  {navColumn.categories.map(
                    (navGroup: any, navGroupIndex: number) => (
                      <Box key={navGroupIndex} pt={"7px"}>
                        <Box
                          fontSize={"13px"}
                          fontWeight={"bold"}
                          py={"2px"}
                          color={"#ee5f73"}
                        >
                          <a href={navGroup.header.url}>
                            {navGroup.header.label}
                          </a>
                        </Box>
                        <Stack spacing={0}>
                          {navGroup.menuItems?.map((navGroupItem: any) => (
                            <NavItem data={navGroupItem} />
                          ))}
                        </Stack>
                      </Box>
                    )
                  )}
                </Box>
              ))}
            </Stack>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default DropdownNavItems;

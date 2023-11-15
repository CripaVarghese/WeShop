import { Stack, Box, Grid } from "@chakra-ui/react";

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

const DropdownNavItems = ({ data, color }: any) => {
  return (
    <Box
      position="absolute"
      top="72px"
      right="100px"
      width="83%"
      height="440px"
      backgroundColor="white"
      p={"15px 40px"}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      }
    >
      <Grid templateColumns="repeat(5, 1fr)">
        {data.map(
          (navColumn: { categories: any[] }, navColumnIndex: string) => (
            <Stack key={navColumnIndex} spacing={0}>
              {navColumn.categories.map(
                (navColumn: { categories: any[] }, navColumnIndex: string) => (
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
                              <NavItem data={navGroupItem} />
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

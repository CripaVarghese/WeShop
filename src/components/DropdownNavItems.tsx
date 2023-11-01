import { Stack, Box, Grid, Divider} from '@chakra-ui/react'

const DropdownNavItems = ({data}:any) => {
  return (
    <Box position='absolute' top='80px' right='100px' width='83%' height='440px' backgroundColor='white' p={'15px 40px'}>
          <Grid templateColumns='repeat(5, 1fr)'>
            {data.navColumns.map((navColumns, navColumnsIndex) => (
              <Stack key={navColumnsIndex} spacing={0}>
                {navColumns.categories.map((navColumn, navColumnIndex) => (
                  <Box key={navColumnIndex}>
                    {navColumn.categories.map((navGroup, navGroupIndex) => (
                    <Box key={navGroupIndex} pt={'7px'}>
                      <Box fontSize={'13px'} fontWeight={'bold'} py={'2px'} color={"#ee5f73"}>
                        <a href={navGroup.header.url}>{navGroup.header.label}</a>
                      </Box>
                      <Stack spacing={0}>
                          {navGroup.menuItems?.map((navGroupItem: { url: string | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }, navGroupItemIndex: Key | null | undefined) => (
                            <Box key={navGroupItemIndex} fontSize={'13px'} py={'2px'} _hover={{ fontWeight: 'bold' }} marginTop={0}>
                              <a href={navGroupItem.url}>{navGroupItem.label}</a>
                            </Box>
                          ))}
                      {navGroup.menuItems? <Divider  w={"60%"} p={'5px'} /> : ""}
                      </Stack>
                    </Box>
                    ))}
                  </Box>
                ))}
              </Stack>
            ))}
          </Grid>
        </Box>
  )
}

export default DropdownNavItems


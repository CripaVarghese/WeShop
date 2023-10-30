import React, {useState} from 'react'
import {
  HStack,
  Stack,
  Text, Box
} from '@chakra-ui/react'
import Dropdown from './Dropdown'

const NavbarTypeItems= ({data}:any) => {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <HStack w={'35%'} justifyContent={'space-between'}>
      {data.header.map((navItems, navItemsIndex) => (
      <Text key={navItemsIndex} fontSize={'xs'} fontWeight={'bold'}  margin={'0'}  _hover={{ bgGradient:'linear(to-l, green, orange)', bgClip:'text' }}
        onClick={() => setOpen((!open))} position='relative'>{navItems.label}</Text>
      ))}
        {open ? (
          <Box position='absolute' top='80px' right='100px' width='83%' height='440px' backgroundColor='white' p={'20px 40px'}>
          <Stack>
            {data.navGrid.map((navGroups, navGroupsIndex) => (
              <Stack key={navGroupsIndex}>
                {navGroups.categories.map((navGroup, navIndex) => (
                  <Stack key={navIndex}>
                    <Stack fontSize={'13px'} py={'2px'} _hover={{ fontWeight: 'bold' }} >
                      <a href={navGroup.header.url}>{navGroup.header.label}</a>
                    </Stack>
                    <>
                      {navGroup.menuItems.map((navGroupItem, navGroupItemIndex) => (
                      <HStack key={navGroupItemIndex} fontSize={'13px'} py={'2px'} _hover={{ fontWeight: 'bold' }} >
                        <a href={navGroupItem.url}>{navGroupItem.label}</a>
                      </HStack>
                      ))}
                    </>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Box>
        ) : ""}
    </HStack>
  )
}

export default NavbarTypeItems
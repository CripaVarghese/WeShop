import React, {useState} from 'react'
import {
  HStack,
  Stack,
  Text, Box
} from '@chakra-ui/react'
import DropdownNavItems from './DropdownNavItems';

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
        <DropdownNavItems data={data}/>
        ) : ""}
    </HStack>
  )
}

export default NavbarTypeItems
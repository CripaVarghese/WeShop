import React, {useState} from 'react'
import {
  HStack,
  Text,
} from '@chakra-ui/react'
import { navbarItems } from '../constants/navbarItems'
import Dropdown from './Dropdown'

const NavbarTypeItems = () => {
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = React.useState(false);

  
  
  return (
    <HStack w={'35%'} justifyContent={'space-between'}>
                  {
                    navbarItems.map((menu, index) => {
                      return(
                        <>
                        {menu.submenu ? (
                            <>
                              <Text key={index} fontSize={'xs'} fontWeight={'bold'}  margin={'0'}  _hover={{ bgGradient:'linear(to-l, green, orange)', bgClip:'text' }}
                                onClick={() => setOpen((!open))} position='relative'
                              >
                                {menu.label}
                              </Text>
                              {open ?
                                <Dropdown submenus={menu.submenu} dropdown={dropdown} />
                                :
                                ""}
                            </>
                          ):
                          <a href={menu.link}>
                            <Text key={index} fontSize={'xs'} fontWeight={'bold'}  margin={'0'}  _hover={{ bgGradient:'linear(to-l, green, orange)', bgClip:'text' }}
                            >
                              {menu.label}
                            </Text>
                          </a>
                        }
                        </>
                      )
                    })
                  }
    </HStack>
  )
}

export default NavbarTypeItems
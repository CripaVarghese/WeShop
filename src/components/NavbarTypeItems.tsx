import React, {useState} from 'react'
import {
  HStack,
  Text,
} from '@chakra-ui/react'
import { navbarItems } from '../constants/navbarItems'
import Dropdown from './Dropdown'

const NavbarTypeItems = () => {
  const [dropdown, setDropdown] = useState(false);
  
  return (
    <HStack w={'35%'} justifyContent={'space-between'}>
                  {
                    navbarItems.map((menu, index) => {
                      return(
                      <Text key={index} fontSize={'xs'} fontWeight={'bold'}  margin={'0'}  _hover={{ bgGradient:'linear(to-l, green, orange)', bgClip:'text' }} onClick={() => setDropdown((prev) => !prev)}
                      >
                        {menu.submenu ? (
                            <>
                              <button
                                aria-expanded={dropdown ? "true" : "false"}
                                onClick={() => setDropdown((prev) => !prev)}
                              >
                                {menu.title}
                              </button>
                                <Dropdown submenus={menu.submenu} dropdown={dropdown} />
                            </>
                          ):
                          <a href={menu.url}>{menu.title}</a>
                          }
                      </Text>
                      )
                    })
                  }
    </HStack>
  )
}

export default NavbarTypeItems
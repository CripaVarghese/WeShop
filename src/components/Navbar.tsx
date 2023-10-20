import { Flex, HStack, Icon, ButtonGroup, Button, InputGroup, InputLeftElement, Input, IconButton, Drawer, DrawerOverlay, Avatar, Text, Box, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/Gi'
import { HiShoppingBag } from 'react-icons/Hi'
import { useNavigate } from 'react-router-dom'
import DrawerContentDisplay from './DrawerContentDisplay'
import data from '../data.json'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [filter, setFilter] = useState(data)

  const navigate = useNavigate();
  const buttons= ['All','Men','Women','Kids', 'Home and Living', 'Beauty']

    const handleClick = (event:any) => {
      const title = event.target.title;
      navigate(`/${title}`);
      return <title />
    };
  return (
    <Box position={'fixed'} width={'100%'} bg={'white'} zIndex='1'>
    <Flex justifyContent={'space-between'} py={{ base: '3', lg: '4' }} px={'10'} justifyItems={'center'} shadow={'lg'}>
        <HStack spacing="4" flexDirection={{ base: 'column', sm:'row' }}>
          <HStack fontSize="md">
            <Icon as={GiShoppingCart} fontSize="2xl" 
              fontWeight='extrabold' />
            <Text m="0" p='0' bgGradient='linear(to-l, #7928CA, #FF0980)' bgClip='text' fontSize='2xl'
              fontWeight='extrabold'>WeShop</Text>
          </HStack>
          <ButtonGroup variant="ghost" spacing="1" >
            {
              buttons.map((button, index) => {
                return(
                  <Button onClick={handleClick} title={button} key={index} _hover={{ bgGradient:'linear(to-l, green, orange)', bgClip:'text' }}>{button}</Button>
                )
              })
            }
          </ButtonGroup>
          <InputGroup maxW="xs">
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="muted" boxSize="5" />
            </InputLeftElement>
              <Input width={'30rem'} placeholder="Search for products" />
          </InputGroup>
        </HStack>
        <HStack spacing="4">
          <ButtonGroup variant="ghost" spacing="1">

            <IconButton icon={<FaShoppingCart fontSize="1.25rem" onClick={onOpen}  />} aria-label="" title="Add to cart" _hover={{ bgGradient:'linear(to-r, yellow.500, green.500)', color:'white'}} />
              <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContentDisplay />
            </Drawer>  

            <IconButton icon={<HiShoppingBag fontSize="1.50rem" />} aria-label="" title="Orders" _hover={{ bgGradient:'linear(to-r, teal.500, pink.500)', color:'white'}}  />
          </ButtonGroup>
          <Avatar boxSize="10"  />
        </HStack>
    </Flex>
  </Box>
  )
}

export default Navbar
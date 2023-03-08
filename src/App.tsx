import {
  Box,
  Stack,
  SimpleGrid,
  Card,
  Avatar,
  Button,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  InputLeftElement,
  Input,
  InputGroup
} from '@chakra-ui/react'
import data from './data.json'
import ShoppingCartProvider from './context/ShoppingCartContext'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/Gi'
import { HiShoppingBag } from 'react-icons/Hi'
import CardContents from './components/CardContents'
import DrawerContentDisplay from './components/DrawerContentDisplay'

function App(  ) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [filter, setFilter] = useState(data)

  const buttons= ['Men','Women','Kids', 'Home and Living', 'Beauty']

  const handleAllClick = () => {
    setFilter(data)
}

  const handleClick = (event:any) => {
    const title = event.target.title;
    const items = data.filter(item => item.type === title)
    setFilter(items);
  };

  return (
    <ShoppingCartProvider>
      <Box>
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
                  <Button onClick={handleAllClick} _hover={{ bgGradient:'linear(to-l, green, brown)', bgClip:'text' }}>All</Button>
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
    
        <Box as="section" pb={{ base: '12', md: '60' }} pt={{md:'20 '}} bgGradient="radial(gray.300, yellow.400, pink.200)">
            <Box boxShadow="sm" py={4}>
              <Box>
                  <Stack py={'20'} px={'10'} alignItems='center'>
                    <SimpleGrid columns={{sm: 2, md: 2, lg: 3, xl: 4, '2xl':6}} spacing={'10'}>
                      {
                      filter.map((item, index) => (
                        <Card maxW='sm' key={item.id} h='auto'>
                      <CardContents {...item} />
                      </Card>
                      ))
                  }
                    </SimpleGrid>
                  </Stack>
              </Box>
            </Box>
        </Box>
      </Box>
  </ShoppingCartProvider>
  )
}

export default App



  {/* w={{ base:'sm', sm:'xl', lg:'2xl' }} */}
   



       



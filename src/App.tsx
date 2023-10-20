import {
  Box,
  Stack,
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
import { HiOutlineShoppingBag } from 'react-icons/Hi'
import DrawerContentDisplay from './components/DrawerContentDisplay'

function App(  ) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [filter, setFilter] = useState(data)

  const navbarItems= ['MEN','WOMEN','KIDS', 'HOME & LIVING', 'BEAUTY', 'STUDIO']

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
        <Box w={'100%'} position={'fixed'} bg={'white'} zIndex='1' shadow={'lg'} display={'flex'} justifyContent={'center'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px'}>
          <Stack flexDirection={{ base: 'column', sm:'row' }} justifyContent={'space-between'} alignItems={'center'} h={'20'} w={'95%'}>
                <HStack fontSize="md">
                  <Text m="0" p='0' bgGradient='linear(to-l, #7928CA, #FF0980)' bgClip='text' fontSize='2xl'
                    fontWeight='extrabold'>WeShop</Text>
                </HStack>
                <ButtonGroup variant="ghost">
                  {
                    navbarItems.map((item, index) => {
                      return(
                        <Button  marginTop={'0'} fontSize={'xs'} fontWeight={'bold'} onClick={handleClick} title={item} key={index} _hover={{ bgGradient:'linear(to-l, green, orange)', bgClip:'text' }}>{item}</Button>
                      )
                    })
                  }
                </ButtonGroup>
                <InputGroup w="md" backgroundColor='#F5F4F7' borderColor='#F5F4F7' borderRadius={'3px'}>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="muted" boxSize="5" />
                  </InputLeftElement>
                    <Input width={'30rem'} fontSize={'xs'} placeholder="Search for products, brands and more" />
                </InputGroup>
              {/* </HStack> */}
              <HStack >
                <ButtonGroup variant="ghost" display={'flex'} alignItems={'center'}>
                  <Stack>
                    <Avatar boxSize="6"  />
                    <Text>Profile</Text>
                  </Stack>
                  <Stack>
                    <IconButton icon={<FaShoppingCart m={'0'}  fontSize="1.25rem" onClick={onOpen}  />}  aria-label="" title="Add to cart" _hover={{ bgGradient:'linear(to-r, yellow.500, green.500)', color:'white'}} />
                    <Text>Profile</Text>
                  </Stack>
                  <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                  >
                    <DrawerOverlay />
                    <DrawerContentDisplay />
                  </Drawer> 
                  <Stack>
                    <IconButton icon={<HiOutlineShoppingBag fontSize="1.50rem" />} aria-label="" title="Orders" _hover={{ bgGradient:'linear(to-r, teal.500, pink.500)', color:'white'}}  />
                    <Text>Profile</Text>
                  </Stack>
                 
                   
                </ButtonGroup>
              </HStack>
          </Stack>
        </Box>
  </ShoppingCartProvider>
  )
}

export default App



  {/* w={{ base:'sm', sm:'xl', lg:'2xl' }} */}
   
  {/* py={{ base: '3', lg: '4' }} px={'10'}  */}

  {/* <Button onClick={handleAllClick} _hover={{ bgGradient:'linear(to-l, green, brown)', bgClip:'text' }}>All</Button> */}



  // <Box as="section" w={'100%'} pt={{md:'20'}} display={'flex'} justifyContent='center'>
    //     <AppContent filter={filter}/>
  // </Box>
       



import {
  Box,
  Stack,
  Avatar,
  Button,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  InputLeftElement,
  Input,
  InputGroup,
  
} from '@chakra-ui/react'
import data from './data.json'
import ShoppingCartProvider from './context/ShoppingCartContext'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/Hi'
import DrawerContentDisplay from './components/DrawerContentDisplay'
import Hero from './components/Hero'
import Footer from './components/Footer'
import NavbarTypeItems from './components/NavbarTypeItems'
import {navbarOptionsData} from './constants/navbarOptionsData'
import Navbar from './components/Header'
import Header from './components/Header'

function App(  ) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [filter, setFilter] = useState(data)

  return (
    <ShoppingCartProvider>
        <Header />
        <Hero />
        <Footer />
    </ShoppingCartProvider>
  )
}

export default App






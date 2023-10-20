import {
  Box,
  Stack
} from '@chakra-ui/react'
import data from '../data.json'
import ShoppingCartProvider from '../context/ShoppingCartContext'
import { ReactNode, useState } from 'react'
import Navbar from './Navbar'
import { Route } from 'react-router-dom'
import All from './buttonComponents/All'
import Men from './buttonComponents/Men'
import Women from './buttonComponents/Women'
import Kids from './buttonComponents/Kids'
import HomeAndLiving from './buttonComponents/HomeAndLiving'
import Beauty from './buttonComponents/Beauty'

const Shopping = () => {
  const [filter, setFilter] = useState(data)
  const buttons= ['Men','Women','Kids', 'Home and Living', 'Beauty']
  type routesType = {
    path: string;
    exact: boolean;
    element: () => JSX.Element;
  }[]
  
  const routes:routesType = [
    {
      path: '/All',
      exact: true,
      element: All
    },
    {
      path: '/Men',
      exact: true,
      element: Men
    },
    {
    path: '/Women',
    exact: true,
    element: Women
  },
  {
    path: '/Kids',
    exact: true,
    element: Kids
  },
  {
    path: '/Home And Living',
    exact: true,
    element: HomeAndLiving
  },
  {
    path: '/Beauty',
    exact: true,
    element: Beauty
  }
  ]

  return (
    <ShoppingCartProvider>
        <Navbar />
        <Box as="section" pb={{ base: '12', md: '60' }} pt={{md:'20 '}} bgGradient="radial(gray.300, yellow.400, pink.200)" boxShadow="sm" py={4}>
                  <Stack py={'20'} px={'10'} alignItems='center'>
                    <Box as="section" pb={{ base: '12', md: '60' }} bgGradient="radial(gray.300, yellow.400, pink.200)" boxShadow="sm">
                          <Stack alignItems='center'>
                              {routes.map((route, index):ReactNode => (
                                <Route key={index} path={route.path} element={<route.element />} />
                              ))}
                          </Stack>
                    </Box>
                  </Stack>
        </Box>
  </ShoppingCartProvider>
  )
}

export default Shopping;



   



       




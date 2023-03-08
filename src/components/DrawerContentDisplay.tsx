import { DrawerContent, DrawerCloseButton, DrawerHeader, Divider, DrawerBody, Stack } from '@chakra-ui/react'
import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'

const DrawerContentDisplay = () => {
  const { cartItems } = useShoppingCart()
  return (
    <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader bgGradient='linear(to-l, green, brown)' bgClip='text'>Your Cart</DrawerHeader>
    <Divider />
    <DrawerBody>
      <Stack>
        {cartItems.map(cartItem => (                       
           <CartItem key={cartItem.id} quantity={cartItem.quantity} id={cartItem.id}  />
        ))}
      </Stack>
    </DrawerBody>

   
  </DrawerContent>
  )
}

export default DrawerContentDisplay
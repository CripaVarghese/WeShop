import { Stack, Image,Text, Heading, Divider } from '@chakra-ui/react';
import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import data from "../data.json"
import { MdDeleteForever } from 'react-icons/Md';


type CartItemProps ={
  id: number;
  quantity: number;
}

const CartItem = ( {id,quantity }: CartItemProps) => {
  const { removeItemQuantity } =useShoppingCart()
  const item=data.find(item => item.id === id);
  if( item==null) {
    return null
  }
  return (
    <Stack pt='5'>
        <Image
          src={item.image}
          borderRadius='lg'
          w='50'
          h='60'
          objectFit="cover" 
          />
        <Stack mt='0' spacing='3'>
          <Stack  alignItems={'flex-start'} justifyContent={'space-between'}>
            <Heading size='md'>{item.name}</Heading>
            <Stack direction={'row'} justifyContent='space-between' w='full' >
              <Text fontSize='md' fontWeight='semibold'>
                Rs{item.price}  * {quantity} = Rs{ item.price * quantity }
              </Text>
              <MdDeleteForever fontSize="1.50rem" color='red' onClick={() => removeItemQuantity(item.id)} />
            </Stack>
          </Stack>
          <Divider />
        </Stack>
    </Stack>
  )
}

export default CartItem
import { CardBody, Stack, Heading, CardFooter, ButtonGroup, Button, Text,Image, Flex } from '@chakra-ui/react'
import { useShoppingCart } from '../context/ShoppingCartContext'

export type DataType = {
  id: number,
  image:string,
  name: string,
  price: number, 
  description:string,
}

const CardContents = ({ id,image, name,price, description }: DataType) => {

  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity } = useShoppingCart()
  const quantity=getItemQuantity(id);
  return (
    <>
      <CardBody h='auto'>
        <Image
          src={image}
          alt={name}
          borderRadius='lg'
          maxH={'300'}
          minW='100%'
          objectFit="cover" />
        <Stack mt='6' spacing='3'>
          <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
            <Heading size='md'>{name}</Heading>
            <Text color='blue.600' fontSize='xl'>
              Rs{price}
            </Text>
          </Stack>
          <Text h='auto'>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
          <ButtonGroup spacing='4'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            {
              quantity ===0 ? (<Button variant='ghost' colorScheme='blue' border={'1px solid blue'} onClick={() => { increaseItemQuantity(id)}}>
              Add to cart
            </Button> ) :  (<><Button onClick={() => { decreaseItemQuantity(id)}}>-</Button><Flex alignItems={'center'}>{quantity}</Flex><Button onClick={() => { increaseItemQuantity(id)}}>+</Button> 
            </>)
            }
          </ButtonGroup>
      </CardFooter>
    </>
  )
}

export default CardContents
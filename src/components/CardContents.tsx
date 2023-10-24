import { CardBody, Stack, Heading, CardFooter, ButtonGroup, Button, Text,Image, Flex, Container } from '@chakra-ui/react'
import { useShoppingCart } from '../context/ShoppingCartContext'

export type DataType = {
  id: number,
  image:string,
  name: string,
  price: number, 
  description:string,
}

const CardContents = ({ id,image, name,price }: DataType) => {

  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity } = useShoppingCart()
  const quantity=getItemQuantity(id);
  return (
    <Container p={'20px'}>
      <CardBody h='auto' p={0}>
        <Image
          src={image}
          alt={name}
          borderRadius='lg'
          height={'200'}
          width='100%'
          objectFit="cover" />
        <Stack mt='6' spacing='3'>
          <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
            <Heading size='md'>{name}</Heading>
            <Text color='blue.600' fontSize='xl'>
              Rs{price}
            </Text>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter p={'0'} display={'flex'} justifyContent={'center'}>
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
    </Container>
  )
}

export default CardContents
import {  SimpleGrid, Card } from '@chakra-ui/react'
import React from 'react'
import data from '../../data.json'
import CardContents from '../CardContents'

const Women = () => {
    const items = data.filter(item => item.type === 'Women')
  return (
            <SimpleGrid columns={{sm: 2, md: 2, lg: 3, xl: 4, '2xl':6}} spacing={'10'}>
              {
              items.map((item, index) => (
                <Card maxW='sm' key={item.id} h='auto'>
              <CardContents {...item} />
              </Card>
              ))
          }
            </SimpleGrid>
  )
}

export default Women
import { Card, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import data from '../../data.json'
import CardContents from '../CardContents'

const All = () => {
  const [filter, setFilter] = useState(data)
  return ( 
            <SimpleGrid columns={{sm: 2, md: 2, lg: 3, xl: 4, '2xl':6}} spacing={'10'}>
              {
              filter.map((item, index) => (
                <Card maxW='sm' key={item.id} h='auto'>
              <CardContents {...item} />
              </Card>
              ))
          }
            </SimpleGrid>
  )
}

export default All
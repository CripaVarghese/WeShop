import { Stack, SimpleGrid, filter, Card,  Box } from '@chakra-ui/react'
import React from 'react'
import CardContents, { DataType } from './CardContents'

const AppContent = ({filter}:any) => {
  return (
              <Box as="section" w={'80%'}>
                    <SimpleGrid columns={{sm: 2, md: 2, lg: 3, xl: 4, '2xl':6}} spacing={'10'}>
                      {
                      filter.map((item: JSX.IntrinsicAttributes & DataType) => (
                        <Card maxW='sm' key={item.id} boxShadow={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}>
                          <CardContents {...item} />
                      </Card>
                      ))
                  }
                    </SimpleGrid>
              </Box> 
         )
}

export default AppContent
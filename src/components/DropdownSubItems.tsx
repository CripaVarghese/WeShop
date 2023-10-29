import React from 'react'
import {
  Box, Text,Grid, GridItem, Stack
} from '@chakra-ui/react'
import DropdownGrid from './DropdownGrid'

const DropdownSubItems = ({submenus,fontWeight}:any) => {
  return (
    <div>
       {submenus.map((submenu, index) => (
           <Stack>
              <>
               <Stack key={index} color={submenu.color} fontWeight={fontWeight} fontSize={'13px'} py={'2px'} _hover={{ fontWeight: 'bold' }} >
                  <a href={submenu.url}>{submenu.label}</a>
               </Stack>
               {submenu && <DropdownGrid submenus={submenu.submenu} />}
              </>
            </Stack>
        ))}
    </div>
  )
}

export default DropdownSubItems
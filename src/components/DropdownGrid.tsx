import React from 'react'
import { Stack
} from '@chakra-ui/react'

const DropdownGrid = ({submenus}:any) => {
  return (
    <div>
        {submenus.map((submenu, index) => (
      <Stack key={index} color={submenu.color} fontSize={'13px'} py={'2px'} _hover={{ fontWeight: 'bold' }} >
          <a href={submenu.url}>{submenu.label}</a>
      </Stack>
       ))}
    </div>
  )
}

export default DropdownGrid
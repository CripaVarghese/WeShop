import {
  Box, Text,Grid, GridItem, Stack
} from '@chakra-ui/react'


const Dropdown = ({submenus}:any) => {
  return (
    <Box position='absolute' top='80px' right='100px' width='83%' height='440px' backgroundColor='white' p={'20px 40px'}>
        {submenus.map((submenu, index) => (
               <Stack key={index} _hover={{ fontWeight:'bold' }} fontSize={'13px'} py={'2px'}>
                 <a href={submenu.url}>{submenu.label}</a>
               </Stack>
        ))}
    </Box>
  )
}

export default Dropdown
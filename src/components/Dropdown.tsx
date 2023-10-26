import {
  Box,
} from '@chakra-ui/react'


const Dropdown = ({submenus, dropdown}:any) => {
  return (
    <Box>
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index}>
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    </Box>
  )
}

export default Dropdown
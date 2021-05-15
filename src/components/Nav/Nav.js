import { useState } from 'react'
import NavItem from './NavItem'
import { StyledList, StyledNav } from '../../styled/StyledNav'

const Nav = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: 'Główna',
      active: true
    },
    {
      id: 2,
      name: 'Zadania',
      active: false
    },
    {
      id: 3,
      name: 'Kalendarz',
      active: false
    },
    {
      id: 4,
      name: 'Notatnik',
      active: false
    }
  ])

  const toggleItemActive = (id) => {
    setMenu(menu.map((item) => item.id === id ? { ...item, active: true } : { ...item, active: false }))
  }

  return (
    <StyledNav>
      <StyledList>
        {menu.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            onToggleItemActive={toggleItemActive}
          />
        ))}
      </StyledList>
    </StyledNav>
  )
}

export default Nav

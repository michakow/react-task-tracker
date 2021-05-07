import { StyledButton, StyledItem } from "../styled/StyledNav"

const NavItem = ({ item, onToggleItemActive }) => {
  return (
    <StyledItem onClick={() => {onToggleItemActive(item.id)}}>
      <StyledButton>{item.name}</StyledButton>
      <p>
        Aktywne: {item.active ? 'yes' : 'no'}
      </p>
    </StyledItem>
  )
}

export default NavItem

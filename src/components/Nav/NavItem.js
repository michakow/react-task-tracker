import ItemIcon from './ItemIcon'
import { StyledButton, StyledItem } from '../../styled/StyledNav'

const NavItem = ({ item, onToggleItemActive }) => {
  return (
    <StyledItem
      activeItem={item.active}
      onClick={() => { onToggleItemActive(item.id) }}
    >
      <ItemIcon itemID={item.id} />
      <StyledButton>{item.name.toUpperCase()}</StyledButton>
    </StyledItem>
  )
}

export default NavItem

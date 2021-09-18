import { Link } from 'react-router-dom'
import ItemIcon from './ItemIcon'
import { StyledButton, StyledItem } from '../../styled/StyledNav'

const NavItem = ({ item, onToggleItemActive }) => {
  return (
    <Link to={item.pathName}>
      <StyledItem
      activeItem={item.active}
      onClick={() => { onToggleItemActive(item.id) }}
      >
        <ItemIcon itemID={item.id} />
        <StyledButton>{item.name.toUpperCase()}</StyledButton>
      </StyledItem>
    </Link>
    
  )
}

export default NavItem

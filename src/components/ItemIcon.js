import { IoHome } from 'react-icons/io5'
import { GoTasklist } from 'react-icons/go'
import { IoCalendar } from 'react-icons/io5'
import { ImBook } from 'react-icons/im'
import { StyledIcon } from '../styled/StyledNav';

const ItemIcon = ({ itemID }) => {
  switch (itemID) {
    case 1:
      return <StyledIcon color="red"><IoHome /></StyledIcon>
    case 2:
      return <StyledIcon><GoTasklist /></StyledIcon>
    case 3:
      return <StyledIcon><IoCalendar /></StyledIcon>
    case 4:
      return <StyledIcon><ImBook /></StyledIcon>
    default:
      return ""
  }
}

export default ItemIcon

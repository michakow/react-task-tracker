import { StyledHeader, StyledIcon, StyledTitle } from "../styled/StyledHeader"

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledTitle><StyledIcon /> {title}</StyledTitle>
    </StyledHeader>
  )
}

export default Header

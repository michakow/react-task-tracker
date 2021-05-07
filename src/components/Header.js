import { StyledHeader, StyledIcon, StyledTitle } from "../styled/StyledHeader"

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledIcon /> 
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  )
}

export default Header

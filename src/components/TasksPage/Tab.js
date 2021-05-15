import { StyledIcon, StyledTab, StyledTabName } from '../../styled/StyledTab'

const Tab = ({ title, onAction, show }) => {
  return (
    <StyledTab onClick={onAction} show={show}>
      <StyledTabName>{title}</StyledTabName>
      <StyledIcon show={show} />
    </StyledTab>
  )
}

export default Tab

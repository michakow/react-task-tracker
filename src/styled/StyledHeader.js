import styled from 'styled-components'
import { CgNotes } from 'react-icons/cg'

export const StyledHeader = styled.header`
  display: flex;
  padding: 0 20px;
  background-color: #141418;
`

export const StyledTitle = styled.h1`
  font-size: 26px;
  color: #b6b6b6;
`
export const StyledIcon = styled(CgNotes)`
  font-size: 30px;
  vertical-align: middle;
  margin-right: 5px;
`
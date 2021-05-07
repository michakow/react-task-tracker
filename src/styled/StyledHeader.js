import styled from 'styled-components'
import { CgNotes } from 'react-icons/cg'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  color: #b6b6b6;
  background-color: #141418;
`

export const StyledTitle = styled.h1`
  font-size: 26px;
`
export const StyledIcon = styled(CgNotes)`
  font-size: 30px;
  margin-right: 10px;
`
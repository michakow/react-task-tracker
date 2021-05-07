import styled from 'styled-components'

export const StyledNav = styled.nav`
  
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const StyledItem = styled.li`
  &:hover{
    background-color: red;
  }
`

export const StyledButton = styled.a`
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  cursor: pointer;   
`
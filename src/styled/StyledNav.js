import styled, { css } from 'styled-components'

export const StyledNav = styled.nav`

`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const StyledItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  color: #b6b6b6;
  cursor: pointer;

  ${(props) => props.activeItem && css`
    color: #ececec;
    background-color: #141418;
  `}

  &:hover{
    background-color: #141418;
  }
`

export const StyledButton = styled.a`
  display: block;
  font-size: 18px;
  text-decoration: none;
  letter-spacing: 1px;
`

export const StyledIcon = styled.div`
  margin-right: 10px;
  font-size: 25px;
`
import { FaTimes } from 'react-icons/fa'
import styled, { css } from 'styled-components'

export const StyledBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`

export const StyledButton = styled.button`
  margin: 3px;
  font-size: 16px;
  color: #00ace6;
  background-color: unset;
  border: none;
  cursor: pointer;

  ${(props) => props.disabled && css`
    color: #777;
  `}
`

export const StyledTasks = styled.div`
  padding: 12px 30px 20px 30px;
  background-color: #e6e6e6;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #8c8c8c;
  border-radius: 0 0 15px 15px;
`

export const StyledParagraphs = styled.div`
  flex-grow: 1;
`

export const StyledParagraph = styled.p`

  color: #333;

  ${(props) => props.noTasks && css`
    font-style: italic;
  `}

  ${(props) => props.primary && css`
    font-weight: bold;
  `}

  ${(props) => props.secondary && css`
    margin-top: 5px;
    margin-left: 15px;
    font-style: italic;
  `}
`

export const StyledIcon = styled(FaTimes)`
  color: red;
  font-size: 20px;
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const StyledItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  align-items: center;
  padding: 10px 15px;
  color: #b6b6b6;
  background-color: #f2f2f2;
  cursor: pointer;

  ${(props) => props.done && css`
    border-left: 8px solid green;
  `}

  &:hover{
    background-color: #f6f6f6;
  }
`
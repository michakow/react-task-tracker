import styled, { css } from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  min-height: 150px;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 20px 30px;
  background-color: #e6e6e6;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #8c8c8c;
  border-radius: 0 0 15px 15px;
`

export const StyledParagraph = styled.p`
  color: #333;
  font-weight: bold;
`

export const StyledLabel = styled.label`
  flex-basis: 83%;

  ${(props) => props.secondary && css`
    flex-basis: 15%;
  `}
`

export const StyledInput = styled.input`
  padding: 5px 10px;
  width: 100%;
`

export const StyledButton = styled.input`
  flex-basis: 100%;
  padding: 10px;
  color: #b6b6b6;
  font-weight: bold;
  letter-spacing: .5px;
  background-color: #23232e;
  border: none;
  border-radius: 15px;

  &:active{
    color: #ececec;
    background-color: #141418;
  }
`
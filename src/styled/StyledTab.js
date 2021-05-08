import styled, { css } from 'styled-components'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

export const StyledTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  color: #333;
  background-color: #ccc;
  border: 1px solid #8c8c8c;
  border-radius: ${(props) => !props.show ? '15px' : '15px 15px 0 0'};
  cursor: pointer;

  margin-bottom: ${(props) => !props.show ? '20px' : '0'};
`

export const StyledTabName = styled.h2`
  font-size: 18px;
`

export const StyledIcon = styled(IoIosArrowDroprightCircle)`
  font-size: 30px;
  transition: 0.4s linear;

  ${(props) => props.show && css`
    transform: rotate(90deg);
  `}
`
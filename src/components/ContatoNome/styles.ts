import { HiMail } from 'react-icons/hi'
import styled from 'styled-components'

export const NomeContainer = styled.li`
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    h3,
    span {
      color: #aaee3b;
    }
  }
`

export const Nome = styled.h3``

export const Apelido = styled.span`
  color: #ccc;
  margin-left: 8px;
  font-size: 16px;
  font-weight: lighter;
`

export const IconesContainer = styled.ul`
  right: 2px;
  margin-left: auto;
  display: flex;
`

export const Icone = styled.li`
  margin-left: 16px;
`

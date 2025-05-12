import styled from 'styled-components'
import { RegularButton } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const Card = styled.div`
  background-color: #cccccc;
  text-align: center;
  width: 600px;
  max-width: 80vw;
  border-radius: 8px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.4);
  padding: 24px;

  ul li {
    background-color: transparent;
  }
`

export const Lista = styled.ul``

export const ItemDaLista = styled.li`
  margin-bottom: 16px;
`

export const Nome = styled.h2`
  color: #3a3a3a;
`

export const Apelido = styled.h4`
  font-weight: lighter;
  color: #6b6b6b;
`

export const Informacoes = styled.p`
  color: #6b6b6b;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
`

export const DeleteButton = styled(RegularButton)`
  color: red;
  background-color: transparent;
  border-color: red;

  &:hover {
    background-color: rgb(255, 0, 0, 0.1);
    transition: ease 0.5s;
  }
`

export const EditButton = styled(RegularButton)`
  color: #8944cf;
  background-color: transparent;

  &:hover {
    background-color: rgba(137, 68, 207, 0.3);
    transition: ease 0.5s;
  }
`

export const SaveButton = styled(RegularButton)`
  color: #b6ff86;
  background-color: transparent;
  border-color: #b6ff86;

  &:hover {
    background-color: rgb(182, 255, 134, 0.1);
    transition: ease 0.5s;
  }
`

export const CampoEdicao = styled.input`
  padding: 8px;
  color: #000;
  border-radius: 8px;
  border: none;
  width: 70%;
  height: 45px;
  text-align: center;
`

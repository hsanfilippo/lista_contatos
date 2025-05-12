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

export const ListaTag = styled.ul`
  right: 2px;
  margin-left: auto;
  display: flex;
`

export const ItemLista = styled.li`
  margin-left: 16px;
`

export const Tag = styled.span`
  background-color: #63a000;
  padding: 6px;
  font-size: 10px;
  border-radius: 30px;
`

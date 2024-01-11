import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: sans-serif;
        background-color: #3c3c3c;
        color: #fff;
    }
`

export const GlobalContainer = styled.div`
  max-width: 767px;
  width: 100%;
  margin: 0 auto;
`

export const RegularButton = styled.button`
  background-color: rgb(137, 68, 207, 0.1);
  padding: 8px;
  border: 2px solid #8944cf;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: ease 0.5s;

  &:hover {
    background-color: rgb(137, 68, 207, 0.3);
    transition: ease 0.5s;
  }
`

export default EstiloGlobal

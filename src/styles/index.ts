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

export default EstiloGlobal

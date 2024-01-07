import styled from 'styled-components'

export const ContainerInfo = styled.div`
  padding: 16px 24px;
  width: 100%;

  .button-area {
    display: flex;
    justify-content: space-around;
  }
`

export const Button = styled.button`
  padding: 8px 12px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #fff;
`

export const ButtonEdit = styled.button`
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #ffbb5c;
  border-radius: 10px;
  background-color: transparent;
  color: #ffbb5c;

  &:hover {
    background-color: #ffbb5c;
    color: #3c3c3c;
  }
`

export const ButtonRemove = styled.button`
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #ff6663;
  border-radius: 10px;
  background-color: transparent;
  color: #ff6663;

  &:hover {
    background-color: #ff6663;
    color: #3c3c3c;
  }
`

export const Image = styled.img`
  width: 100vw;
`

export const Name = styled.p`
  font-size: 8vw;
  font-weight: bold;
  text-align: center;
  margin: 3vh auto;
`

export const Email = styled.p`
  font-size: 4.5vw;
  text-align: center;
  margin-bottom: 4vh;
`

export const Tel = styled.p`
  font-size: 6vw;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4vh;
`

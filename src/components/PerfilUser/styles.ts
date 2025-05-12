import styled from 'styled-components'

export const UserInfo = styled.div`
  display: block;
  margin: 56px 0;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
  height: 256px;

  img {
    border-radius: 50%;
  }
`

export const Text = styled.p`
  text-align: center;
  padding: 24px;
`

export const Title = styled.p`
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 16px;
`

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 52px;
`

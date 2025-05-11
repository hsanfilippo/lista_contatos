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

export const SearchBar = styled.div`
  padding: 24px;
  text-align: center;
`

export const SearchInput = styled.input`
  width: 70%;
  height: 5vh;
  padding: 16px;
  margin-top: 24px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 20px 0 0 20px;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 52px;
`

export const SearchButton = styled.button`
  background-color: #8944cf;
  color: #fff;
  height: 5vh;
  border: none;
  width: 15%;
  border-radius: 0 20px 20px 0;
`

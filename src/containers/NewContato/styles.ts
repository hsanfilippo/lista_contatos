import styled from 'styled-components'

export const Form = styled.form`
  padding: 24px;
  display: grid;
`

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  background-color: #f1f1f1;
  margin-bottom: 36px;
  border: none;
  border-radius: 8px;
  color: #000;

  &:focus {
    outline: 2px solid #8944cf;
  }
`

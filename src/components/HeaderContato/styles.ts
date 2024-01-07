import styled from 'styled-components'

export const NavBar = styled.div`
  padding: 16px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Button = styled.button`
  padding: 8px 12px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #fff;
`

export const Title = styled.h3`
  font-size: 36px;
  text-align: center;
  padding: 24px;
`

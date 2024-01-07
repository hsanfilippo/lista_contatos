import { RegularButton } from '../../styles'
import * as S from './styles'

const PerfilUser = () => {
  return (
    <>
      <S.UserInfo>
        <S.Imagem>
          <img src="http://via.placeholder.com/200x200" alt="" />
        </S.Imagem>
        <S.Text>
          <S.Title>Olá,</S.Title>
          <S.UserName>Nome Sobrenome da Silva</S.UserName>
        </S.Text>
      </S.UserInfo>
      <S.SearchBar>
        <p>O que deseja fazer?</p>
        <form>
          <S.SearchInput type="text" placeholder="Buscar contato" />
          <S.SearchButton>P</S.SearchButton>
        </form>
      </S.SearchBar>
      <S.Buttons>
        <RegularButton>Lista de Contatos</RegularButton>
        <RegularButton>Novo Contato</RegularButton>
      </S.Buttons>
    </>
  )
}

export default PerfilUser

import { useNavigate } from 'react-router-dom'
import { RegularButton } from '../../styles'
import * as S from './styles'

const PerfilUser = () => {
  const navigate = useNavigate()

  return (
    <>
      <S.UserInfo>
        <S.ImageContainer>
          <img
            src="https://static-file-vault.vercel.app/smash_fit/logo-white.png"
            alt="fotinha de perfil"
          />
        </S.ImageContainer>
        <S.Text>
          <S.Title>Olá,</S.Title>
          <S.UserName>Usuário da Silva</S.UserName>
        </S.Text>
      </S.UserInfo>
      <S.Buttons>
        <RegularButton onClick={() => navigate('/contatos')}>
          Lista de Contatos
        </RegularButton>
        <RegularButton onClick={() => navigate('/contatos/new')}>
          Novo Contato
        </RegularButton>
      </S.Buttons>
    </>
  )
}

export default PerfilUser

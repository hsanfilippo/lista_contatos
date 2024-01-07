import HeaderContato from '../../components/HeaderContato'
import { RegularButton } from '../../styles'
import * as S from './styles'

const NewContato = () => {
  return (
    <>
      <HeaderContato />
      <S.Form>
        <S.Label htmlFor="nome">Nome</S.Label>
        <S.Input placeholder="texto de teste 1234" type="text" name="nome" />
        <S.Label htmlFor="apelido">Apelido</S.Label>
        <S.Input placeholder="texto de teste 1234" type="text" name="apelido" />
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input placeholder="texto de teste 1234" type="email" name="email" />
        <S.Label htmlFor="tel">Telefone</S.Label>
        <S.Input placeholder="texto de teste 1234" type="tel" name="tel" />
        <RegularButton>Salvar</RegularButton>
      </S.Form>
    </>
  )
}

export default NewContato

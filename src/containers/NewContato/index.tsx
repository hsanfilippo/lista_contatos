import HeaderNew from '../../components/HeaderNew'
import { useDispatch } from 'react-redux'
import { RegularButton } from '../../styles'
import * as S from './styles'
import { FormEvent } from 'react'

const NewContato = () => {
  const dispatch = useDispatch()

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <HeaderNew />
      <S.Form>
        <S.Label htmlFor="nome">Nome</S.Label>
        <S.Input placeholder="texto de teste 1234" type="text" name="nome" />
        <S.Label htmlFor="apelido">Apelido</S.Label>
        <S.Input placeholder="texto de teste 1234" type="text" name="apelido" />
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input placeholder="texto de teste 1234" type="email" name="email" />
        <S.Label htmlFor="tel">Telefone</S.Label>
        <S.Input placeholder="texto de teste 1234" type="tel" name="tel" />
        <RegularButton type="submit">Salvar</RegularButton>
      </S.Form>
    </>
  )
}

export default NewContato

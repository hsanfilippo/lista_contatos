import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { formActions } from '../../store/reducers/formulario'
import { addContato } from '../../store/reducers/contatos'

import HeaderNew from '../../components/HeaderNew'

import { RegularButton } from '../../styles'
import * as S from './styles'

const NewContato = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [apelido, setApelido] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState(0)

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      addContato({
        nome,
        apelido,
        email,
        tel
      })
    )
    dispatch(formActions.resetarFormulario())
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

import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addContato } from '../../store/reducers/contatos'
import { RegularButton } from '../../styles'
import * as S from './styles'

const NewContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [apelido, setApelido] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault()
    const novoContato = {
      nome,
      apelido,
      email,
      tel,
      id: Date.now()
    }
    console.log('Adicionando:', novoContato)
    dispatch(addContato(novoContato))
    navigate('/contatos')
  }

  return (
    <>
      <S.Form onSubmit={adicionarContato}>
        <S.Label htmlFor="nome">Nome</S.Label>
        <S.Input
          placeholder="texto de teste 1234"
          type="text"
          name="nome"
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNome(e.target.value)
          }
        />
        <S.Label htmlFor="apelido">Apelido</S.Label>
        <S.Input
          placeholder="texto de teste 1234"
          type="text"
          name="apelido"
          value={apelido}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setApelido(e.target.value)
          }
        />
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input
          placeholder="texto de teste 1234"
          type="email"
          name="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <S.Label htmlFor="tel">Telefone</S.Label>
        <S.Input
          placeholder="texto de teste 1234"
          type="tel"
          name="tel"
          value={tel}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTel(e.target.value)
          }
        />
        <RegularButton type="submit">Salvar</RegularButton>
      </S.Form>
    </>
  )
}

export default NewContato

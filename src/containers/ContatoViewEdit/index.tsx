import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import * as S from './styles'
import { editarContato, removerContato } from '../../store/reducers/contatos'

const ContatoViewEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const contato = useSelector((state: RootReducer) =>
    state.contatos.itens.find((c) => c.id === Number(id))
  )

  const [isEditando, setIsEditando] = useState(false)
  const [nome, setNome] = useState(contato?.nome || '')
  const [apelido, setApelido] = useState(contato?.apelido || '')
  const [email, setEmail] = useState(contato?.email || '')
  const [tel, setTel] = useState(contato?.tel || '')

  const salvarEdicao = () => {
    if (contato) {
      dispatch(
        editarContato({
          ...contato,
          nome,
          apelido,
          email,
          tel
        })
      )
      setIsEditando(false)
    }
  }

  const excluiContato = () => {
    if (id) {
      dispatch(removerContato(Number(id)))
      navigate('/contatos')
    }
  }

  const validarCampo = (tagCampo: string) => {
    if (tagCampo === 'apelido') {
      return <S.Apelido>{contato?.apelido}</S.Apelido>
    } else if (tagCampo === 'informacoes') {
      return <S.Informacoes>{contato?.apelido}</S.Informacoes>
    }
  }

  return (
    <>
      {contato ? (
        <>
          <S.CardContainer>
            <S.Card>
              <S.Lista>
                <S.ItemDaLista>
                  {isEditando ? (
                    <S.CampoEdicao
                      placeholder="Nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  ) : (
                    <S.Nome>{contato.nome}</S.Nome>
                  )}
                </S.ItemDaLista>

                <S.ItemDaLista>
                  {isEditando ? (
                    <S.CampoEdicao
                      placeholder="Apelido"
                      value={apelido}
                      onChange={(e) => setApelido(e.target.value)}
                    />
                  ) : (
                    validarCampo('apelido')
                    // <S.Apelido>&quot;{contato.apelido}&quot;</S.Apelido>
                  )}
                </S.ItemDaLista>

                <S.ItemDaLista>
                  {isEditando ? (
                    <S.CampoEdicao
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <S.Informacoes>{contato.email}</S.Informacoes>
                  )}
                </S.ItemDaLista>

                <S.ItemDaLista>
                  {isEditando ? (
                    <S.CampoEdicao
                      placeholder="Telefone"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                    />
                  ) : (
                    <S.Informacoes>{contato.tel}</S.Informacoes>
                  )}
                </S.ItemDaLista>
              </S.Lista>
              {isEditando ? (
                <S.ButtonContainer>
                  <S.SaveButton
                    onClick={() => {
                      salvarEdicao()
                      setIsEditando(false)
                    }}
                  >
                    Salvar
                  </S.SaveButton>
                </S.ButtonContainer>
              ) : (
                <S.ButtonContainer>
                  <S.DeleteButton onClick={excluiContato}>
                    Excluir contato
                  </S.DeleteButton>
                  <S.EditButton onClick={() => setIsEditando(true)}>
                    Editar
                  </S.EditButton>
                </S.ButtonContainer>
              )}
            </S.Card>
          </S.CardContainer>
        </>
      ) : (
        <h1>Contato não encontrado</h1>
      )}
    </>
  )
}

export default ContatoViewEdit

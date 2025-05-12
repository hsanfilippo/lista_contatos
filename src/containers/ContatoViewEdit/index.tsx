import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import * as S from './styles'

const ContatoViewEdit = () => {
  const { id } = useParams<{ id: string }>()
  const contato = useSelector((state: RootReducer) =>
    state.contatos.itens.find((c) => c.id === Number(id))
  )

  const [isEditando, setIsEditando] = useState(false)

  return (
    <>
      {contato ? (
        <>
          <S.CardContainer>
            <S.Card>
              <S.Lista>
                <S.ItemDaLista>
                  <S.Nome>{contato.nome}</S.Nome>
                </S.ItemDaLista>
                <S.ItemDaLista>
                  <S.Apelido>&quot;{contato.apelido}&quot;</S.Apelido>
                </S.ItemDaLista>
                <S.ItemDaLista>
                  <S.Informacoes>{contato.email}</S.Informacoes>
                </S.ItemDaLista>
                <S.ItemDaLista>
                  <S.Informacoes>{contato.tel}</S.Informacoes>
                </S.ItemDaLista>
              </S.Lista>
              {isEditando ? (
                <S.ButtonContainer>
                  <S.SaveButton onClick={() => setIsEditando(false)}>
                    Salvar
                  </S.SaveButton>
                </S.ButtonContainer>
              ) : (
                <S.ButtonContainer>
                  <S.DeleteButton>Excluir contato</S.DeleteButton>
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

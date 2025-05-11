import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { HiMail, HiPhone } from 'react-icons/hi'
import * as S from './styles'

const Contato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const contatosOrdenados = [...itens].sort((a, b) =>
    (a.nome ?? '').localeCompare(b.nome ?? '')
  )

  return (
    <ul>
      {contatosOrdenados.map((contato) => (
        <>
          <S.NomeContainer key={contato.id}>
            <S.Nome>
              {contato.nome}
              {contato.apelido ? (
                <S.Apelido>&quot;{contato.apelido}&quot;</S.Apelido>
              ) : (
                ''
              )}
            </S.Nome>
            <S.IconesContainer>
              {contato.email ? (
                <S.Icone>
                  <HiMail />
                </S.Icone>
              ) : (
                ''
              )}
              {contato.tel ? (
                <S.Icone>
                  <HiPhone />
                </S.Icone>
              ) : (
                ''
              )}
            </S.IconesContainer>
          </S.NomeContainer>
        </>
      ))}
    </ul>
  )
}

export default Contato

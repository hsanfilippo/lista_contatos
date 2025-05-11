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
            <h3>{contato.nome}</h3>
            {contato.apelido ? (
              <S.Apelido>&quot;{contato.apelido}&quot;</S.Apelido>
            ) : (
              ''
            )}
            <S.IconesContainer>
              <S.Icone>
                <HiMail />
              </S.Icone>
              <S.Icone>
                <HiPhone />
              </S.Icone>
            </S.IconesContainer>
          </S.NomeContainer>
        </>
      ))}
    </ul>
  )
}

export default Contato

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { HiMail, HiPhone } from 'react-icons/hi'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

const Contato = () => {
  const navigate = useNavigate()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const contatosOrdenados = [...itens].sort((a, b) =>
    (a.nome ?? '').localeCompare(b.nome ?? '')
  )

  return (
    <ul>
      {contatosOrdenados.map((contato) => (
        <>
          <S.NomeContainer
            key={contato.id}
            onClick={() => navigate(`/contatos/${contato.id}`)}
          >
            <S.Nome>{contato.nome}</S.Nome>
            {contato.apelido ? (
              <S.Apelido>&quot;{contato.apelido}&quot;</S.Apelido>
            ) : (
              ''
            )}
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

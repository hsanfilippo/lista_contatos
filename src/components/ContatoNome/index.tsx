import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

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
            <S.ListaTag>
              {contato.email ? (
                <S.ItemLista>
                  <S.Tag className="tagSelector">e-mail</S.Tag>
                </S.ItemLista>
              ) : (
                ''
              )}
              {contato.tel ? (
                <S.ItemLista>
                  <S.Tag className="tagSelector">telefone</S.Tag>
                </S.ItemLista>
              ) : (
                ''
              )}
            </S.ListaTag>
          </S.NomeContainer>
        </>
      ))}
    </ul>
  )
}

export default Contato

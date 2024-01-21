import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './styles'

const Contato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const contatosOrdenados = [...itens].sort((a, b) =>
    (a.nome ?? '').localeCompare(b.nome ?? '')
  )

  return (
    <ul>
      {contatosOrdenados.map((contato) => (
        <S.Li key={contato.id}>{contato.nome}</S.Li>
      ))}
    </ul>
  )
}

export default Contato

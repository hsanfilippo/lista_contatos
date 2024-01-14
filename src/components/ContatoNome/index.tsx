import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Contato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <ul>
      {itens.map((contato) => (
        <li key={contato.idtask}>{contato.nome}</li>
      ))}
    </ul>
  )
}

export default Contato

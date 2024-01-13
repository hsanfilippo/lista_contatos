import { useSelector } from 'react-redux'
import { ContainerListagem, ItemList, List, ListTitle } from './styles'
import { RootReducer } from '../../store'
import ContatoClass from '../../models/Contato'
import Contato from '../Contato/index'

const Listagem = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <ContainerListagem>
      <ul>
        {itens.map((c) => (
          <li key={c.idtask}>
            <Contato
              nome={c.nome}
              apelido={c.apelido}
              email={c.email}
              tel={c.tel}
              idtask={c.idtask}
            />
          </li>
        ))}
      </ul>
    </ContainerListagem>
  )
}

export default Listagem

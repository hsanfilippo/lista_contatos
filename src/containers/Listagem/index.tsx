import Contato from '../../models/Contato'
import ContatoNome from '../../components/ContatoNome'

import { ContainerListagem, ItemList, List, ListTitle } from './styles'

type ListagemProps = Contato

const Listagem = ({ nome }: ListagemProps) => {
  return (
    <ContainerListagem>
      <div>
        <h1>Lista de contatos</h1>
        <ContatoNome />
      </div>
    </ContainerListagem>
  )
}

export default Listagem

import ContatoNome from '../../components/ContatoNome'
import * as S from './styles'

import { ContainerListagem } from './styles'

const Listagem = () => {
  return (
    <ContainerListagem>
      <div>
        <S.ListTitle>Lista de contatos</S.ListTitle>
        <ul>
          <ContatoNome />
        </ul>
      </div>
    </ContainerListagem>
  )
}

export default Listagem

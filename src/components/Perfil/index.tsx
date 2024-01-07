import { UserInfo } from './styles'

const PerfilUser = () => {
  return (
    <>
      <UserInfo>
        <img src="http://via.placeholder.com/200x200" alt="" />
        <div>
          <p>Olá, Nome Sobrenome da Silva</p>
          <p>O que deseja fazer?</p>
        </div>
      </UserInfo>
      <div>
        <form>
          <input type="text" placeholder="Buscar contato" />
          <button>P</button>
        </form>
      </div>
      <div>
        <button>Lista de Contatos</button>
        <button>Novo Contato</button>
        <button>Novo Contato</button>
      </div>
    </>
  )
}

export default PerfilUser

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ContatoViewEdit = () => {
  const { id } = useParams<{ id: string }>()
  const contato = useSelector((state: RootReducer) =>
    state.contatos.itens.find((c) => c.id === Number(id))
  )

  return (
    <>
      {contato ? (
        <>
          <h1>Visualizar/Editar Contato</h1>
          <p>Nome: {contato.nome}</p>
          <p>Apelido: {contato.apelido}</p>
          <p>Email: {contato.email}</p>
          <p>Telefone: {contato.tel}</p>
          <p>ID: {contato.id}</p>
        </>
      ) : (
        <h1>Nada encontrado aqui</h1>
      )}
    </>
  )
}

export default ContatoViewEdit

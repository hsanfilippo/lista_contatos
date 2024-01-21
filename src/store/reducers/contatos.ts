import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Lorena',
      apelido: 'Lolô',
      email: 'email3@gmail.com',
      tel: 9063813550,
      id: 1
    },
    {
      nome: 'Naomi',
      email: 'email2@gmail.com',
      tel: 9063813588,
      id: 2
    },
    {
      nome: 'Henrique',
      email: 'email1@gmail.com',
      tel: 9063813588,
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    addContato: (state, action: PayloadAction<ContatosState>) => {
      console.log('a')
    }
  }
})

export const { addContato } = contatosSlice.actions

export default contatosSlice.reducer

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
      tel: '9063813550',
      id: 1
    },
    {
      nome: 'Naomi',
      email: 'email2@gmail.com',
      tel: '9063813588',
      id: 2
    },
    {
      nome: 'Henrique',
      email: 'email1@gmail.com',
      tel: '9063813588',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    addContato: (state, action: PayloadAction<Contato>) => {
      console.log('Reducer recebeu:', action.payload)
      state.itens.push(action.payload)
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) {
        state.itens[index] = action.payload
      }
    },
    removerContato: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    }
  }
})

export const { addContato, editarContato, removerContato } =
  contatosSlice.actions

export default contatosSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Lorena Aya',
      apelido: 'Lolô',
      email: 'lolorena.aya@gmail.com',
      tel: 9063813550,
      idtask: 1
    },
    {
      nome: 'Naomi Takahashi',
      apelido: 'Mor',
      email: 'galaxys2lau@gmail.com',
      tel: 9063813588,
      idtask: 2
    },
    {
      nome: 'Henrique Sanfilippo',
      email: 'galaxys2lau@gmail.com',
      tel: 9063813588,
      idtask: 2
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

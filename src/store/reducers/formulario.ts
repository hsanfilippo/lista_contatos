import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type ContatoFormState = {
  itens: Contato[]
}

const initialState: ContatoFormState = {
  itens: []
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    atualizarCampo: (
      state,
      action: PayloadAction<{ field: keyof ContatoFormState; value: never }>
    ) => {
      const { field, value } = action.payload
      state[field] = value
    },
    resetarFormulario: (state) => {
      return initialState
    }
  }
})

export const { reducer: formReducer, actions: formActions } = formSlice

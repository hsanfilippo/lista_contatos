import { configureStore } from '@reduxjs/toolkit'
import addContato from './reducers/contatos'
import { formReducer } from './reducers/formulario'

const store = configureStore({
  reducer: {
    contatos: addContato,
    form: formReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

import { configureStore } from '@reduxjs/toolkit'
import addContato from './reducers/contatos'

const store = configureStore({
  reducer: {
    contatos: addContato
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

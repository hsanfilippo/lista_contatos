import EstiloGlobal, { GlobalContainer } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/index'
import Contatos from './pages/Contatos'
import Home from './pages/Home'
import ContatosNew from './pages/New'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contatos',
    element: <Contatos />
  },
  {
    path: '/contatos/new',
    element: <ContatosNew />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <GlobalContainer>
        <RouterProvider router={routes} />
      </GlobalContainer>
    </Provider>
  )
}

export default App

import EstiloGlobal, { GlobalContainer } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Contatos from './pages/Contatos'
import Home from './pages/Home'
import ContatosNew from './pages/New'
import IdContato from './pages/IdContato'

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
  },
  {
    path: '/contatos/id_contato',
    element: <IdContato />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <GlobalContainer>
        <RouterProvider router={routes} />
      </GlobalContainer>
    </>
  )
}

export default App

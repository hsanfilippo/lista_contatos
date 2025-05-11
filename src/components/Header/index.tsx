import { useNavigate } from 'react-router-dom'
import { NavBar, Button, ButtonAdd } from './styles'

type Props = {
  addNew?: boolean
}

const Header = ({ addNew }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      <NavBar>
        <Button onClick={() => navigate('/')}>&lt; Voltar</Button>
        {addNew ? (
          <ButtonAdd onClick={() => navigate('/contatos/new')}>+</ButtonAdd>
        ) : (
          ''
        )}
      </NavBar>
    </>
  )
}

export default Header

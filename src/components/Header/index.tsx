import { useNavigate } from 'react-router-dom'
import { NavBar, Button, ButtonAdd } from './styles'

type Props = {
  addNew?: boolean
  voltarPara: string
}

const Header = ({ addNew, voltarPara }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      <NavBar>
        <Button onClick={() => navigate(voltarPara)}>&lt; Voltar</Button>
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

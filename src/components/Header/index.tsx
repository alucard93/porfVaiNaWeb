import { NavbarContainer } from './styles'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <NavbarContainer>
      <h1 className="title-h1">Marcus Vinicius</h1>
      <nav className="wrapper-header">
        <ul className="container-itens-personal">
          <Link to="/contacts" className="itens-personal">
            <li className="items-personal">Contatos</li>
          </Link>
        </ul>
      </nav>
    </NavbarContainer>
  )
}

export default Header

import { NavbarContainer } from './styles'

const Header = () => {
  return (
    <NavbarContainer>
      <h1 className='title-h1'>Marcus Vinicius</h1>
      <nav className='wrapper-header'>
        <ul className='container-itens-personal'>
          <li className='items-personal'>Sobre Mim</li>
          <li>Projetos</li>
          <li>Contatos</li>
        </ul>
      </nav>
    </NavbarContainer>
  )
}

export default Header

import { NavbarContainer } from './styles'
import { Link, NavLink } from 'react-router-dom'

const menu = [
  { title: 'Contacts', id: 'contacts', link: 'contacts' },
  // { title: 'FAQ', id: 'faq', link: '#' }
]

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__navigation">
          <Link to={'/'} className="header__logo">
            <h1>Marcus Vinicius</h1>
          </Link>
          <ul className="header__menu">
            {menu.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

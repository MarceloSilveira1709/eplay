import { Link } from 'react-router-dom'

import { HeaderBar, Links , LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
      <img src={logo} alt="Eplay" />
      </Link>
      <nav>
      <Links>
        <LinkItem>
        <Link to="/categories">Categorias</Link>
        </LinkItem>
        <LinkItem>
          <a href="#">Novidades</a>
          </LinkItem>
        <LinkItem><a href="#">Promoçoes</a>
        </LinkItem>
      </Links>
    </nav>
    </div>
    <LinkCart>
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import {open} from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch ()
  const {items} = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsmenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
        <S.Hamburguer onClick={() => setIsmenuOpen(!isMenuOpen)}>
          <span />
          <span/>
          <span/>
        </S.Hamburguer>
        <Link to="/">
        <img src={logo} alt="Eplay" />
        </Link>
        <nav>
        <S.Links>
          <S.LinkItem>
          <Link title='clique aqui para acessar a página de categorias' to="/categories">Categorias</Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink title='Clique aqui para acessar a seção em breve' to='/#coming-soon'>Em breve</HashLink>
            </S.LinkItem>
          <S.LinkItem>
          <HashLink title='Clique aqui para acessar a seção de promoções' to='/#on-sale'>Promoçoes</HashLink>
          </S.LinkItem>
        </S.Links>
      </nav>
      </div>
      <S.CartButton onClick={openCart} >
        {items.length}
        <span>- produto(s)</span>
        <img src={cartIcon} alt="Carrinho" />
      </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
          <Link title='clique aqui para acessar a página de categorias' to="/categories" onClick={() => setIsmenuOpen(false)}>Categorias</Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink title='Clique aqui para acessar a seção em breve' to='/#coming-soon' onClick={() => setIsmenuOpen(false)}>Em breve</HashLink>
            </S.LinkItem>
          <S.LinkItem>
          <HashLink title='Clique aqui para acessar a seção em promoções' to='/#on-sale' onClick={() => setIsmenuOpen(false)}>Promoções</HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header

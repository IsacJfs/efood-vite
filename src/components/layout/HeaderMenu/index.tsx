import * as S from './styles'
import logo from '../../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { open } from '../../../features/checkout/redux/cartSlice'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    if (items.length > 0) {
      dispatch(open())
    }else{
      alert("O carrinho está vazio")
    }
  }

  return (
    <S.BgHeader>
      <S.Header className="container">
        <S.HeaderLinks to="/">Restaurantes</S.HeaderLinks>
        <S.Logo>
          <Link to="/"><img src={logo} alt="logo-efood" /></Link>
        </S.Logo>
        <S.HeaderCarrinho onClick={openCart}>
          <span>{items.length}</span>produto(s) no carrinho
        </S.HeaderCarrinho>
      </S.Header>
    </S.BgHeader>
  )
}

export default HeaderMenu

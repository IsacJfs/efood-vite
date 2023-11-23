import * as S from './styles'
import logo from '../../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/cart'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.BgHeader>
      <S.Header className="container">
        <S.HeaderLinks href="/">Restaurantes</S.HeaderLinks>
        <S.Logo>
          <img src={logo} alt="logo-efood" />
        </S.Logo>
        <S.HeaderCarrinho onClick={openCart}>
          <span>{items.length}</span>produto(s) no carrinho
        </S.HeaderCarrinho>
      </S.Header>
    </S.BgHeader>
  )
}

export default HeaderMenu

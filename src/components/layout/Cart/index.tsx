import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'
import { formataPreco } from '../RestaurantMenu'



const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulator, value) => {
      return (acumulator += value.preco)
    }, 0)
  }

  return (
    <S.CartContainer  className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Cart>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
            <img src={item.foto} alt="" />
            <div>
              <h3>{item.nome}</h3>
              <p>{formataPreco(item.preco)}</p>
            </div>
            <S.RemoveItem onClick={() => removeItem(item.id)}/>
          </S.CartItem>
          ))}
        </ul>
        <S.CartPrice>
          <div>
            <p>Valor Total</p>
            <span>{formataPreco(getTotalPrice())}</span>
          </div>
          <button>Continuar com a entrega</button>
        </S.CartPrice>
      </S.Cart>
    </S.CartContainer>
  )
}

export default Cart

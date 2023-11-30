import { useDispatch, useSelector } from 'react-redux'
import * as S from './Cart/styles'
import { RootReducer } from '../../../store'
import { close, remove } from '../redux/cartSlice'
import { Aside } from '../../../components/common/Aside'
import { formataPreco, getTotalPrice } from '../utils'

interface CartProps {
  onContinue: () => void
}

const Cart = ({ onContinue }: CartProps) => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
    {items.length > 0 ? (
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart}></S.Overlay>
        <Aside>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.foto} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                </div>
                <S.RemoveItem onClick={() => removeItem(item.id)} />
              </S.CartItem>
            ))}
          </ul>
          <S.CartPrice>
            <div>
              <p>Valor Total</p>
              <span>{formataPreco(getTotalPrice(items))}</span>
            </div>
            <button
              title="Continuar com a entrega"
              type="submit"
              onClick={onContinue}
            >
              Continuar com a entrega
            </button>
            <button className="small">Continuar comprando</button>
          </S.CartPrice>
        </Aside>
      </S.CartContainer>
    ) : (
      closeCart
    )}
    </>
  )
}

export default Cart

// Importing necessary hooks and functions from react-redux and local files
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { close, remove } from '../redux/cartSlice'
import { formataPreco, getTotalPrice } from '../utils'
import * as S from './styles'

// Interface for the props of the Cart component
interface CartProps {
  onContinue: () => void
}

// Cart component
const Cart = ({ onContinue }: CartProps) => {
  // Using useSelector to access the state of the cart
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  // useDispatch hook for dispatching actions
  const dispatch = useDispatch()

  // Function to close the cart
  const closeCart = () => {
    dispatch(close())
  }

  // Function to remove an item from the cart
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart}></S.Overlay>
        <S.Aside>
          {items.length > 0 ? (
            <>
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
            </>
          ) : (
            <S.EmptCart>
              Carrinho vazio, selecione algum item para continuar com a compra.
            </S.EmptCart>
          )}
        </S.Aside>
      </S.CartContainer>
    </>
  )
}

export default Cart

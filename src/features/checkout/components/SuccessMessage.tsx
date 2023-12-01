import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { clearResponseData } from '../redux/responseSlice'
import { clear } from '../redux/cartSlice'
import * as S from './styles'
import { clearDelivery } from '../redux/deliverySlice'
import { clearPayment } from '../redux/paymentSlice'

// Interface for the props of the SuccessMessage component
interface SuccessProps {
  onClose: () => void
  restartToCart: () => void
}

const SuccessMensage = ({ onClose, restartToCart }: SuccessProps) => {
  // Using useSelector to access the state of the response
  const { orderId } = useSelector((state: RootReducer) => state.response)

  // useDispatch hook for dispatching actions
  const dispatch = useDispatch()

  // useEffect hook to clear the state
  useEffect(() => {
    dispatch(clearResponseData())
    dispatch(clear())
  }, [dispatch])

  // Function to close the cart and clear the state
  const CloseCleanAll = () => {
    dispatch(clearResponseData())
    dispatch(clear())
    onClose()
    restartToCart()
    clearDelivery()
    clearPayment()
  }

  return (
    <>
      <S.Overlay />
      <S.Aside>
        <S.SuccessContainer>
          <h4>Pedido realizado - {orderId ? orderId : 'Carregando...'}</h4>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </S.SuccessContainer>

        <S.LinkFinish to="/" onClick={CloseCleanAll}>
          Concluir
        </S.LinkFinish>
      </S.Aside>
    </>
  )
}

export default SuccessMensage

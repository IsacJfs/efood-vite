import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearResponseData } from '../redux/responseSlice'
import { clear } from '../redux/cartSlice'
import * as S from './styles'
import { clearDelivery } from '../redux/deliverySlice'
import { clearPayment } from '../redux/paymentSlice'

// Interface for the props of the ErrorMessage component
interface ErrorProps {
  onClose: () => void
  restartToCart: () => void
}

const ErrorMessage = ({ onClose, restartToCart }: ErrorProps) => {
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
          <h4>Erro ao processar pagamento.</h4>
        </S.SuccessContainer>

        <S.LinkFinish to="/" onClick={CloseCleanAll}>
          Finalizar
        </S.LinkFinish>
      </S.Aside>
    </>
  )
}

export default ErrorMessage

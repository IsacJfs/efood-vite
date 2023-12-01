import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { setResponseData } from '../redux/responseSlice'
import * as S from './styles'

const CheckoutButton = () => {
  // Accessing the state of the cart, delivery and payment
  const cart = useSelector((state: RootReducer) => state.cart)
  const delivery = useSelector((state: RootReducer) => state.delivery)
  const payment = useSelector((state: RootReducer) => state.payment)
  const dispatch = useDispatch()

  const handleCheckout = async () => {
    const checkoutData = {
      // Estructure the checkout data
      products: cart.items.map((item) => ({
        // Map the products to get only the id and price
        id: item.id, // Product ID
        price: item.preco // Product price
      })),
      // Estructure the delivery data
      delivery: {
        receiver: delivery.receiver, // Delivery receiver
        address: {
          description: delivery.description, // Address description
          city: delivery.city, // City name
          zipCode: delivery.zipCode, // Postal code
          number: delivery.number, // Number of the address
          complement: delivery.complement // Address complement
        }
      },
      payment: {
        // Estructure the payment data
        card: {
          name: payment.name, // Name on the card
          number: payment.number, // Card number
          code: payment.code, // Card code
          expires: {
            month: payment.month, // Month of expiration of the card
            year: payment.year // Year of expiration of the card
          }
        }
      }
    }

    try {
      // Send the checkout data to the API
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Define the content type of the request to JSON
          },
          body: JSON.stringify(checkoutData) // Convert the checkout data to JSON
        }
      )

      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Erro no envio do checkout')
      }

      // Parse the response to JSON
      const responseData = await response.json()
      console.log('Checkout bem-sucedido:', responseData)
      const orderId = responseData.orderId
      dispatch(setResponseData(orderId))
    } catch (error) {
      // If the response is not ok, log the error
      console.error('Erro no checkout:', error)
    }
  }

  // Rendering the component
  return (
    <S.ButtonForm type="submit" onClick={handleCheckout}>
      Finalizar Pedido
    </S.ButtonForm>
  )
}

export default CheckoutButton

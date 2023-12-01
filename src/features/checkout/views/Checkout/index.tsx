import { useState } from 'react'
import Cart from '../../components/Cart'
import AddressForm from '../../components/AddressForm'
import PaymentForm from '../../components/PaymentForm'
import SuccessMensage from '../../components/SuccessMessage'
import ErrorMessage from '../../components/ErrorMessage'

// CheckoutContainer component
const CheckoutContainer = () => {
  const [currentStep, setCurrentStep] = useState('cart') // State for the current step, default is cart
  const [showSuccessMessage, setShowSuccessMessage] = useState(true) // State for the success message

  // Functions to change the current step
  const goToAddressForm = () => setCurrentStep('address')
  const goToPaymentForm = () => setCurrentStep('payment')
  const goToCart = () => setCurrentStep('cart')
  const goToSuccess = () => setCurrentStep('success')

  // Function to close the success message
  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false)
  }

  // Return the component
  return (
    <div>
      {currentStep === 'cart' && <Cart onContinue={goToAddressForm} />}
      {currentStep === 'address' && (
        <AddressForm onContinue={goToPaymentForm} onBack={goToCart} />
      )}
      {currentStep === 'payment' && (
        <PaymentForm onBack={goToAddressForm} onSuccess={goToSuccess} />
      )}
      {currentStep === 'success' && showSuccessMessage && (
        <SuccessMensage
          onClose={handleCloseSuccessMessage}
          restartToCart={goToCart}
        />
      )}
      {currentStep === 'success' && !showSuccessMessage && (
        <ErrorMessage
          onClose={handleCloseSuccessMessage}
          restartToCart={goToCart}
        />
      )}
    </div>
  )
}

export default CheckoutContainer

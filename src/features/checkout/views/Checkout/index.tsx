import { useState } from 'react';
import Cart from '../../components/Cart';
import AddressForm from '../../components/AddressForm';
import PaymentForm from '../../components/PaymentForm';

const CheckoutContainer = () => {
  const [currentStep, setCurrentStep] = useState('cart'); // 'address', 'payment'

  const goToAddressForm = () => setCurrentStep('address');
  const goToPaymentForm = () => setCurrentStep('payment');
  const goToCart = () => setCurrentStep('cart');


  return (
    <div>
      {currentStep === 'cart' && <Cart onContinue={goToAddressForm} />}
      {currentStep === 'address' && <AddressForm onContinue={goToPaymentForm} onBack={goToCart} />}
      {currentStep === 'payment' && <PaymentForm onBack={goToAddressForm} />}
    </div>
  );
};

export default CheckoutContainer;

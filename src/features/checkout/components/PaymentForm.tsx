import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Aside } from '../../../components/common/Aside'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCode,
  setMonth,
  setName,
  setNumber,
  setYear
} from '../redux/paymentSlice'
import InputMask from 'react-input-mask'
import * as S from './PaymentForm/styles'
import {
  FormContainer,
  RowField
} from '../../../components/common/FormContainer'
import { formataPreco, getTotalPrice } from '../utils'
import { RootReducer } from '../../../store'
import CheckoutButton from './CheckoutButton'

interface PaymentProps {
  onBack: () => void
}

const PaymentForm = ({ onBack }: PaymentProps) => {
  const dispatch = useDispatch()
  const form = useFormik({
    initialValues: {
      fullName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required()
        .min(5, 'Digite o nome completo')
        .max(50, 'Faça algumas abreviações'),
      cardNumber: Yup.string().required(),
      cardCode: Yup.string().required().min(3).max(3),
      expireMonth: Yup.string().required().min(2).max(2),
      expireYear: Yup.string().required().min(4).max(4)
    }),
    onSubmit: (values) => {
      dispatch(setName(values.fullName))
      dispatch(setNumber(values.cardNumber))
      dispatch(setMonth(Number(values.expireMonth)))
      dispatch(setYear(Number(values.expireYear)))
      dispatch(setCode(Number(values.cardCode)))
    }
  })

  const { items } = useSelector((state: RootReducer) => state.cart)

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  return (
    <Aside>
      <S.AddressContainer>
        <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}</h3>
        <form onSubmit={form.handleSubmit}>
          <div>
            <FormContainer maxWidth="344px">
              <label htmlFor="fullName">Nome no cartão</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('fullName') ? 'error' : ''}
              />
            </FormContainer>
            <RowField>
              <FormContainer maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999 9999 9999 9999"
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </FormContainer>
              <FormContainer maxWidth="87px">
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                />
              </FormContainer>
            </RowField>
            <RowField>
              <FormContainer maxWidth="155px">
                <label htmlFor="expireMonth">Mês de vencimento</label>
                <InputMask
                  id="expireMonth"
                  type="text"
                  name="expireMonth"
                  value={form.values.expireMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                  className={checkInputHasError('expireMonth') ? 'error' : ''}
                />
              </FormContainer>
              <FormContainer maxWidth="155px">
                <label htmlFor="expireYear">Ano de vencimento</label>
                <InputMask
                  id="expireYear"
                  type="text"
                  name="expireYear"
                  value={form.values.expireYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999"
                  className={checkInputHasError('expireYear') ? 'error' : ''}
                />
              </FormContainer>
            </RowField>
          </div>
          <CheckoutButton />
        </form>
        <S.ButtonForm onClick={onBack}>Voltar para edição de endereço</S.ButtonForm>
      </S.AddressContainer>
    </Aside>
  )
}

export default PaymentForm

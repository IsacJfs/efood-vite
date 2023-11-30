import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { Aside } from '../../../components/common/Aside'
import { useDispatch } from 'react-redux'
import {
  setCity,
  setComplement,
  setDescription,
  setNumber,
  setReceiver,
  setZipCode
} from '../redux/deliverySlice'
import * as S from './styles'
import {
  FormContainer,
  RowField
} from '../../../components/common/FormContainer'

interface AddressProps {
  onContinue: () => void,
  onBack: () => void
}

const AddressForm = ({ onContinue, onBack }:AddressProps) => {
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      cityName: '',
      postalCode: '',
      streetNumber: '',
      addressComplement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required()
        .min(5, 'Digite o nome completo')
        .max(50, 'Faça algumas abreviações'),
      address: Yup.string().required(),
      cityName: Yup.string().required(),
      postalCode: Yup.string().required().min(9).max(9),
      streetNumber: Yup.string().required().max(6),
      addressComplement: Yup.string().max(15)
    }),
    onSubmit: (values) => {
      dispatch(setReceiver(values.fullName))
      dispatch(setDescription(values.address))
      dispatch(setCity(values.cityName))
      dispatch(setZipCode(values.postalCode))
      dispatch(setNumber(Number(values.streetNumber)))
      dispatch(setComplement(values.addressComplement))
      onContinue()
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  return (
    <Aside>
      <S.AddressContainer>
        <h3>Entrega</h3>
        <form onSubmit={form.handleSubmit}>
          <div>
            <FormContainer>
              <label htmlFor="fullName">Quem irá receber</label>
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
            <FormContainer>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </FormContainer>
            <FormContainer>
              <label htmlFor="cityName">Cidade</label>
              <input
                id="cityName"
                type="text"
                name="cityName"
                value={form.values.cityName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cityName') ? 'error' : ''}
              />
            </FormContainer>
            <RowField>
              <FormContainer maxWidth="155px">
                <label htmlFor="postalCode">CEP</label>
                <InputMask
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  value={form.values.postalCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('postalCode') ? 'error' : ''}
                  mask="99999-999"
                />
              </FormContainer>
              <FormContainer maxWidth="155px">
                <label htmlFor="streetNumber">Número</label>
                <input
                  id="streetNumber"
                  type="text"
                  name="streetNumber"
                  value={form.values.streetNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('streetNumber') ? 'error' : ''}
                />
              </FormContainer>
            </RowField>
            <FormContainer>
              <label htmlFor="addressComplement">Complemento (opcional)</label>
              <input
                id="addressComplement"
                type="text"
                name="addressComplement"
                value={form.values.addressComplement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('addressComplement') ? 'error' : ''}
              />
            </FormContainer>
          </div>
          <S.ButtonForm type="submit">Continuar com o pagamento</S.ButtonForm>
        </form>
        <S.ButtonForm onClick={onBack}>Voltar para o carrinho</S.ButtonForm>
      </S.AddressContainer>
    </Aside>
  )
}

export default AddressForm

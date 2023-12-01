import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
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

// Interface for the props of the AddressForm component
interface AddressProps {
  onContinue: () => void
  onBack: () => void
}

const AddressForm = ({ onContinue, onBack }: AddressProps) => {
  const dispatch = useDispatch()

  // Configurations for the Formik hook
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
      // Schema for validation with Yup
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
      // Dispatching actions to update the delivery state
      dispatch(setReceiver(values.fullName))
      dispatch(setDescription(values.address))
      dispatch(setCity(values.cityName))
      dispatch(setZipCode(values.postalCode))
      dispatch(setNumber(Number(values.streetNumber)))
      dispatch(setComplement(values.addressComplement))
      onContinue()
    }
  })

  // Function to check if a field has an error
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  // Rendering the component
  return (
    <>
      <S.Overlay />
      <S.Aside>
        <S.FormSection>
          <h3>Entrega</h3>
          <form onSubmit={form.handleSubmit}>
            <div>
              <S.FormContainer>
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
              </S.FormContainer>
              <S.FormContainer>
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
              </S.FormContainer>
              <S.FormContainer>
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
              </S.FormContainer>
              <S.RowField>
                <S.FormContainer $maxWidth="155px">
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
                </S.FormContainer>
                <S.FormContainer $maxWidth="155px">
                  <label htmlFor="streetNumber">Número</label>
                  <input
                    id="streetNumber"
                    type="text"
                    name="streetNumber"
                    value={form.values.streetNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('streetNumber') ? 'error' : ''
                    }
                  />
                </S.FormContainer>
              </S.RowField>
              <S.FormContainer>
                <label htmlFor="addressComplement">
                  Complemento (opcional)
                </label>
                <input
                  id="addressComplement"
                  type="text"
                  name="addressComplement"
                  value={form.values.addressComplement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('addressComplement') ? 'error' : ''
                  }
                />
              </S.FormContainer>
            </div>
            <S.ButtonForm type="submit">Continuar com o pagamento</S.ButtonForm>
          </form>
          <S.ButtonForm onClick={onBack}>Voltar para o carrinho</S.ButtonForm>
        </S.FormSection>
      </S.Aside>
    </>
  )
}

export default AddressForm

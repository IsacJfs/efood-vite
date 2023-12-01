import styled from 'styled-components'
import {
  buttonDarkCSS,
  buttonMediumCSS,
  colors,
  displayFlex,
  overlay
} from '../../../assets/styles'
import lixeira from '../../../assets/images/lixeira-de-reciclagem 1.svg'
import { Link } from 'react-router-dom'

// Estilos compartilhados entre todos componentes
export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${colors.pinkDark};
  padding: 32px 8px 0 8px;
  z-index: 1;
`

export const ButtonForm = styled.button`
  ${buttonMediumCSS}
  width: 100%;
  margin-bottom: 8px;
`

export const Overlay = styled.div`
  ${overlay}
  opacity: 0.8;
  position: fixed;
  z-index: 1;
`

// Estilos únicos para o Cart.tsx
export const CartContainer = styled.section`
  display: none;
  &.is-open {
    display: block;
  }
`

export const Cart = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${colors.pinkDark};
  padding: 32px 8px 0 8px;
  z-index: 1;
`

export const RemoveItem = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  border: none;
  background-image: url('${lixeira}');
  background-color: transparent;
`

export const CartItem = styled.div`
  display: flex;
  position: relative;
  background-color: ${colors.pinkMedium};
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  div {
    display: block;
    color: ${colors.pinkDark};

    h3 {
      font-size: 18px;
      margin-bottom: 16px;
      font-weight: 900;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`

export const CartPrice = styled.div`
  div {
    ${buttonDarkCSS}
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  button {
    ${buttonMediumCSS}
    width: 100%;

    &.small {
      display: none;
      margin-top: 24px;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }
`

export const EmptCart = styled.p`
  color: ${colors.witeMedium};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
// Estilos compartilhados pelos PaymentForm.tsx e AddressForm.tsx
type DefMaxWidth = {
  $maxWidth?: string
}

export const FormContainer = styled.div<DefMaxWidth>`
  max-width: ${(props) => props.$maxWidth || 'auto'};
  flex: auto;

  label {
    display: block;
    font-size: 14px;
  }

  input {
    background-color: ${colors.pinkMedium};
    border: 1px solid ${colors.pinkMedium};
    padding: 8px;
    margin-top: 8px;
    font-weight: bold;
    width: 100%;

    &.error {
      border: 3px solid red;
    }
  }
`

export const RowField = styled.div`
  ${displayFlex}
  width: 100%;
`

export const FormSection = styled.section`
  color: ${colors.witeMedium};
  font-weight: bold;

  h3 {
    font-size: 16px;
    padding-bottom: 16px;
  }

  form {
    > div {
      margin-bottom: 24px;
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      row-gap: 8px;
    }
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  font-size: 14px;
  label {
  }

  input {
    background-color: ${colors.pinkMedium};
    border: 1px solid ${colors.pinkMedium};
    padding: 8px;
    width: 100%;
    margin-top: 8px;
    font-weight: bold;

    &.error {
      border: 1px solid red;
    }
  }
`

// Estilos para o SuccessMessage
export const SuccessContainer = styled.div`
  color: ${colors.witeMedium};

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const LinkFinish = styled(Link)`
  ${buttonMediumCSS}
  width: 100%;
  margin-bottom: 8px;
`

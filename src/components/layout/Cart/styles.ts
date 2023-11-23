import styled from "styled-components";
import { buttonTagStyle, colors, overlay } from "../../../assets/styles";
import lixeira from '../../../assets/images/lixeira-de-reciclagem 1.svg'

export const CartContainer = styled.section`
  display: none;
  &.is-open{
    display: block;
  }
`

export const Overlay = styled.div`
  ${overlay}
  position: fixed;
  z-index: 1;
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
    ${buttonTagStyle}
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  button {
    ${buttonTagStyle}
    color: ${colors.pinkDark};
    background-color: ${colors.pinkMedium};
    width: 100%;
  }
`

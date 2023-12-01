import styled from 'styled-components'
import { buttonMediumCSS, colors, overlay } from '../../../assets/styles'

export const Button = styled.button`
  ${buttonMediumCSS}
  width: 100%;
  padding: 4px 7px;
  margin-top: 4px;
`

export const Name = styled.h4`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 900;

  @media (max-width: 768px) {
    text-align: center;
    padding: 8px 0;
  }
`

export const Descricao = styled.p`
  line-height: 22px;
  font-size: 14px;
  max-height: 88px;

  @media (max-width: 768px) {
    max-height: 100%;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    ${overlay}
    opacity: 0.8;
  }
`

export const ModalCard = styled.div`
  z-index: 1;
  background-color: ${colors.pinkDark};
  color: ${colors.witeMedium};
  position: relative;
  max-width: 1024px;
  align-items: center;
  display: flex;
  padding: 32px;

  span {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;

    img {
      height: 16px;
      width: 16px;
      margin: 0 auto;
      object-fit: cover;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin: 0;
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;

  ${Name} {
    font-size: 18px;
    margin: 0;
  }

  ${Button} {
    width: auto;
    align-self: flex-start;
    margin-bottom: 32px;
    margin-top: 0;
  }
`

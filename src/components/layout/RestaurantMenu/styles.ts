import styled from 'styled-components'
import { Description, buttonTagStyle, colors, displayFlexCol, overlay } from '../../../assets/styles'


export const Menu = styled.section`
  color: ${colors.witeMedium};
`

export const Card = styled.div`
  background-color: ${colors.pinkDark};
  color: ${colors.pinkMedium};
  padding: 8px;
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Description} {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    display: block;
  }
`

export const imageMenu = styled.img`
  width: 100%;
  height: 167px;
`

export const Button = styled.button`
  ${buttonTagStyle}
  background-color: ${colors.pinkMedium};
  color: ${colors.pinkDark};
  width: 100%;
  margin-top: 4px;
`

export const Name = styled.h4`
  margin: 8px 0;
  font-size: 16px;
`

export const Descricao = styled.p`
  line-height: 22px;
  font-size: 14px;
  max-height: 88px;
`

export const CardHeader = styled.div`
  ${displayFlexCol}
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
      margin: 0;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
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

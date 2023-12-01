import styled from 'styled-components'
import {
  Description,
  buttonMediumCSS,
  colors,
  displayFlexCol
} from '../../../assets/styles'

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
  ${buttonMediumCSS}
  width: 100%;
  margin-top: 4px;
`

export const Name = styled.h4`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 900;
`

export const CardHeader = styled.div`
  ${displayFlexCol}
`

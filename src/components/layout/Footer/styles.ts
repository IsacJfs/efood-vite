import styled from 'styled-components'
import { colors, displayFlex } from '../../../assets/styles'

export const Footer = styled.footer`
  ${displayFlex}
  background-color: ${colors.pinkMedium};
  height: 298px;
  color: ${colors.pinkDark};
  padding: 40px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 120px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

export const Social = styled.ul`
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: center;
  margin-top: 32px;
`

export const Logo = styled.div`
  width: 128px;
`

export const Caution = styled.div`
  max-width: 480px;
  font-size: 10px;
`

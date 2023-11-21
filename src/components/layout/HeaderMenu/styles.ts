import styled from 'styled-components'
import { colors } from '../../../assets/styles'
import { bgHeader } from '../../common/BgHeaders/style'

export const BgHeader = styled(bgHeader)`
  height: 160px;
  padding: 40px;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

export const HeaderLinks = styled.a`
  color: ${colors.pinkDark};
  font-size: 18px;
`
export const HeaderCarrinho = styled(HeaderLinks)`
  display: flex;
  justify-content: end;

  span {
    margin-right: 4px;
  }
`

export const Logo = styled.div`
  width: 128px;
  justify-self: center;
`

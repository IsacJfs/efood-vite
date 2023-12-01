import styled from 'styled-components'
import { colors } from '../../../assets/styles'
import { bgHeader } from '../../common/BgHeaders/style'
import { Link } from 'react-router-dom'

export const BgHeader = styled(bgHeader)`
  height: 160px;
  padding: 40px;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 48px;
    padding: 20px;
  }
`

export const HeaderLinks = styled(Link)`
  color: ${colors.pinkDark};
  font-weight: 900;
  font-size: 18px;
`
export const HeaderCarrinho = styled.a`
  color: ${colors.pinkDark};
  font-weight: 900;
  font-size: 18px;
  display: flex;
  justify-content: end;
  cursor: pointer;

  span {
    margin-right: 4px;
  }
`

export const Logo = styled.div`
  width: 128px;
  justify-self: center;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    ${Logo} {
      order: 1;
      margin-bottom: 8px;
    }

    ${HeaderLinks} {
      order: 2;
      margin-bottom: 8px;
    }

    ${HeaderCarrinho} {
      order: 3;
    }
  }
`

import styled from 'styled-components'
import { colors, displayFlex, displayFlexCol, buttonTagStyle, Description } from '../../../assets/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  max-height: 400px;
  ${displayFlexCol}
  background-color: ${colors.witeMedium};

  @media (max-width: 768px) {
    height: auto;
    margin-bottom: 36px;
  }
`

export const Body = styled.div`
  ${displayFlexCol}
  border: 1px solid ${colors.pinkDark};
  margin-bottom: 48px;
  padding: 8px;
  color: ${colors.pinkDark};
  font-size: 14px;

  ${Description} {
    margin: 16px 0;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Head = styled.div`
  ${displayFlex}
  font-weight: 900;
  font-size: 18px;

  img {
    padding-left: 8px;
  }
`
export const TagContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`

export const Tag = styled.p`
  ${buttonTagStyle}
  margin-left: 8px;
`

export const Button = styled(Link)`
  ${buttonTagStyle}

  @media (max-width: 768px) {
    width: 100%;
  }
`

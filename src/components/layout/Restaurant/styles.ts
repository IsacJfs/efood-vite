import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  colors,
  displayFlex,
  displayFlexCol,
  Description,
  tagCSS,
  buttonDarkCSS
} from '../../../assets/styles'

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
  border-bottom: 1px solid ${colors.pinkDark};
  border-right: 1px solid ${colors.pinkDark};
  border-left: 1px solid ${colors.pinkDark};
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
  font-weight: bold;
  font-size: 18px;

  img {
    padding-left: 8px;
  }
`
export const TagContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  text-transform: capitalize;
  display: flex;
`

export const Tag = styled.p`
  ${tagCSS}
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.destaque {
    text-transform: none;
    width: 126px;
  }
`

export const Button = styled(Link)`
  ${buttonDarkCSS}
  width: 82px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

import styled from 'styled-components'
import { colors, displayFlexCol, overlay } from '../../../assets/styles'

interface BannerProps {
  $backgroundimage: string
}

export const Banner = styled.div<BannerProps>`
  background-image: url(${(props) => props.$backgroundimage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  margin-bottom: 56px;
  position: relative;

  .overlay {
    ${overlay}
    opacity: 0.5;
  }
`

export const BannerContent = styled.div`
  ${displayFlexCol}
  height: 100%;
  padding-top: 24px;
  padding-bottom: 32px;
`

export const Categorie = styled.h2`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.witeMedium};
  z-index: 1;
`

export const Title = styled(Categorie)`
  font-weight: 900;
`

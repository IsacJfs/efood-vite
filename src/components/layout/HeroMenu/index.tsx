import { Restaurants } from '../../../models/Restaurant'
import * as S from './styles'

type Props = {
  restaurants: Restaurants
}

const HeroMenu = ({ restaurants }: Props) => {
  return (
    <S.Banner $backgroundimage={restaurants.capa}>
      <S.BannerContent className="container">
        <S.Categorie> {restaurants.tipo}</S.Categorie>
        <S.Title>{restaurants.titulo}</S.Title>
      </S.BannerContent>
      <div className="overlay"></div>
    </S.Banner>
  )
}

export default HeroMenu

import { Description } from '../../../assets/styles'
import { Restaurants } from '../../../models/Restaurant'
import * as S from './styles'

type Props = {
  restaurants: Restaurants
}

const RestaurantMenu = ({restaurants}: Props) => {
  return (
    <S.Menu>
      <S.CardContainer className="container">
        {restaurants.cardapio.map((menu) => (
          <S.Card key={menu.id}>
            <S.CardHeader>
              <S.imageMenu src={menu.foto} alt={menu.nome} />
              <S.Name>{menu.nome}</S.Name>
            </S.CardHeader>
            <Description>{menu.descricao}</Description>
            <S.Button href="#">Saiba Mais</S.Button>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Menu>
  )
}

export default RestaurantMenu

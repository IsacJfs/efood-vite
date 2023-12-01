import Restaurant from '../Restaurant'
import * as S from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <S.Container className="container">
      {restaurants.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurant
            id={restaurante.id}
            titulo={restaurante.titulo}
            destacado={restaurante.destacado}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            tipo={restaurante.tipo}
          />
        </li>
      ))}
    </S.Container>
  )
}

export default RestaurantList

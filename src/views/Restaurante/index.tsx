import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/layout/HeaderMenu'
import RestaurantMenu from '../../components/layout/RestaurantMenu'
import HeroMenu from '../../components/layout/HeroMenu'
import {
  useGetHeroQuery,
  useGetHeroRestaurantQuery,
  useGetMenuQuery
} from '../../services/api'

const Restaurante = () => {
  const { id } = useParams()
  const { data: restaurantes } = useGetMenuQuery(id!)
  const { data: hero } = useGetHeroQuery(id!)
  const { data: heroRestaurant } = useGetHeroRestaurantQuery(id!)

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }
  if (!hero) {
    return <h3>Carregando...</h3>
  }
  if (!heroRestaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <div>
      <HeaderMenu />
      <HeroMenu restaurants={heroRestaurant} />
      <RestaurantMenu restaurants={heroRestaurant} />
    </div>
  )
}

export default Restaurante

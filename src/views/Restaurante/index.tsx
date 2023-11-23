import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/layout/HeaderMenu'
import RestaurantMenu from '../../components/layout/RestaurantMenu'
import HeroMenu from '../../components/layout/HeroMenu'
import { useGetMenuQuery } from '../../services/api'



const Restaurante = () => {
  const { id } = useParams()
  const { data: restaurantes } = useGetMenuQuery(id!)

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <div>
      <HeaderMenu />
      <HeroMenu restaurants={restaurantes} />
      <RestaurantMenu restaurants={restaurantes}/>
    </div>
  )
}

export default Restaurante

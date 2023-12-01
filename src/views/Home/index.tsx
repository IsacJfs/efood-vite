import Header from '../../components/layout/Header'
import RestaurantList from '../../components/layout/RestaurantList'
import { useGetRestauratesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestauratesQuery()

  if (restaurantes) {
    return (
      <div>
        <Header />
        <RestaurantList restaurants={restaurantes} />
      </div>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home

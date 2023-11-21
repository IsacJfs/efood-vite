
import { useEffect, useState } from 'react'
import Header from '../../components/layout/Header'
import RestaurantList from '../../components/layout/RestaurantList'
import { Restaurants } from '../../models/Restaurant'

const Home = () => {
  const [restaurantes, getRestaurantes] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => getRestaurantes(res))
  }, [])

  return (
    <div>
      <Header />
      <RestaurantList restaurants={restaurantes} />
    </div>
  )
}

export default Home

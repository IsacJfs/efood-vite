import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/layout/HeaderMenu'
import RestaurantMenu from '../../components/layout/RestaurantMenu'
import { Restaurants } from '../../models/Restaurant'
import HeroMenu from '../../components/layout/HeroMenu'



const RestaurantProfile = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <div>
      <HeaderMenu />
      <HeroMenu restaurants={cardapio} />
      <RestaurantMenu restaurants={cardapio}/>
    </div>
  )
}

export default RestaurantProfile

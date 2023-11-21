import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import RestaurantProfile from './views/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantProfile />} />
  </Routes>
)

export default Rotas

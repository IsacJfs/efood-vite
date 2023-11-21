import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Restaurante from './views/Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Restaurante />} />
  </Routes>
)

export default Rotas

import { BrowserRouter } from 'react-router-dom'
import Footer from './components/layout/Footer'
import GlobalStyle from './assets/styles.ts'
import Rotas from './routes'
import Cart from './components/layout/Cart/index.tsx'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App

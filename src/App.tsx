import { BrowserRouter } from 'react-router-dom'
import Footer from './components/layout/Footer'
import GlobalStyle from './assets/styles.ts'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App

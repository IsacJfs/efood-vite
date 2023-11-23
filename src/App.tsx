import { BrowserRouter } from 'react-router-dom'
import Footer from './components/layout/Footer'
import GlobalStyle from './assets/styles.ts'
import Rotas from './routes'
import Cart from './components/layout/Cart/index.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App

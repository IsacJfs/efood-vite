import { BrowserRouter } from 'react-router-dom'
import Footer from './components/layout/Footer'
import GlobalStyle from './assets/styles.ts'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import CheckoutContainer from './features/checkout/views/Checkout/index.tsx'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <CheckoutContainer />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App

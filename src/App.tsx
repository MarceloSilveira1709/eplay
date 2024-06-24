import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss} from './styles'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <GlobalCss />
    <div className='container'>
      <Header />
    </div>
    <Rotas />
    <Footer />
    <Cart/>
  </BrowserRouter>
  </Provider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss} from './styles'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <GlobalCss />
    <div className='container'>
      <Header />
    </div>
    <Rotas />
    <Footer />
  </BrowserRouter>
  )
}

export default App

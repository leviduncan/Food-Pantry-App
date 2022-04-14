import './App.css'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import Catalog from './components/Catalog/Catalog'
import MainHeader from './components/MainHeader/MainHeader'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Plans from './components/Plans/Plans'


function App() {
  return (
    <>
      <MainHeader />
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage page="home" />} />
          <Route path='/about' exact element={<AboutPage />} />
          <Route path='/catalog' exact element={<Catalog />} />
          <Route path='/plans' exact element={<Plans />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
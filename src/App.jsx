import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import Product from './components/Product'
import Teams from './components/Teams'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/teams' element={<Teams/>} />
      </Routes>
    </>
  )
}

export default App

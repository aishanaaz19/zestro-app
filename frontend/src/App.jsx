import React from 'react'
import { Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NavBar from './components/Navbar'
import ProductMenu from "./components/ProductMenu"
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

const App = () => { 
  return (
    <div>
      <NavBar />
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path='/login' element={<Login />} />  
          <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

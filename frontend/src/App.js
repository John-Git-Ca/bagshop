import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductListScreen from './screens/ProductListScreen'
import Header from './components/Header'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import CartScreen from './screens/CartScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='productlist' element={<ProductListScreen /> }/>
        <Route path='/signin' element={<SigninScreen />} />
        <Route path='/signup' element={<SignupScreen />} />
        <Route path='/cart' element={<CartScreen />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App

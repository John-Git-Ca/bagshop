import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductListScreen from './screens/ProductListScreen'
import Header from './components/Header'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import CartScreen from './screens/CartScreen'
import Footer from './components/Footer'
import ProductScreen from './screens/ProductScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './components/OrderScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='productlist' element={<ProductListScreen /> }/>
        <Route path='/signin' element={<SigninScreen />} />
        <Route path='/signup' element={<SignupScreen />} />
        <Route path='/cart/:id/:quantity' element={<CartScreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='search/:keyword/page/:pageNumber' element={<HomeScreen />} exact/>
        <Route path='/product/:id' element={<ProductScreen />} />
        <Route path='/product/edit/:id' element={<ProductEditScreen />} />
        <Route path='shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='order/:id' element={<OrderScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

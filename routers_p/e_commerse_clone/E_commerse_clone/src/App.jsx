import React from 'react'
// import Navbar_1 from './components/Navbar_1'
// import Navbar_small from './components/Navbar_small'
import {Mainnav} from './components'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import Products from './pages/Products'
import Context from './pages/context'
const App = () => {
  return (
   <>
   <Mainnav />
   <Routes >
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path='/product' element={<Products/>} ></Route>
    <Route path='/context' element={<Context/>}></Route>
   </Routes>
   </>
  )
}

export default App
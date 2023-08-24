import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Contact from './component/Contact'
import Charts_Maps from './component/Charts_Maps'
import Home from './component/Home'
import { Toaster } from 'react-hot-toast'
import PieChart from './component/PieChart'
const App = () => {
  return (
   <>
<Navbar/>
  <Toaster/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/chart&map' element={<Charts_Maps/>} />
  <Route path='/pie' element={<PieChart/>} />
</Routes>
   </>
  )
}

export default App

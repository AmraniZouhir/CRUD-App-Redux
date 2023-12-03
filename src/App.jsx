import React from 'react'
import Home from './Home'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import Create from './Create'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

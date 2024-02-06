import React from 'react'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MultiStepForm from './pages/Form Steps/MultiStepForm'
import FarmersDetailsPage from './pages/FarmersDetailsPage';
import AddFarmProduce from './pages/AddFarmProduce';




const App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<MultiStepForm />} />
      <Route path='/details' element={<FarmersDetailsPage />} />
      <Route path='/add-farm-produce' element={<AddFarmProduce />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App

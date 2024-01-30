import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MultiStepForm from './pages/Form Steps/MultiStepForm'


const App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<MultiStepForm />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App

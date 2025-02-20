import { lazy, Suspense, useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Login = lazy(()=>import('./components/public/Login.jsx'))

function App() {
  return (
   <Router>
    <Suspense fallback={<div>Loading.....</div>}>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </Suspense>
   </Router>
  )
}

export default App

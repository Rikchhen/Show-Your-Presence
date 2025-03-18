import { lazy, Suspense, useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Login = lazy(()=>import('./components/public/Login.jsx'))
const Registration= lazy(()=>import('./components/public/Registration.jsx'))
const Attendance = lazy(()=>import('./components/private/Attendance.jsx'))

function App() {
  return (
   <Router>
    <Suspense fallback={<div>Loading.....</div>}>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/attendance" element={<Attendance/>}/>
    </Routes>
    </Suspense>
   </Router>
  )
}

export default App

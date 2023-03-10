import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginView } from '../view'

export default function Routers () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< LoginView />} />
      </Routes>
    </Router>
  )
}

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './views/layouts/main/MainLayout'

import './styles/app.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
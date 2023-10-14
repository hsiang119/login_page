// import { useState } from 'react'
import './css/index.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";


function App() {

  return (
    <div className='App flex justify-center items-center min-h-[100vh]'>
      <Router basename={'/login_react'}>
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

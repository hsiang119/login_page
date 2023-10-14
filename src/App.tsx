// import { useState } from 'react'
import './css/index.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";


function App() {

  return (
    <Router basename={'/login_react'}>
        <div className='App flex justify-center items-center min-h-[100vh]'>
          <Routes>
            <Route path="/" element={<Login />}/>
          </Routes>
        </div>
    </Router>
  )
}

export default App

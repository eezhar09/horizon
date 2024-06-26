import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './Component/Header'
import SignUp from './Pages/SignUp'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/sign-in'element={<SignIn/>} />
        <Route path='/sign-up'element={<SignUp/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/profile'element={<Profile/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

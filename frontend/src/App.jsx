import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserLogin from './components/UserLogin'
import ChatContainer from './components/ChatContainer'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<UserLogin/>} path='/'/>
      <Route element={<ChatContainer/>} path='/chatarea'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

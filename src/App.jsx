import React from 'react'
import Signup from './Componets/Signup/Signup'
import Main from './Componets/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Answrs from './Componets/Question/Answrs'

const App = () => {
  return (
<>
<Routes>
  <Route path='/' element={<Signup/>}/>
  <Route path='/main' element={<Main/>}/>
  <Route path='/answer' element={<Answrs/>}/>
</Routes>
</>
    
  )
}

export default App
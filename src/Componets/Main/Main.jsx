import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from '../Home/Home'

const Main = () => {
  const [search,setsearch] = useState('')
  return (
    <div className='w-screen h-screen'>
        <Navbar setsearch={setsearch }/>
        <Home search={search}/>
    </div>
  )
}

export default Main
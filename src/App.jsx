import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Animals from './components/Animals'
import Services from './components/Services'
import Rating from './components/Rating'
import Health from './components/Health'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      <Home/>
      <Animals/>
      <Services/>
      <Health/>
      <About/>
      <Rating/>
    </div>
    </>
  )
}

export default App

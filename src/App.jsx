import { useState } from 'react'
import newsLogo from '/favicon.svg'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar logo={newsLogo}></Navbar>
    </>
  )
}

export default App

import { useState } from 'react'
import newsLogo from '/favicon.svg'
import Navbar from './Components/Navbar'
import './App.css'
import News from './Components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar logo={newsLogo}></Navbar>
      <News></News>

    </>
  )
}

export default App

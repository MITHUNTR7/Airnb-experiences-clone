import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  )
}

export default App

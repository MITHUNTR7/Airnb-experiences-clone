import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/card'

function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img="cardImg.svg"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title= "Life lessons with Katie Zaferes"
        price={136}
      
      />
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/card'
import Data from './Data.js'
function App() {

  const cardList = Data.map((card) => {
    return <Card key = {card.id} {...card}/>
  })

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-list-container">
        {cardList}
      </div>
    </>
  )
}

export default App

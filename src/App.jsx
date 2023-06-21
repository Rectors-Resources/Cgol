import { useState } from 'react'
import Game from './components/game/Game'
import About from './components/about-section/About'
import Footy from './components/footy/Footy'
import './index.css'

function App() {

  return (
    <>
      <Game />
      <About />
      <Footy />
    </>
  )
}

export default App

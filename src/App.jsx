import { useState } from 'react'
import './App.css'
import Game from './Components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game></Game>
    </>
  )
}

export default App

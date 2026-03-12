import { useState } from 'react'
import './App.css'
import Tictactoe from "./Components/Tictactoe.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Tictactoe/>
      </div>
  )
}

export default App

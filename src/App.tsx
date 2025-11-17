import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>🃏 Palace Card Game 🃏</h1>
      <p>Who's ready to rule the palace?</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Create room
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Join room
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          How to play
        </button>
      </div>
      <p className="read-the-docs">
        Created by Priyanka Kishore - Nov 2025
      </p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Peticiones } from './Components/Peticiones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Peticiones/>
    </>
  )
}

export default App

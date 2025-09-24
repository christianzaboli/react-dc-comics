import { useState } from 'react'


import MyHeader from './components/MyHeader'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <MyHeader />
    </>
  )
}

export default App

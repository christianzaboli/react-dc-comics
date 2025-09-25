import { useState } from 'react'

// mie componenti
import MyHeader from './MacroComponents/MyHeader'
import MyMain from './MacroComponents/MyMain'
import MyFooter from './MacroComponents/MyFooter'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyHeader />
      <MyMain />
      <MyFooter />
    </>
  )
}

export default App

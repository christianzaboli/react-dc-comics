import { useState } from 'react'

// mie componenti
import MyHeader from './components/MyHeader'
import MyMain from './components/MyMain'
import MyFooter from './components/MyFooter'

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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import ScaleQuestionnaire from './components/ScaleQuestionnaire/ScaleQuestionnaire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WealthSimple FLEX App</h1>
      <ScaleQuestionnaire />
    </>
  )
}

export default App

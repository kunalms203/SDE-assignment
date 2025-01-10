import { useState } from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Container'>
      <Navbar />
      <Content />
    </div>
  )
}

export default App

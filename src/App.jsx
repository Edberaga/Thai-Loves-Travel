import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/Footer'
import Notify from './component/Notify'

function App() {
  const [count, setCount] = useState(0)

  return (
  <main>
    <div className="container">
      <h2>We are Coming Soon...</h2>
      <p>We are currently working on our new website.<br/>We will be here soon, We will notify you when we finish the Sites!</p>
      <Notify/>
    </div>
    
    <Footer/>
  </main>
  )
}

export default App

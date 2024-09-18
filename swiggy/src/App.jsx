import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Catogery from './assets/components/catogery'
import Toprestuarants from './assets/components/Toprestuarants'
import Onlinedevlivey from './assets/components/Onlinedevlivey'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Catogery/>
    <Toprestuarants/>
    
    <Onlinedevlivey/>
     
    </>
  )
}

export default App

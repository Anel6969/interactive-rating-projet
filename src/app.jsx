import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import MyCard from './components/MyCard.jsx'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyCard/>
      
    </>
  )
}

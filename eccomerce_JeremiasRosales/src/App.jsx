import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <CartWidget />
      <ItemListContainer saludo={'Bienvenido a la tienda'} />
    </>
  )
}

export default App
import { useState } from 'react'
import Header from './Header'
import Person from './Person'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Header />
   <Person name='Suganya Prabagarane' title='Developer' salary={3000} phone='0402502953' email='suganyaprabagarane@gmail.com' animal='Rabbit' />
   <Footer />
   </div>
  )
}

export default App

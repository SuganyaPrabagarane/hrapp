import { useState } from 'react';
import Header from './Header';
import PersonCard from './Employees/PersonCard';
import PersonList from './Employees/PersonList';
import Footer from './Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <PersonList />
      </main>
  
      <Footer />
   </>
  )
}

export default App

import { useEffect, useState } from 'react';
import PersonList from './Employees/PersonList';
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router';
import Root from './pages/Root';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee';
import axios from 'axios';

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect (() =>{
    axios.get('http://localhost:3001/employees')
    .then((res) =>{
      console.log(res);
      setEmployeeData(res.data)})
    .catch((err) => 
        console.log('Failed to fetch data', err));
  }, [])

  const addEmployeeHandler = (newEmployee) =>{
    const updatedEmployee = [...employeeData, {...newEmployee} ];
    setEmployeeData(updatedEmployee);
    console.log(updatedEmployee);
  }

  const router = createBrowserRouter([
    { path: '/' , 
      element:<Root />,
      children:[
        {path: '/add' , element:<AddEmployee onAddEmployee={addEmployeeHandler}/>},
        {path: '/about' , element:<About />},
        {path: '/person' , element:<PersonList employeeData={employeeData} setEmployeeData = {setEmployeeData} />}
      ]},
    
  ]);

  return (
    <>
    <main>
        <RouterProvider router={router} />
      </main>
   </>
  )
}

export default App;

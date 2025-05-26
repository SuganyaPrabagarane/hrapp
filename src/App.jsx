import { useEffect, useState } from 'react';
import PersonList from './Employees/PersonList';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router";
import Root from './pages/Root';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee';
// import axios from 'axios';
import useAxios from './hooks/useAxios';

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  const apiUrl = 'http://localhost:3001/employees';
  const {get, patch, remove} = useAxios();

  // useEffect (() =>{
  //   axios.get('http://localhost:3001/employees')
  //   .then((res) =>{
  //     console.log(res);
  //     setEmployeeData(res.data)})
  //   .catch((err) => 
  //       console.log('Failed to fetch data', err));
  // }, [])

  
    useEffect(() =>{
      const getData = async () => {
        const data = await get(apiUrl);
        if (data) {
          console.log(data);
          setEmployeeData(data);
        }
      };
      getData();
    },[])
  

    const addEmployeeHandler = (newEmployee) =>{
      const updatedEmployee = [...employeeData, {...newEmployee} ];
      setEmployeeData(updatedEmployee);
      console.log(updatedEmployee);
    }

    const handleEditFields = (id, editFields) =>{

        const employee = employeeData.find(emp => emp.id === id);
        if(!employee) return;

        const {skills, ...rest} = editFields;

        // const updatedField = {...employee, ...editFields};

        const updatedField = {...employee, ...rest, skills:Array.isArray(skills) ? skills : (skills || '').split(',')};

        // axios.patch(`http://localhost:3001/employees/${id}`,updatedField)
        // .then((res) => {
        //     setEmployeeData (prev => 
        //         prev.map(employee=> employee.id === id ? res.data : employee));
        // })
        // .catch((err) => console.error('Failed to update new price:', err));

        const patchData = async() =>{
            const data = await patch(`${apiUrl}/${id}`, updatedField);
            console.log('updated data:',data);
            if(data){
            setEmployeeData (prev => 
                 prev.map(employee=> employee.id === id ? data : employee))
            }
      
        };
        patchData();

    }

    const handleDelete = (id) =>{

      const deleteData = async ()=>{
        const data = await remove(`${apiUrl}/${id}`);
        if(data){
          setEmployeeData(prev =>
              prev.filter(employee => employee.id !== id)
          )
        }
      }
      deleteData();
    }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
            <Route index element={<About />} />
            <Route path="/person" 
                 element = { <PersonList 
                  employeeData={employeeData} 
                 setEmployeeData = {setEmployeeData} 
                 onHandleEditFields = {handleEditFields} 
                 onHandleDelete = {handleDelete}
                    />  }              
              />
            <Route path="/add" element={<AddEmployee onAddEmployee={addEmployeeHandler} apiUrl={apiUrl}/> } />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

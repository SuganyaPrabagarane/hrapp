import { useEffect, useState } from 'react';
import PersonList from './pages/Persons/PersonList';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route} from "react-router";
import Root from './pages/Root';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee/AddEmployee';
import useAxios from './hooks/useAxios';
import EmployeeDetail from './pages/Persons/EmployeeDetail';

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const {get, patch, remove} = useAxios();
  const apiUrl = 'http://localhost:3001/employees';
  
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
        const updatedField = {...employee, ...rest, skills:Array.isArray(skills) ? skills : (skills || '').split(',')};

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
                    />  }              
            />
            <Route path="/add" 
              element={<AddEmployee 
                    onAddEmployee={addEmployeeHandler} 
                    apiUrl={apiUrl}
                    /> } 
            />

            <Route path="/employeedetail/:id" 
              element={<EmployeeDetail 
                    apiUrl={apiUrl}
                    handleDelete = {(id)=>handleDelete(id)} 
                    handleEdit={handleEditFields}
                    /> } 
            />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

import {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router";
import useAxios from '../../hooks/useAxios';

const EmployeeDetail =() =>{

    const {id} = useParams();
    const{get} = useAxios();
    console.log('Employee id:',id);
    const [employee, setEmployee] = useState()
    const navigate = useNavigate();
    const apiUrl = 'http://localhost:3001/employees';

    useEffect(() =>{
        const getData = async() =>{
            const data = await get(`${apiUrl}/${id}`,);
            console.log('employee details',data);
            setEmployee(data);
        }
        getData();

    }, [])

  
    if(!employee) return ('Loading employee details');

    return(
        <>
         <div>
             <h2>{employee.name}</h2>
            <p><strong>Title:</strong> {employee.title}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Skills:</strong> {employee.skills.join(', ')}</p>
         </div>
        </>
    )
} 

export default EmployeeDetail;
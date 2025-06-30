import {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router";
import useAxios from '../hooks/useAxios';
import styles from '../../Employees/PersonCard.module.css';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const EditEmployee = ({handleEdit}) =>{

    const {id} = useParams();
    const{get} = useAxios();
    console.log('Employee id:',id);
    const navigate = useNavigate();
    const [employee, setEmployee] = useState();
    const [error, setError] = useState(null);
    const [editFields, setEditFields] = useState({
        salary:'',
        location:'',
        department:'',
        skills:''
    });
    const apiUrl = 'http://localhost:3001/employees';

    useEffect(() =>{
        const getData = async() =>{
            const data = await get(`${apiUrl}/${id}`,);
            if (data){
                console.log('employee details',data);
                setEmployee(data);
                setEditFields({
                      salary: data.salary ,
                      location: data.location,
                      department: data.department,
                      skills: data.skills
                    })        
            }
            
        }

        getData();

    }, [])

    const handleSave = () =>{

        const requiredFields = ['salary', 'location','department','skills'];
        
                for(let field of requiredFields){
                    if(!editFields[field]){
                        setError(`Please enter ${field}`);
                        return;
                    }
                }
        setError('');

        handleEdit(id, editFields);
        console.log(id, editFields);
        alert(`${employee.name}'s information updated successfully`);
        navigate(-1);
    }
  
    const handleCancel = () => {
        setEditFields({  
            salary: employee.salary ,
            location: employee.location,
            department: employee.department,
            skills: employee.skills
            });
      navigate(-1);
    };
    
    
  

    if(!employee) return ('Loading employee details');

    return(
        <>
         <div>
             <h2>{employee.name}</h2>
            <p><strong>Title:</strong> {employee.title}</p>

            { (isEditing) && (

           <>

                <input type='number' value = {editFields.salary} onChange={(e) => setEditFields({ ...editFields, salary: e.target.value })} />
                <input type='text' value = {editFields.location ?? ''} onChange={(e) => setEditFields({ ...editFields, location: e.target.value })} />
                <input type='text' value = {editFields.department ?? ''} onChange={(e) => setEditFields({ ...editFields, department: e.target.value })} />
                <input type='text' value = {editFields.skills ?? ''} onChange={(e) => setEditFields({ ...editFields, skills: e.target.value.split(',') })} />

            </>
            
            )}
            <p><strong style={{ color: 'blue' }}>Phone: </strong>{employee.phone}</p>
            <p><strong style={{ color: 'blue' }}>Email:</strong> {employee.email}</p>

             <button onClick={handleSave} className={styles.saveButton}>Save</button>
            <button  onClick={handleCancel} className={styles.cancelButton}>Cancel</button>

            <ErrorHandling error={error} />
         </div>
        </>
    )
} 

  



export default EditEmployee;
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import './AddEmployee.css';


const AddEmployee = ({onAddEmployee}) =>{

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: name === 'salary' ? Number(value) :value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newEmployee = {...formData, skills:formData.skills.split(',')}

        axios.post('http://localhost:3001/employees', newEmployee)
        .then((res) =>{
            onAddEmployee(res.data);
            navigate('/person');
            setFormData ({
                name:'',
                title:'',
                salary:'',
                phone:'',
                email:'',
                animal:'',
                startDate:'',
                location:'',
                department:'',
                skills:''
                });
            })
        .catch((err) => console.log('Failed to add employee', err));

    }

  
    return(
        <>
            <h1>Add new Employee</h1>
            <form onSubmit = {handleSubmit}>
                <input type='text' placeholder='Name' value={formData.name} onChange={handleChange} name='name' />
                <input type='text' placeholder='title' value={formData.title} onChange={handleChange} name='title' />
                <input type='number' placeholder='salary' value={formData.salary} onChange={handleChange} name='salary' />
                <input type='email' placeholder='email' value={formData.email} onChange={handleChange} name='email' />
                <input type='text' placeholder='animal' value={formData.animal} onChange={handleChange} name='animal' />
                <input type='text' placeholder='startDate' value={formData.startDate} onChange={handleChange} name='startDate' />
                <input type='text' placeholder='location' value={formData.location} onChange={handleChange} name='location' />
                <input type='text' placeholder='department' value={formData.department} onChange={handleChange} name='department' />
                <input type='text' placeholder='skills' value={formData.skills} onChange={handleChange} name='skills' />

                <button type='submit'>Add Employee</button>
            </form>
        </>
    )

}

export default AddEmployee;
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from'./AddEmployee.module.css';
import useAxios from "../../hooks/useAxios";
import ErrorHandling from "../../ErrorHandling/ErrorHandling";

const AddEmployee = ({onAddEmployee,apiUrl}) =>{
    const [error, setError] = useState();
    const{post} = useAxios();
    const [formData, setFormData] = useState({
        name: '',
        gender:'',
        title: '',
        salary: '',
        phone: '',
        email: '',
        animal: '',
        startDate: '',
        location: '',
        department: '',
        skills: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: name === 'salary' ? Number(value) :value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const requiredFields = ['name', 'title', 'email','department','skills'];    
        
        for(let field of requiredFields){
            if(!formData[field]){
                setError(`Please enter ${field}`);
                return;
            }
        }
        setError('');

        const newEmployee = {...formData, skills:formData.skills.split(',')}

        const postData = async () =>{
            const data = await post(apiUrl, newEmployee);
            if(data){
                onAddEmployee(data);
                alert(`${formData.name} added successfully`)
                navigate('/person');
                setFormData ({
                    name:'',
                    gender:'',
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
            }
        }

        postData();

    }

  
    return(
        <>
        <div className={styles.container}>
            <h1>Add new Employee</h1>

            <form onSubmit = {handleSubmit} className={styles.form}>
                
                <input type='text' placeholder='Name' value={formData.name} onChange={handleChange} name='name' className={styles.input} />
                <select value={formData.gender}onChange={handleChange} className={styles.select} name='gender'>
                        <option value="" disabled={true}> --Select Gender-- </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                </select>                
                <input type='text' placeholder='Title' value={formData.title} onChange={handleChange} name='title' className={styles.input}/>
                <input type='number' placeholder='Salary' value={formData.salary} onChange={handleChange} name='salary' className={styles.input}/>
                <input type='number' placeholder='Phone' value={formData.phone} onChange={handleChange} name='phone' className={styles.input}/>
                <input type='email' placeholder='Email' value={formData.email} onChange={handleChange} name='email' className={styles.input}/>

                <div className="addEmployee-animal">
                    <select value={formData.animal}onChange={handleChange} className={styles.select} name='animal'>
                        <option value="" disabled={true}> --Select an Animal-- </option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Bee">Bee</option>
                        <option value="Dog">Dog</option>
                        <option value="Deer">Deer</option>
                        <option value="Elephant">Elephant</option>
                        <option value="Fox">Fox</option>
                        <option value="JellyFish">JellyFish</option>
                        <option value="Koala">Koala</option>
                        <option value="Lion">Lion</option>
                        <option value="Panda">Panda</option>
                        <option value="Squirrel">Squirrel</option>
                        <option value="Turtle">Turtle</option>
                        <option value="Whale">Whale</option>
                    </select>
                </div>

                <input type='date' placeholder='StartDate' value={formData.startDate} onChange={handleChange} name='startDate' className={styles.input}/>
                <input type='text' placeholder='Location' value={formData.location} onChange={handleChange} name='location' className={styles.input}/>
                <input type='text' placeholder='Department' value={formData.department} onChange={handleChange} name='department' className={styles.input}/>
                <input type='text' placeholder='Skills' value={formData.skills} onChange={handleChange} name='skills' className={styles.input}/>
                
                <button type='submit' className={styles.submitBtn}>Add Employee</button>
                <ErrorHandling error={error}/>
            </form>
            </div>
        </>
    )

}

export default AddEmployee;
import PersonCard from "../../Employees/PersonCard";
import { useState } from "react";
import { useNavigate } from 'react-router';
import styles from './PersonList.module.css';

const PersonList = ({employeeData, onHandleEditFields}) =>{
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleSeeMore =(id) =>{
        navigate(`/employeedetail/${id}`);
    }

    const handleSearch =(event) =>{
        setSearchValue(event.target.value);
    }

    const simulateLoading = (callback) =>{
        setTimeout(callback, 2000);
    };

    const filteredEmployee = employeeData.filter(employee =>{
        const searchByText = searchValue.toLowerCase();
        const searchById = searchValue;
    
        const search = 
            employee.name.toLowerCase().includes(searchByText) ||
            employee.department.toLowerCase().includes(searchByText) || 
            employee.id.includes(searchById) 

        const filtered = filter === 'all' ||  employee.title === filter;

        return (search && filtered);
    });
    
    return(
        <>
            <h1>Employee Details</h1>
            <div className={styles.searchAndFilter}>
                <div className={styles.search}>
                    <label htmlFor='search' >Search</label>
                    <input className={styles.searchInput}
                        type='text' 
                        id='search' 
                        name='search' 
                        value={searchValue} 
                        onChange = {handleSearch} 
                        placeholder="Search by Name, Id, Dept"  
                    />
                </div>
                <div className={styles.filter}>
                    <label htmlFor='filter-user'>Filter by Title</label>
                    <select value={filter} onChange={(e) =>setFilter(e.target.value)}>
                        <option value = 'all'>All</option>
                            {/* It removes the duplicate title */}
                            {[...new Set(employeeData.map(emp => emp.title))].map(title => (
                                <option key={title} value={title}>{title}</option>
                            ))}
                    </select>
                </div>
            </div>

            <div className={styles.employeeList}>
                {filteredEmployee.length > 0 ? (
                    filteredEmployee.map(employee => (
                    <PersonCard key={employee.id} {...employee} 
                        skills={employee.skills.join(', ')} 
                        OnHandleSeeMore = {()=> handleSeeMore(employee.id)}
                    />

                    ))
                ) : (

                <p>No matching found. Try another search.</p>

                )} 
            </div>
       </>
    )
}

export default PersonList;
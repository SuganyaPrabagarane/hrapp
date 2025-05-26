import PersonCard from "./PersonCard";
import { useState } from "react";

const PersonList = ({employeeData, onHandleEditFields,onHandleDelete}) =>{
    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState('all');


    const handleSearch =(event) =>{
        setSearchValue(event.target.value);

    }

    const filteredEmployee = employeeData.filter(employee =>{
        const searchByText = searchValue.toLowerCase();
        const searchById = searchValue;
    
        const search = 
            employee.name.toLowerCase().includes(searchById) ||
            employee.title.toLowerCase().includes(searchByText) || 
            employee.department.toLowerCase().includes(searchByText) || 
            employee.id.includes(searchById) 

        const filtered = filter === 'all' ||  employee.title === filter;

        return (search && filtered);
    });
    
    return(
        <>
        <h1>Employees Details</h1>

        <div className="search">
            <label htmlFor='search'>Search</label>
            <input type='text' id='search' name='search' value={searchValue} onChange = {handleSearch} placeholder="Search by Name, Id, Title, Dept"/>
        </div>

        <div className="filters">
            <label htmlFor='filter-user'>Filter by Title</label>
            <select value={filter} onChange={(e) =>setFilter(e.target.value)}>
                <option value = 'all'>All</option>

                {/* This displyas duplicate title */}
                {/* {employeeData.map(employee =>(
                    <option key={employee.id} value={employee.title}>{employee.title}</option>
                ))} */}

                {/* It removes the duplicate title */}
                {[...new Set(employeeData.map(emp => emp.title))].map(title => (
                    <option key={title} value={title}>{title}</option>
                ))}
              

            </select>
        </div>

       <div className="employeeList">
       {filteredEmployee.length > 0 ? (

        filteredEmployee.map(employee => (
        <PersonCard key={employee.id} {...employee} 
             skills={employee.skills.join(', ')} 
            handleEdit = {(id,editFields) => onHandleEditFields(id, editFields)}
            handleDelete = {(id) => onHandleDelete(id)}
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
import PersonCard from "./PersonCard";
import { useState } from "react";

const PersonList = ({employeeData}) =>{
    const [searchValue, setSearchValue] = useState('');

    const handleSearch =(event) =>{
        setSearchValue(event.target.value);

    }

    const filteredEmployee = employeeData.filter(employee =>{
        const searchByText = searchValue.toLowerCase();
        const searchById = searchValue;
        return(
            employee.name.toLowerCase().includes(searchById) ||
            employee.title.toLowerCase().includes(searchByText) || employee.department.toLowerCase().includes(searchByText) || employee.id.includes(searchById)
        );
    });
    
    return(
        <>
        <h1>Employees Details</h1>

        <div className="search">
            <label htmlFor='search'>Search</label>
            <input type='text' id='search' name='search' value={searchValue} onChange = {handleSearch} placeholder="Search by Name, Id, Title, Dept"/>
        </div>

        <div className="filters">
            <label for='filter-user'>Filter by Title</label>
            <select value=''>
                <option value = 'all'>All</option>
                {filteredEmployee.map(employee =>(
                    <option key={employee.id} value={employee.id}>{employee.title}</option>
                ))}
              

            </select>
        </div>

       <div className="employeeList">
       {filteredEmployee.length > 0 ? (

        filteredEmployee.map(employee => (
        <PersonCard key={employee.id} {...employee} skills={employee.skills.join(', ')}/>

        ))
       ) : (

        <p>No matching found. Try another search.</p>

       )}
        
        
       </div>
       </>
    )
}

export default PersonList;
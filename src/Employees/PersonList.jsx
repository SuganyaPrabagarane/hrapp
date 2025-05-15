import PersonCard from "./PersonCard"
import { employees } from "./employeesData"
import { useState } from "react";

const PersonList = ({employeeData}) =>{
    
    return(
        <>
        <h1>Employees Details</h1>
       <div className="employeeList">
       
        {employeeData.map(employee => (
            <PersonCard key={employee.id} {...employee} skills={employee.skills.join(', ')}/>

            ))}
        
       </div>
       </>
    )
}

export default PersonList;
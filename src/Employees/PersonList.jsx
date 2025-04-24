import PersonCard from "./PersonCard"
import { employees } from "./employeesData"

const PersonList = () =>{
    return(
        <>
        <h1>Employees Details</h1>
       <div className="employeeList">
        {employees.map(employee => (
            <PersonCard key={employee.id} {...employee} skills={employee.skills.flat().join(', ')}/>

            ))}
        
       </div>
       </>
    )
}

export default PersonList;
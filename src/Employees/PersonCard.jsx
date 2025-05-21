import { useState } from 'react';
import './Employees.css';
const PersonCard = ({id,name,title,salary,phone,email,animal,startDate,location,department,skills,handleEdit,...rest}) =>{

    const [isEditing, setIsEditing] = useState(false);
    const [editFields, setEditFields] = useState({
        salary: salary ,
        location: location,
        department: department,
        skills: skills
    });

    const handleSave = () =>{
        handleEdit(id, editFields);
        console.log(id, editFields);
        setIsEditing(!isEditing);
        alert(`${name}'s information updated successfully`);
    }
  
    const handleCancel = () => {
        setEditFields({  
            salary,
            location,
            department,
            skills: Array.isArray(skills) ? skills : (skills || '').split(',')
            });
      setIsEditing(!isEditing);
    };



    const calculateExperience = () =>{
        const fromDate = new Date(startDate);
        const toDate = new Date();
        let years = toDate.getFullYear() - fromDate.getFullYear();
        let months = toDate.getMonth() - fromDate.getMonth();
        if (months < 0){
            years--;
            months += 12;
        }

        return{
            years,
            months
        }

    }

    const {years, months} = calculateExperience(); // Destructure years and months from the return object

    let anniversaryMessage = '';
    if ([5,10,15].includes(years) && months == 0){
         anniversaryMessage = '🎉 Schedule recognition meeting';
    } else if (years === 0 && months < 6){
        anniversaryMessage = '🔔 Schedule probation review';   
    }

    const addAnimalEmoji = (animal) =>{
    
        const animalEmojis = [
        { name: 'Rabbit' , emoji: '🐇'},
        { name: 'Tiger' , emoji: '🐅'},
        { name: 'Dog', emoji: '🐕'},
        { name: 'Cow', emoji: '🐄'},
        { name: 'Cat' , emoji:'🐈'},
        { name: 'Llama', emoji: '🐈'},
        { name: 'Goat', emoji: '🐐'},
        { name: 'Fox', emoji: '🦊'},
        { name: 'Panda', emoji: '🐼'},
        { name: 'Polar Bear', emoji: '🐻‍❄️'},
        { name: 'Seal', emoji: '🦭'},
        { name: 'Kola', emoji: ''}
        
    ]

    const filterEmoji = animalEmojis.find(a => a.name.toLowerCase() === animal.toLowerCase());
    return filterEmoji ? filterEmoji.emoji : ' ';

    }

    return(
       
        <div className="card">
            <div className='div-name'>
                <p className='name'>{name} (<span className='title'>{title}</span>)</p>
                {/* <p className='title'> {title}</p> */}
            </div>
            <div className='div-title'>
                { (!isEditing) ? (
                    <>
                        <p><strong style={{ color: 'blue' }}>Salary:</strong> {salary} €</p>
                        <p><strong style={{ color: 'blue' }}>Location:</strong> {location}</p>
                        <p><strong style={{ color: 'blue' }}>Department:</strong> {department}</p>
                        <p><strong style={{ color: 'blue' }}>Skills: </strong>{skills}</p>
                    </>
                ) : (
                    <>
                        <input type='number' value = {editFields.salary} onChange={(e) => setEditFields({ ...editFields, salary: e.target.value })} />
                        <input type='text' value = {editFields.location ?? ''} onChange={(e) => setEditFields({ ...editFields, location: e.target.value })} />
                        <input type='text' value = {editFields.department ?? ''} onChange={(e) => setEditFields({ ...editFields, department: e.target.value })} />
                        <input type='text' value = {editFields.skills ?? ''} onChange={(e) => setEditFields({ ...editFields, skills: e.target.value.split(',') })} />
                    </>
                )

                }
            <p><strong style={{ color: 'blue' }}>Phone: </strong>{phone}</p>
            <p><strong style={{ color: 'blue' }}>Email:</strong> {email}</p>
            <p><strong style={{ color: 'blue' }}>Animal:</strong> {animal} {addAnimalEmoji(animal)}</p>
            <p><strong style={{ color: 'blue' }}>Start Date:</strong> {startDate}</p>
            <p><strong style={{ color: 'blue' }}>Experience: </strong>{years} Years and {months} Months</p>
            <p className='anniversary-message'><strong>{anniversaryMessage}</strong></p>

            <div className='buttons'>
    
                {isEditing ? (
                    <>
                         <button onClick={handleSave}>Save</button>
                         <button onClick={handleCancel}>Cancel</button>
                    </>
                ): (
                    <button onClick={() =>setIsEditing(!isEditing)}>Edit</button>
                )}
            </div>
            </div>
                  
        </div>
      
    )
}

export default PersonCard;
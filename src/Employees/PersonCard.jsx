import { useState } from 'react';
import './Employees.css';
const PersonCard = ({id,name,title,salary,phone,email,animal,startDate,location,department,skills,handleEdit,handleDelete}) =>{

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

    const handleRemove =()=>{
        handleDelete(id);
        console.log('deleted id:', id);
        alert(`${name}'s details are deleted successfully`)
    }

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
    let anniversaryImage = '';
    if ([5,10,15].includes(years) && months == 0){
         anniversaryMessage = 'Schedule recognition meeting';
         anniversaryImage = 'public/icons/party-popper.png';
    } else if (years === 0 && months < 6){
        anniversaryMessage = 'Schedule probation review';  
        anniversaryImage = 'public/icons/christmas-bell.png' 
    }

    const addAnimalEmoji = (animal) =>{
    
        const animalEmojis = [
        { name: 'Rabbit' , emoji: '/public/icons/rabbit.png' },
        { name: 'Bee' , emoji: '/public/icons/bee.png'},
        { name: 'Dog', emoji: '/public/icons/dog.png'},
        { name: 'Deer', emoji: '/public/icons/deer.png'},
        { name: 'Elephant' , emoji:'/public/icons/elephant.png'},
        { name: 'Fox', emoji: '/public/icons/fox.png'},
        { name: 'JellyFish', emoji: '/public/icons/jellyfish.png'},
        { name: 'Koala', emoji: '/public/icons/koala.png'},
        { name: 'Lion', emoji: '/public/icons/lion.png'},
        { name: 'Owl', emoji: '/public/icons/owl.png'},
        { name: 'Panda', emoji: '/public/icons/panda.png'},
        { name: 'Squirrel', emoji: '/public/icons/squirrel.png'},
        { name: 'Turtle', emoji: '/public/icons/turtle.png'},
        { name: 'Whale', emoji: '/public/icons/whale.png'}
   
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
            <p><strong style={{ color: 'blue' }}>Animal:</strong> <img src = {addAnimalEmoji(animal)} height={40} width={40} alt='animal-image'/></p>
            <p><strong style={{ color: 'blue' }}>Start Date:</strong> {startDate}</p>
            <p><strong style={{ color: 'blue' }}>Experience: </strong>{years} Years and {months} Months</p>

            {(anniversaryMessage === 'Schedule recognition meeting' || anniversaryMessage ==='Schedule probation review') && 
                (
                    <p className='anniversary-message'><strong> <img src = {anniversaryImage} height={40} width={40} alt='anniversary-image'/> {anniversaryMessage}</strong></p> 
                )
            }

            <div className='buttons'>
    
                {isEditing ? (
                    <>
                         <button onClick={handleSave}>Save</button>
                         <button onClick={handleCancel}>Cancel</button>
                    </>
                ): (
                    <button onClick={() =>setIsEditing(!isEditing)}>Edit</button>
                )}
                <button onClick={handleRemove}>Remove</button>
            </div>
            </div>
                  
        </div>
      
    )
}

export default PersonCard;
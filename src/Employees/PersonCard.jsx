import { useState } from 'react';
import AnimalEmoji from './AnimalEmoji';

import styles from './PersonCard.module.css';
import Experience from './Experience';

const PersonCard = ({id,name,title,salary,phone,email,animal,startDate,location,department,skills,handleEdit,handleDelete,OnHandleSeeMore,...rest}) =>{
  

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

    return(
       
        <div className={styles.card}>
            <div className={styles.nameAndTitle}>
                <p className={styles.name}>{name} (<span className={styles.title}>{title}</span>)</p>
                {/* <p className='title'> {title}</p> */}
            </div>
            <div className={styles.cardContainer}>
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

            <AnimalEmoji animal = {animal} />
            <Experience startDate={startDate} />

            <div className={styles.buttons}>
    
                {isEditing ? (
                    <>
                         <button onClick={handleSave} className={styles.saveButton}>Save</button>
                         <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
                    </>
                ): (
                    <button onClick={() =>setIsEditing(!isEditing)} className={styles.editButton}>Edit</button>
                )}
                <button onClick={OnHandleSeeMore} className={styles.seeMoreButton}>See More</button>
                <button onClick={handleRemove} className={styles.removeButton}>Remove</button>
            </div>
            </div>
                  
        </div>
      
    )
}

export default PersonCard;
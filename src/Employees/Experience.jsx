import React from 'react';
import styles from './Experience.module.css'; 

const Experience = ({ startDate }) => {

  const calculateExperience = () => {
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
         anniversaryImage = '/icons/party-popper.png';
    } else if (years === 0 && months < 6){
        anniversaryMessage = 'Schedule probation review';  
        anniversaryImage = '/icons/christmas-bell.png' 
    }

  return (
    <div className={styles.experience}>
      
      <p> <img src='/icons/experience.webp' height={25} width={25} alt='experience-icon' />  {years} Years and {months} Months</p>
      {anniversaryMessage && (
        <p className={`${styles.anniversaryMessage} ${
          anniversaryMessage === 'Schedule recognition meeting'
            ? styles.recognition
            : styles.probation
        }`}>
          <strong>
            <img src={anniversaryImage} alt='anniversary-icon' /> {anniversaryMessage}
          </strong>
        </p>
      )}
    </div>
  );
};

export default Experience;

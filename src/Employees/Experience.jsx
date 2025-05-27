import React from 'react';
import styles from './PersonCard.module.css'; 

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
         anniversaryImage = 'public/icons/party-popper.png';
    } else if (years === 0 && months < 6){
        anniversaryMessage = 'Schedule probation review';  
        anniversaryImage = 'public/icons/christmas-bell.png' 
    }

  return (
    <div>
      <p><strong style={{ color: 'blue' }}>Start Date:</strong> {startDate}</p>
      <p><strong style={{ color: 'blue' }}>Experience:</strong> {years} Years and {months} Months</p>
      {anniversaryMessage && (
        <p className={styles.anniversaryMessage}>
          <strong>
            <img src={anniversaryImage} height={40} width={40} alt='anniversary-icon' /> {anniversaryMessage}
          </strong>
        </p>
      )}
    </div>
  );
};

export default Experience;

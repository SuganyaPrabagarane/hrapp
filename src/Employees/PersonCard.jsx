import Experience from './Experience';
import styles from './PersonCard.module.css';

const PersonCard = ({
  id,
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills,
  OnHandleSeeMore,
  gender,
}) => {


  return (
    <div className={styles.container}>
      <div className={styles.personCard}>
        <div className={styles.imageSection}>
          {gender === 'Male' ? (
            <img src="/image/male.avif" alt="male" className={styles.image} />
          ) : (
            <img src="/image/female.jpg" alt="female" className={styles.image} />
          )} 
        </div>
        <div className={styles.starWrapper}>
  <img src="/image/star.png" alt="Star" className={styles.starImage} />
  <p className={styles.starId}>{id}</p>
</div>

        <div className={styles.textSection}>
          <p className={styles.name}>
            {name} <span className={styles.title}>({title})</span>
          </p>
          <p> <img src="/icons/location.png" alt="Location icon" className={styles.icon}/>
            {location}
          </p>
          <p> <img src="/icons/phone.png" alt="Phone icon" className={styles.icon}/>
              {phone}
          </p>
          <p> <img src="/icons/mail.png" alt="Mail icon" className={styles.icon}/>
              {email}
          </p>
      
           <Experience startDate={startDate} />

          <div className={styles.buttons}>
            <button onClick={OnHandleSeeMore} className={styles.seeMoreButton}>See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;

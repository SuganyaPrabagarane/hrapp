import './Employees.css';
const PersonCard = ({name,title,salary,phone,email,animal,startDate,location,department,skills,...rest}) =>{

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
            <p><strong style={{ color: 'blue' }}>Salary:</strong> {salary} €</p>
            <p><strong style={{ color: 'blue' }}>Phone: </strong>{phone}</p>
            <p><strong style={{ color: 'blue' }}>Email:</strong> {email}</p>
            <p><strong style={{ color: 'blue' }}>Animal:</strong> {animal} {addAnimalEmoji(animal)}</p>
            <p><strong style={{ color: 'blue' }}>Start Date:</strong> {startDate}</p>
            <p><strong style={{ color: 'blue' }}>Location:</strong> {location}</p>
            <p><strong style={{ color: 'blue' }}>Department:</strong> {department}</p>
            <p><strong style={{ color: 'blue' }}>Skills: </strong>{skills}</p>
            <p><strong style={{ color: 'blue' }}>Experience: </strong>{years} Years and {months} Months</p>
            <p className='anniversary-message'><strong>{anniversaryMessage}</strong></p>
            </div>
                  
        </div>
      
    )
}

export default PersonCard;
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
        { name: 'Seal', emoji: '🦭'}
    ]

    const filterEmoji = animalEmojis.find(a => a.name.toLowerCase() === animal.toLowerCase());
    return filterEmoji ? filterEmoji.emoji : ' ';

    }

    return(
       
        <div className="card">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Salary:</strong> {salary} €</p>
            <p><strong>Phone: </strong>{phone}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Animal:</strong> {animal} {addAnimalEmoji(animal)}</p>
            <p><strong>Start Date:</strong> {startDate}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Department:</strong> {department}</p>
            <p><strong>Skills: </strong>{skills}</p>
            <p><strong>Experience: </strong>{years} Years and {months} Months</p>
            <p><strong>{anniversaryMessage}</strong></p>
                  
        </div>
      
    )
}

export default PersonCard;
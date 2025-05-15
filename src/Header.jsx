import {Link, NavLink} from 'react-router';
import './Header.css';

const Header = ({logo}) =>{
    return (
        <header>
            <div>
                <Link to = '/'>
            <h2>{logo}</h2>
            </Link>
            </div>
            <nav>
                <ul>
                    <li> <NavLink to = '/'>Home</NavLink></li>
                    <li> <NavLink to = '/about'>About</NavLink></li>
                    <li> <NavLink to = '/person'>Persons</NavLink></li>
                    <li> <NavLink to = '/add'>Add new Employee</NavLink></li>
                </ul>
                </nav>
        </header>
    );
}

export default Header;
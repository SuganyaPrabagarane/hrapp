import {Link, NavLink} from 'react-router';
import styles from './Header.module.css';

const Header = ({logo}) =>{
    return (
        <header className={styles.header}> 
            <div>
                <Link to = '/' className={styles.navLink}>
                    <h2>{logo}</h2>
                </Link>
            </div>
            <nav>
                <ul>
                    <li className={styles.navListItem}> 
                        <NavLink to = '/' 
                            className=  {({isActive}) => isActive ? 
                                `${styles.navLink} ${styles.active}` 
                                : styles.navLink} 
                            >     
                                Home
                        </NavLink>
                    </li>
                    <li className={styles.navListItem}> 
                        <NavLink to = '/person' 
                            className= {({ isActive }) => isActive ? 
                                `${styles.navLink} ${styles.active}` 
                                : styles.navLink } 
                            >
                                Persons
                        </NavLink>
                    </li>
                    <li className={styles.navListItem}> 
                        <NavLink to = '/add' 
                            className={({ isActive }) => isActive ? 
                                `${styles.navLink} ${styles.active}` 
                                : styles.navLink} 
                            >
                                Add new Employee
                        </NavLink>
                    </li>
                   
                </ul>
            </nav>
        </header>
    );
}

export default Header;
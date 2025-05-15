import Header from '../Header';
import Footer from "../Footer";
import { Outlet } from "react-router";

const Persons = () =>{
    return(
        <>
        <Header logo='Suganya Prabagarane'/>
        <main>
        <Outlet />
        </main>
        <Footer year='2025K'/>
        </>
    )
}

export default Persons;
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar(){
    return(
        <div className="d-flex justify-content-evenly">
            <NavLink to="/"
            className={({ isActive }) => isActive ? "fw-bold" : ""}>Home</NavLink>
            <NavLink to="/shopping"
            className={({ isActive }) => isActive ? "fw-bold" : ""}>Shopping</NavLink>
            <NavLink to="/about"
            className={({ isActive }) => isActive ? "fw-bold" : ""}>About</NavLink>
            <NavLink to="/contact"
            className={({ isActive }) => isActive ? "fw-bold" : ""}>Contact</NavLink>
            <a href="https://github.com/Anija1996/FSD-React.JS">GitHub</a>
        </div>
    )
}
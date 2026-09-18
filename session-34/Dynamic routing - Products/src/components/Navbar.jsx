import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){
    return(<>
    <div className="d-flex justify-content-evenly">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Shopping</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </div>
    </>)
}
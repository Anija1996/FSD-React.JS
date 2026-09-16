import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar(){
    return(
        <div className="d-flex justify-content-evenly">
            <Link to="/">Home</Link>
            <Link to="/shopping">Shopping</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}
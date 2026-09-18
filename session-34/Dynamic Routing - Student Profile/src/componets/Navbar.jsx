import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){
    return(
        <BootstrapNavbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="w-100 d-flex justify-content-evenly">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/students">Students</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Container>
      </BootstrapNavbar>
    )
}
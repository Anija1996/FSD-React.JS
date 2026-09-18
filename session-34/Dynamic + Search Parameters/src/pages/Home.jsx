import { NavLink } from "react-router-dom";

export default function Home(){
    return(
        <>
            <h2>Home Page</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products/25?color=black&size=M">Products</NavLink>

        </>
    )
}
import { NavLink } from "react-router-dom";

export default  function Home(){
     return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users/25/orders/2000">Orders</NavLink>
        </>
     )
}
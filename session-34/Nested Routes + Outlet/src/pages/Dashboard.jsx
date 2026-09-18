import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function Dashboard(){
    return(<>
        <h2>Dashboard</h2>
        
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="orders">Orders</NavLink>
        <NavLink to="settings">Settings</NavLink>

        
        
        <Outlet />
    </>)
}
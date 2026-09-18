import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import DashHome from "./pages/DashHome";
import { Route,Routes } from "react-router-dom";

export default function App(){
  return(
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<DashHome/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route path="orders" element={<Orders/>} />
        <Route path="settings" element={<Settings/>} />
      </Route>
    </Routes>
    </>
  )
}
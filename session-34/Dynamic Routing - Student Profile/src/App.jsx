import { Routes,Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./Pages/Home"; 
import Contact from "./Pages/Contact";
import Candidates from "./Pages/Candidates";
import Students from "./Pages/Students";
export default function App() {
  return(<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/students" element={<Candidates />} />
      <Route path="/students/:id" element={<Students />} />      
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </>)
}
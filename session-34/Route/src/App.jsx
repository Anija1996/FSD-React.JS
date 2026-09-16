import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shopping from "./Pages/Shopping";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";

export default function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about"  element={<About />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/contact" element={<Contact  />} />

    </Routes>
    </>
  )
}
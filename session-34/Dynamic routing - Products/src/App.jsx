import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shopping from "./pages/Shopping"
import Contact from "./pages/Contact"
import Products from "./pages/Products"

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Shopping/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/products/:id" element={<Products/>}></Route>

      </Routes>
    </>
  )
}

export default App

import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDetails from "./pages/ProductsDetails";

export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products/:id" element={<ProductsDetails/>}></Route>
        
      </Routes>
    </>
  )
}
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";

export default  function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users/:userId/orders/:orderId" element={<Order/>}></Route>
      </Routes>
    </>
  )
}
import { useState } from 'react'
import CounterButton from './components/CounterButton';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// function App() {
//   const [count , setCount] = useState(0) ;
//   return(
//     <>
//       <h2>Count : {count}</h2>
//       <CounterButton 
//         handleIncrement={()=>setCount(count+1)}
//         label={"Increment"}
//      /> <br />

//      <CounterButton 
//         handleIncrement={()=>setCount(0)}
//         label={"Reset"}
//      /> <br />

//      <CounterButton 
//         handleIncrement={()=>setCount(count-1)}
//         label={"Decrement"}
//      /> <br />

//       {/* <h2>Count : {count}</h2>
//       <button onClick={()=>setCount(count+1)}>Increment</button><br />
//       <button onClick={()=>setCount(0)}>Reset</button><br />
//       <button onClick={()=>setCount(count-1)}>Decrement</button> */}

//     </>
//   )
// }

function App(){
  const [username, setUsername] = useState("");

  return(
    <>
      <br />
      <input 
        onChange={(e)=>setUsername(e.target.value)}
        type='text'
        placeholder='Enter Your Name'
       />
      <p>Username : {username}</p>
    </>
  )
}

export default App

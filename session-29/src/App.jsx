// Events

// const { useState } = require("react")

// import { useState } from "react"

// function App() {
//     // const name = "Anija"
//     // const age = 25
//     // const course = "React"

//       // const title = "My Product"
//       // const image = "product.jpg"
//       // const price = 500

//   return (
//     <>
//       {/* <h1>Welcome to React</h1> */}
//       {/* <h1>Welcome {name}</h1>
//       <p>Age: {age}</p>
//       <p>Course: {course}</p> */}

//         {/* <h1 className='product-title'>{title}</h1>
//         <img src={image} />
//         <p>${price}</p> */}

//         <Product name="Shirt" price={30} category="Clothing" brand="Adidas" />



//     </>
//   )
// }

// export default App



// Task-1
// export default function App(){
//   function handleClick(){
//     console.log("Button Clicked");
    
//   }
//   return(
//     <>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   )
// }


//Task-2
// export default function App(){
//   function handleClick(){
//     console.log("Hello Anija");
    
//   }
//   return(
//     <>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   )
// }

// Task-3
// export default function App(){
//   return(
//     <>
//       <button onClick={()=>(console.log("Apple Clicked"))}>Apple</button>
//       <button onClick={()=>(console.log("Banana Clicked"))}>Banana</button>
//       <button onClick={()=>(console.log("Mango Clicked"))}>Mango</button>
//     </>
//   )
// }

// Task-4

// export default function App(){
//   function handleClick(name){
//     console.log("Hello ",name);
    
//   }

//   return(
//     <>
//       <button onClick={()=>handleClick("Anija")}>Click</button>
//     </>
//   )
// }


// Task-5 
// export default function App(){
//   return(
//     <>
//       <button onClick={()=>(console.log("Apple Clicked"))}>Apple</button>
//       <button onClick={()=>(console.log("Banana Clicked"))}>Banana</button>
//       <button onClick={()=>(console.log("Mango Clicked"))}>Mango</button>
//     </>
//   )
// }

// // Task-7
// import Product from "./components/Product";

// export default function App(){
//  return(
//     <>
//       <Product name="Shirt" price={30} />
//       <Product name="Shoes" price={80} />
//       <Product name="Bag" price={50} />

//     </>
//   )
// }



// Task-8
//  import Product from "./components/Product";

// export default function App(){

   
//   return(
//     <>
//       <button onClick={()=>(console.log("Shirt Selected"))} name="Shirt" price={30}>Shirt</button>
//       <button onClick={()=>(console.log("Shoes Selected"))} name="Shirt" price={30}>Shoes</button>
//       <button onClick={()=>(console.log("Bag Selected"))} name="Shirt" price={30}>Bag</button>

//     </>
//   )
// }

// Task-9
// import { useState } from "react";
// export default function App(){
//   const [clk, setClick] = useState("Hello");

//   return(
//     <>
//       <p>{clk}</p>
//       <button onClick={()=>setClick("Hello Anija")}>Click Me</button>
//     </>
//   )
// }

// Task-10
// import { useState } from "react";
// export default function App(){
//   const [clk, setClick] = useState("OFF");

//   return(
//     <>
//       <p>{clk}</p>
//       <button onClick={()=>setClick((prev)=>(prev==="OFF" ? "ON" : "OFF"))}>Click Me</button>
//     </>
//   )
// }

// Task-11

// import { useState } from "react";
// export default function App(){
//   const [count, setCount]  = useState(0);
//   return(
//     <>
//       <p>{count}</p>
//       <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
//     </>
//   )
// }


// Task-12
// import { useState } from "react";
// export default function App(){
//   const [count, setCount]  = useState(0);
//   return(
//     <>
//       <p>{count}</p>
//       <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
//       <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>

//     </>
//   )
// }

// Task-13
// import { useState } from "react";
// export default function App(){
//   const [count, setCount]  = useState(0);
//   return(
//     <>
//       <p>{count}</p>
//       <p>{count===0 ? "Counter is at zero" : count>0 ? "Counter is positive" : "Counter is negative"}</p>
//       <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
//       <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
//       <button onClick={()=>setCount(0)}>Reset</button>


//     </>
//   )
// }

// Task-14
// export default function App(){
//   function handleClick(name){
//     console.log(name+" Selected");
    
//   }
//   return(
//     <>
//       <button onClick={()=>handleClick("Shirt")}>Shirt</button>
//       <button onClick={()=>handleClick("Shoes")}>Shoes</button>
//       <button onClick={()=>handleClick("Bag")}>Bag</button>
//     </>
//   )
// }

// import Product from "./components/Product";

// export default function App(){
//   return(
//     <>
//       <Product name="Shirt" price={30} />
//       <Product name="Shoes" price={80} />
//       <Product name="Bag" price={50} />
//     </>
//   )
// }


// onChange()

// 1
// import { useState } from "react"
// export default function App(){
//   const [name,setName] = useState("Hai")
//   return(
//     <>
//       <input onChange={(e)=>setName(e.target.value)} value={name}></input>
//       <p>{name}</p>
//     </>
//   )
// }

//2
// import { useState } from "react";
// export default function App(){
//   const [name,setName] = useState("Guest")
//   return(
//     <>
//       <input onChange={(e)=>setName(e.target.value)} />
//       <p>Welcome {name}</p>
//     </>
//   )
// }

//3
// import { useState } from "react";
// export default function App(){
//   const [count, setCount]  = useState("");
//   return(
//     <>
//       <input onChange={(e)=>setCount(e.target.value.length)} />
//       <p>Character length is {count}</p>
//     </>
//   )
// }

//4
// import { useState } from "react";
// export default function App(){
//   const [name, setName]  = useState("");
//   return(
//     <>
//       <input value={name} onChange={(e)=>setName(e.target.value)} />
//       <button onClick={()=>setName("")}>Reset</button>
      
//     </>
//   )
// }

//5
// import { useState } from "react";
// export default function App(){
//   const [showPswd,setpswd]=useState(false)
//   return(
//     <>
//       <input type={showPswd ? "text" : "password"} onChange={(e)=>setpswd(e.target.value)}></input>
//       <button onClick={()=>setpswd(prev=>!prev)}>{showPswd ? "Hide" : "Show"}</button>
//     </>
//   )
// }

//6
// import { useState } from "react";
// export default function App(){
//   const [showPswd,setShowPswd] = useState(false)
//   const [pswd,setPswd] = useState("")

//   return(
//     <>
//       <input value={pswd} type={showPswd ? "text" : "password"} onChange={(e)=>setPswd(e.target.value)}/>
//       <button onClick={()=>setShowPswd(prev=>!prev)}>{showPswd ? "Hide" : "Show"}</button>
//     </>
//   )
// }

//7
// import { useState } from "react";
// export default function App(){
//   const [count,setCount] = useState(0);
//   const [val,setVal] = useState("");
//   return(
//     <>
//       <input 
//       type="text" 
//       value={val} 
//       onChange={(e)=>{
//         setCount(e.target.value.length);
//         setVal(e.target.value)
//         }}/>
//       <p>Characters: {count}</p>
//       <button onClick={()=>{
      
//       setVal("");
//       setCount(0);}
//       }>Clear</button>
//     </>
//   )
// }


//8
// import { useState } from "react";
// export default function App(){
//   const [charCount, setCharCount] = useState(0);
//   return(
//     <>
//         <input type="text" onChange={(e)=>setCharCount(e.target.value.length)} maxLength={10}/>
//         <p>Characters: {charCount}/10</p>

//     </>
//   )
// }

//9 
// import { useState } from "react";
// export default function App(){
//     const [val,setValue] = useState("");
//     return(
//         <>
//             <input type="text" value={val} onChange={(e)=>setValue(e.target.value)} />
//             <button disabled={val.length===0} onClick={()=>console.log(val)} >
//                 Submit
//             </button>
//         </>
//     )
// }

//10
// import { useState } from "react";
// export default function App(){
//     const [name,setName] = useState("");
//     console.log(name);
//     return(
//         <>
//             <input value={name} onChange={(e)=>setName(e.target.value)} />
//             <p>{name.length===0 ? "Hello!" : "Hello,"+name}</p>
//         </>
//     )
// }

//11
// import { useState } from "react";
// export default function App(){
//     const [fname,setFName] = useState("");
//     const [lname,setLName] = useState("");
//     return(
//         <>
//             <input type="text" value={fname} onChange={(e)=>{setFName(e.target.value)}} />
//             <input type="text" value={lname}  onChange={(e)=>{setLName(e.target.value)}} />
//             <p>Full Name: {fname+" "+lname}</p>

//         </>
//     )
// }

//12
// import { useState } from "react";
// export default function App(){
//     const [msg,setMsg] = useState("");
//     return(
//         <>
//             <input type="text" value={msg} onChange={(e)=>{setMsg(e.target.value)}} maxLength={20} />
//             <p>Characters: {msg.length}/20</p>
//             <button disabled={msg.length===0}>Submit</button>

//         </>
//     )
// }

//13
// import { useState } from "react";
// export default function App(){
//     const [email,setEmail] = useState("");
//     const [submittedEmail, setSubmittedEmail] = useState("");
//     return(
//         <>
//             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//             <button disabled={email.length===0} onClick={()=>setSubmittedEmail(email)}>Submit</button>
//             <p>Entered Email: {submittedEmail}</p>
//         </>
//     )
// }

//14
// import { useState } from "react";
// export default function App(){
//     const [pswd,setPswd] = useState("");
//     const [Visibility,setVisibility] = useState(false);
//     return(
//         <>
//             <input type={Visibility ? "text" : "password"} value={pswd} onChange={(e)=>setPswd(e.target.value)} />
//             <p>Password Length: {pswd.length}</p>
//             <button onClick={()=>setVisibility(!Visibility)}>{Visibility ? "Hide" : "Show"}</button>
//         </>
//     )
// }

//15
// import { useState } from "react";
// export default function App(){
//     const [name,setName] = useState("");
//     const [email,setEmail] = useState("");

//     const [submittedName,setSubmittedName] = useState("");
//     const [submittedEmail,setSubmittedEmail] = useState("");

//     return(
//         <>
//             <label htmlFor="text">Name: </label>
//             <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            
//             <label htmlFor="email">Email: </label>
//             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

//             <button disabled={name.length===0 || email.length===0} onClick={()=>{
//                 setSubmittedName(name);
//                 setSubmittedEmail(email);
                
//             }}>
//                 Submit
//             </button>
//             <p>Name: {submittedName}</p>
//             <p>Email: {submittedEmail}</p>

//         </>
//     )
// }

//onKeyDown

//1
// import { useState } from "react";
// export default function App(){
//     const [msg,setMsg] = useState("");
//     const [lastKey,setLastKey] = useState("");
//     return(
//         <>
//             <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)} onKeyDown={(e)=>setLastKey(e.key)} />
//             <p>Last Key Pressed: {lastKey}</p>
//         </>
//     )
// }

//2
//  import { useState } from "react";
// export default function App(){
//     const [msg,setMsg] = useState("");
//     return(
//         <>
//             <input type="text" onKeyDown={(e)=>{
//                 if(e.key==="Enter"){
//                     setMsg("You Pressed Enter");
//                 }
//             }} />
//             <p>{msg}</p>
//         </>
//     )
// }

//3
// import { useState } from "react";
// export default function App(){
//     const [skey,setSkey] = useState("");
//     return(
//         <>
//             <input type="text" onKeyDown={(e)=>{
//                 if(e.key==="Escape"){
//                     setSkey("You pressed Escape!");
//                 }
//             }} />
//             <p>{skey}</p>
//         </>
//     )
// }

//4
// import { useState } from "react";
// export default function App(){
//     const [state,setState] = useState("");
//     return(
//         <>
//             <input type="text" onKeyDown={(e)=>{
//                 if(e.key==="Enter"){
//                     setState("You pressed Enter!");
//                 }
//                 if(e.key==="Escape"){
//                     setState("You pressed Escape!");
//                 }
//             }}/>
//             <p>{state}</p>
//         </>
//     )
// }

//5
// import { useState } from "react";
// export default function App(){
//     const [msg,setMsg] = useState("");
//     return(
//         <>
//             <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)} onKeyDown={(e)=>{
//                 if(e.key==="a" || e.key==="A"){
//                     e.preventDefault();

//                 }
//             }}/>
//         </>
//     )
// }

//6
// import { useState } from "react";
// export default function App() {
//     const [letter, setLetter] = useState("");

//     return (
//         <>
//             <input
//                 type="text"
//                 value={letter}
//                 onChange={(e) => setLetter(e.target.value)}
//                 onKeyDown={(e) => {
//                     if (
//                         !(e.key >= "0" && e.key <= "9") &&
//                         e.key !== "Backspace"
//                     ) {
//                         e.preventDefault();
//                     }
//                 }}
//             />

//             <p>Number: {letter}</p>
//         </>
//     );
// }

//7
// import { useState } from "react";
// export default function App(){
//  const [skey,setKey] = useState("");
//  return(
//     <>
//         <input type="text" onKeyDown={(e)=>{
//             if(e.key==="A" && e.shiftKey){
//                 setKey("You pressed Shift + A!")
//             }
//         }} />
//         <p>{skey}</p>
//     </>
//  )
// }

//8
// import { useState } from "react";
// export default function App(){
//  const [skey,setKey] = useState("");
//  return(
//     <>
//         <input type="text" onKeyDown={(e)=>{
//             if(e.key==="s" && e.ctrlKey){
//                 e.preventDefault()
//                 setKey("You pressed Ctrl + S!")

//             }
//         }} />
//         <p>{skey}</p>
//     </>
//  )
// }

//9
// import { useState } from "react";
// export default function App(){
//  const [skey,setKey] = useState("");
//  return(
//     <>
//         <input type="text" onKeyDown={(e)=>{
//             if(e.key==="Enter" && e.altKey){
//                 e.preventDefault();
//                 setKey("You pressed Enter + ALT!")
//             }
//         }} />
//         <p>{skey}</p>
//     </>
//  )
// }

//10
// import { useState } from "react";
// export default function App(){
//  const [skey,setKey] = useState("");
//  return(
//     <>
//         <input type="text" onKeyDown={(e)=>{
//             if(e.key==="Enter" && e.ctrlKey && e.altKey){
//                 e.preventDefault();
//                 setKey("You pressed Ctrl + Alt + Enter!")
//             }
//         }} />
//         <p>{skey}</p>
//     </>
//  )
// }

//11
// import { useState } from "react";
// export default function App(){
//  const [skey,setKey] = useState("");
//  return(
//     <>
//         <input type="text" onKeyDown={(e)=>{
//             if(e.key==="s" && e.ctrlKey && e.shiftKey){
//                 e.preventDefault();
//                 setKey("You pressed Ctrl + Shift + S!")
//             }
//         }} />
//         <p>{skey}</p>
//     </>
//  )
// }

// Keyboard-Controlled Counter

// import { useState } from "react";
// export default function App(){
//     const [count,setCount]  = useState(0);
//     return(
//         <>
//             <p>Count: {count}</p>
//             <button onClick={()=>setCount(prev=>prev+1)} >+1</button>
//             <button onClick={()=>setCount(prev=>prev-1)}>-1</button>
//             <button onClick={()=>setCount(0)}>0</button>

//             <div tabIndex="0" onKeyDown={(e)=>{
//                 if(e.key==="ArrowUp"){
//                     setCount(prev=>prev+1)
//                 }

//                 else if(e.key==="ArrowDown"){
//                     setCount(prev=>prev-1)
//                 }

//                 else if(e.key==="r"){
//                     setCount(0)
//                 }

//             }}>Click here and use your keyboard</div>
            

//         </>
//     )
// }

// Conditional Rendering

//1
// import { useState } from "react"
// export default function App(){
//     const [isLoggedIn,setIsLoggedIn] = useState(false)
//     return(
//         <>
//             <p>{isLoggedIn ? <h1>Welcome User!</h1> : <h1>Please Login</h1>}</p>
//             <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
//         </>
//     )
// }

//2
// import { useState } from "react";
// export default function App(){
//     const [showMessage, setShowMessage] = useState(false);
//     return(
//         <>
//             {showMessage && <p>Hello! This message is visible.</p>}
//             <button onClick={()=>setShowMessage(prev=>!prev)}>Click</button>
            
//         </>
//     )
// }

//3
// import { useState } from "react";
// export default function App(){
//     const [age,setAge] = useState(20);
//     let message;
//             if(age>=18){
//                 message = "You are eligible."
//             }
//             else{
//                 message = "You are not eligible."
//             }
      
//     return(
//         <>
//             <p>{age}</p>
//             <p>{message}</p>
//             <button onClick={()=>setAge(age+1)}>Increase Age</button>
//             <button onClick={()=>setAge(age-1)}>Decrease Age</button>
//         </>
//     )
// }

//4
// import { useState } from "react";
// export default function App(){
//     const [score,setScore] = useState(75);
//     let message;
//     if(score>=90){
//         message="Excellent!";
//     } else if(score>=75){
//         message="Very Good!";
//     } else if(score>=50){
//         message="Good!";
//     } else{
//         message="Need Improvement."
//     }

//     return(
//         <>
//             <p>Score: {score}</p>
//             <p>{message}</p>
//             <button onClick={()=>setScore(score+5)}>+5</button>
//             <button onClick={()=>setScore(score-5)}>-5</button>

//         </>
//     )
// }

//5
// import { useState } from "react";
// export default function App(){
//     const [isLoading,setIsLoading] = useState(false);
//     return(
//         <>
            
//             <button onClick={()=>setIsLoading(prev=>!prev)}>Load Data</button>
//             <p>{isLoading ? "Loading..." : "Data Loaded"}</p>
//         </>
//     )
// }

//6
// import { useState } from "react";
// export default function App(){
//     const [showDetails,setShowDetails] = useState(false);
//     return(
//         <>
//             {showDetails && 
//             <div>
//             <strong>Product Details</strong>
//             <p>Price: $500</p>
//             <p>Category: Clothing</p>
//             </div>}

//             <button onClick={()=>setShowDetails(prev=>!prev)}>{showDetails ? "Hide Details" : "Show Details"}</button>
            
//         </>
//     )
// }

//7
// import { useState } from "react";
// export default function App(){
//     const [status,setStatus] = useState("loading");
//     let msg;
//     if(status==="loading"){
//         msg="Loading..."
//     } else if(status==="success"){
//         msg="Success!";
//     } else {
//         msg="Something went wrong!"
//     }
//     return(
//         <>
//             <button onClick={()=>setStatus("loading")}>Loading</button>
//             <button onClick={()=>setStatus("success")}>Success</button>
//             <button onClick={()=>setStatus("error")}>Error</button>
//             <p>{msg}</p>
//         </>
//     )
// }

//8
// import { useState } from "react";
// import UserStatus from "./components/UserStatus";
// export default function App(){
//     const[isLoggedIn,setIsLoggedIn] = useState(false);
//     return(
//         <>
//             <button onClick={()=>setIsLoggedIn(prev=>!prev)}>{isLoggedIn ? "Logout" : "Login"}</button>
//             <UserStatus isLoggedIn={isLoggedIn}/>
//         </>
//     )
// }

//9
import { useState } from "react";
import LoginMessage from "./components/LoginMessage";
import LogoutMessage from "./components/LogoutMessage";

export default function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    return(
        <>
            <button onClick={()=>setIsLoggedIn(prev=>!prev)}>{isLoggedIn ? "Logout" : "Login"}</button>
            {isLoggedIn ? <LoginMessage /> : <LogoutMessage />}
        </>
    )
}
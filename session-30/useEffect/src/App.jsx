import { useEffect, useState } from 'react'

// Task-1 - Without dependency array
// ----------------------------------<
// export default function App() {
//   const [count, setCount] = useState(0)
//   useEffect(()=>{
//     console.log("Component rendered");
//   })
//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
  
//     </>
//   )
// }


//Task-2 - Empty Depenedency Array
//--------------------------------
// export default function App(){
//   const [count,setCounter] = useState(0);
//   useEffect(()=>{
//     console.log("Component mounted");
//   },[]);

//   return(
//     <>
//       <p>Count: {count}</p>
//       <button onClick={()=>setCounter(count+1)}>Increment</button>
//     </>
//   )
// }

//Task-3 - Dependency Array with Value
//-------------------------------------
// export default function App(){
//   const [count, setCounter] = useState(0);
//   useEffect(()=>{
//     console.log("Count Changed");
    
//   },[count])

//   return(
//     <>
//       p>Count: {count}</p>
//       <button onClick={()=>setCounter(count+1)}>Increment</button>
//     </>
//   )
// }

// Task-4 - Two States
//--------------------
// export default function App(){
//   const [count,setCount] = useState(0);
//   const [name,setName] = useState("");
//   useEffect(()=>{
//     console.log("Count changed");
//   },[count])

//   return(
//     <>
//       <p>Count: {count}</p>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <input onChange={(e)=>setName(e.target.value)} />
//     </>
//   )
// }


// Task-5 - document.title changed
//--------------------------------
// export default function App(){
//   const [count,setCount] = useState(0);
//   useEffect(()=>{
//     document.title = `Count: ${count}`;
//   },[count])
//   return(
//     <>
//       <p>Count: {count}</p>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </>
//   )
// }

// Task-6 - When name changes
//---------------------------
// export default function App(){
//   const [name,setName] = useState("");
//   useEffect(()=>{
//     console.log("Name changed");
//   },[name])

//   return(
//     <>
//       <input onChange={(e)=>setName(e.target.value)} />
//     </>
//   )
// } 

//Task-7 - cleanup
export default function App(){
  const [count,setCount] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
          console.log("Hello");
      }, 1000);

      return () => {clearInterval(timer);
        
      };
  }, []);

  return(
    <>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}





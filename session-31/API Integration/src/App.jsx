// Task-1 - fetch user deatils
//-----------------------------
// import { useState,useEffect } from 'react'

// export default function App(){
//   const [user,setName] = useState("");
//   const [loading,setLoading] = useState(true);
//   const [error,setError] = useState("");

//   useEffect(()=>{
//     async function userDetails() {
//       try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         if(!response.ok){
//           throw new Error("Failed to fetch the user");
//         }
//         const data = await response.json();
//         setName(data);
//       }
//       catch(error){
//         setError(error.message)
//       }
//       finally{
//         setLoading(false);
//       }
//     }
//     userDetails();
//   },[])
//   if(loading){
//     return(
//       <p>Loading...</p>
//     )
//   }

//   if(error){
//     return(
//       <p>{error}</p>
//     )
//   }

//   return(
//     <>
//       <h4>{user?.name}</h4>
//       <p>{user?.email}</p>
//       <p>{user?.phone}</p>
//     </>
//   )

// }


//Task-2 - Fetch one user
//-----------------------
// import { useState,useEffect } from "react";

// export default function App(){
//   const [user,setUser] = useState(null);
//   const [loading,setLoading] = useState(true);
//   const [error,setError] = useState("");

//   useEffect(()=>{
//       async function getUserDetails() {
//         try{
//           const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
//           if(!response.ok){
//             throw new Error("Failed to fetch user deatils")
//           }
//           const data = await response.json();
//           setUser(data);
//         } catch(error)
//         {
//           setError(error.message);
//         } finally{
//           setLoading(false);
//         }
//       }
//       getUserDetails();
//     },[])

//     if(loading){
//       return(
//       <p>Loading...</p>
//       )
//     }

//     if(error){
//       return
//       (
//       <p>{error}</p>
//       )
//     }

//     return(
//       <>
//       <p>{user?.name}</p>
//       <p>{user?.email}</p>
//       </>
//     )
// }

// Task-3 - fetch multiple user
// import { useState,useEffect } from "react";

// export default function App(){
//   const [user,setUser] = useState([]);
//   const [loading,setLoading] = useState(true);
//   const [error,setError] = useState("");

//   useEffect(()=>{
//     async function getUserDetails() {
//       try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if(!response.ok){
//           throw new Error("Failed to fetch user details");
//         }
//         const data = await response.json();
//         setUser(data);
//         console.log(data);
        
//       } catch(error){
//         setError(error.message);
//       } finally{
//           setLoading(false);
//       }
//     }
//     getUserDetails();
//   },[]);

//   if(loading){
//     return(<p>Loading...</p>);
//   }

//   if(error){
//     return(<p>{error}</p>);
//   }
  
//  return (
//   <>
//     {user.map((u) => {
//       return (
//         <div key={u.id}>
//           <p>{u.name}</p>
//           <p>{u.email}</p>
//         </div>
//       )
//     })}
//   </>
// )
// }

// Task-4 - etch users and display only selected information
//----------------------------------------------------------
// import { useState,useEffect } from "react";

// export default function App(){
//   const [user,setUser] = useState([]);
//   const [loading,setLoading] = useState(true);
//   const [error,setError]  =useState("");

//   useEffect(()=>{
//     async function getUserDetails(){
//     try {
//       const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//       if(!resp.ok){
//         throw new Error("failed to fetch");
//       }
//       const data = await resp.json();
//       setUser(data);
//       console.log(data);
      
//     } catch (error) {
//       setError(error.message);
//     } finally{
//       setLoading(false);
//     }    
//   }
//   getUserDetails();
//   },[]);

//   if(loading){
//     return(<p>Loading...</p>)
//   }

//   if(error){
//     return(<p>{error}</p>)
//   }

//   return(
//     user.map((u)=>{
//       return(
//       <div key={u.id}>
//         <p>{u.name}</p>
//         <p>{u.email}</p>
//         <p>{u.address.city}</p>
//       </div>)
//     })
//   )
// }
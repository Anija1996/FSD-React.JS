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

// Task-4 - fetch users and display only selected information
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

// Task-5 - Add a user count
//--------------------------
// import { useState,useEffect } from "react";

// export default function App(){
//     const [user,setUser] = useState([]);
//     const [loading,setLoading] = useState(true);
//     const [error,setError] = useState(null);

//     useEffect(()=>{
//         async function getUserDetails() {
//             try{
//                 const response = await fetch ("https://jsonplaceholder.typicode.com/users");
//                 if(!response.ok){
//                     throw new Error("Fetching failed");
//                 }
//                 const data = await response.json();
//                 setUser(data);
//                 // console.log(user);
                
//             }
//             catch(error){
//                 setError(error.message);
//             }
//             finally{
//                 setLoading(false);
//             }
//         }

//         getUserDetails();
//     },[])

//     if(loading){
//         return(<p>Loading...</p>);
//     }

//     if(error){
//         return(<p>{error}</p>);
//     }


    
//     return(
//         <>
//         <h2>Total User: {user.length}</h2>
//         {user.map((usr)=>{
//             return(
//                 <div key={usr.id}>
//                     <p>{usr.name}</p>
//                     <p>{usr.email}</p><br/>
//                 </div>
//             )
//         })}
//     </>)
// }

//Task-6 - Fetch a single post
//---------------------------
// import { useState,useEffect } from "react";

// export default function App(){
//     const [post,setPost] = useState(null);
//     const [loading,setLoading] = useState(true);
//     const [error,setError] = useState(null);

//     useEffect(()=>{
//         async function getDetails() {
//             try{
//                 const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//                 if (!resp.ok) {
//                     throw new Error("Failed to fetch post");
//                 }
//                 const data = await resp.json();
//                 setPost(data);
//             } catch(error){
//                 setError(error.message);
//             } finally{
//                 setLoading(false);
//             }
//         }
//         getDetails();
//     },[])

//     if(loading){
//         return(<p>Loading...</p>);
//     }

//     if(error){
//         return(<p>{error}</p>);
//     }

//     return(
//         <>
//             <h2>Title: {post.title}</h2>
//             <p>Body: {post.body}</p>
//         </>
//     )
// }

//Task-7 - Create a post API
//--------------------------
// import { useState } from "react";

// export default function App(){
//     const [title,setTitle] = useState("");
//     const [body,setBody] = useState("");
//     const [loading,setLoading] = useState(false);
//     const [error,setError] = useState(null);

//         async function postDetails() {
//             try{
//                 setLoading(true);
//                 const resp = await fetch("https://jsonplaceholder.typicode.com/posts",
//                     {
//                     method: "POST",
//                     headers:{
//                         "Content-Type" : "application/json"
//                     },
//                     body: JSON.stringify({
//                         title,
//                     body
//                     })
//                     }
                    
//                 );

//                 if(!resp.ok){
//                         throw new Error("Posting failed");
//                 }
//                 const data = await resp.json();
//                 console.log(data);
                

//             } catch(error){
//                 setError(error.message);
//             } finally{
//                 setLoading(false);
//             }
//         }
//         // postDetails();

//     if(loading){
//             return(<p>Loading...</p>);
//     }

//     if(error){
//         return(<p>{error}</p>);
//     }
    
//     return(
//         <>
//             <input type="text" onChange={(e)=>setTitle(e.target.value)} />
//             <input type="text" onChange={(e)=>setBody(e.target.value)} />
//             <button onClick={postDetails}>Submit</button>
//         </>
//     )

// }

//Task-8 - Display the POST response
//----------------------------------
// import { useState } from "react"; 

// export default function App(){
//     const [title,setTitle] = useState("");
//     const [body,setBody] = useState("");
//     const [loading,setLoading] = useState(false);
//     const [error,setError] = useState(null);
//     const [post,setPost] = useState(null);

//         async function postDetails() {
//             try{
                
//                 setLoading(true);
//                 const resp = await fetch("https://jsonplaceholder.typicode.com/posts",
//                     {
//                     method: "POST",
//                     headers:{
//                         "Content-Type" : "application/json"
//                     },
//                     body: JSON.stringify({
//                         title,
//                     body
//                     })
//                     }
                    
//                 );

//                 if(!resp.ok){
//                         throw new Error("Posting failed");
//                 }
//                 const data = await resp.json();
//                 setPost(data);
//                 setTitle("");
//                 setBody("");
                

//             } catch(error){
//                 setError(error.message);
//             } finally{
//                 setLoading(false);
//             }
//         }
//         // postDetails();

//     if(loading){
//             return(<p>Loading...</p>);
//     }

//     if(error){
//         return(<p>{error}</p>);
//     }
    
//     return(
//         <>
//             <input type="text" onChange={(e)=>setTitle(e.target.value)} />
//             <input type="text" onChange={(e)=>setBody(e.target.value)} />
//             <button onClick={()=>{
//                 body.length===0 || title.length===0 ? setError("Input box cannot be empty") : postDetails()}
//             }>Submit</button>
//             {post && (
//                 <>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                 </>
//             )}
//         </>
//     )

// }


// Task-9 - POST task: Show a success message
//-------------------------------------------
// import { useState } from "react";

// export default function App(){
//     const [post,setPost] = useState("");
//     const [loading,setLoading] = useState(false);
//     const [error,setError] = useState(null);
//     const [title,setTitle] = useState("");
//     const [body,setBody] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");

//     async function postDetails() {
//         try{
//             setLoading(true);
//             const resp = await fetch("https://jsonplaceholder.typicode.com/posts",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify({
//                         title,
//                         body
//                     })
//                 }
//             )
//             if(!resp.ok){
//                 throw new Error("Failed to fetch");
//             }
//             const data = await resp.json();
//             setPost(data);
//             setSuccessMessage("Post created successfully!");
//         } catch(error){
//             setError(error.message);
//         } finally{
//             setLoading(false)
//         }
//     }

//     if(loading){
//         return(<p>Loading...</p>)
//     }

//     if(error){
//         return(<p>{error}</p>)
//     }

//     return(
//         <>
//             <input onChange={(e)=>setTitle(e.target.value)}/>
//             <input onChange={(e)=>setBody(e.target.value)}/>
//             <button onClick={()=>body.length===0 || title.length===0 ? setError("Input box empty") : postDetails()}>Submit</button>
//             {successMessage && (
//                 <p>
//                     {successMessage}
//                 </p>
//             )}
//         </>
//     )
// }

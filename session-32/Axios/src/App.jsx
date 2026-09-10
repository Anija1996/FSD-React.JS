import { useState,useEffect } from "react";
import axios from'axios';

// Task-1 - Fetch single user
// //--------------------------
// export default function App(){
//   const [user,setUser] = useState(null);
  
//   useEffect(()=>{
//     async function getUser() {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
//       setUser(response.data);
//     }
    
//     getUser();
//   },[])

//   return(
//     <>
//       {user && 
//       (
//         <> 
//         <p>{user.name}</p>
//         <p>{user.email}</p>
//         </>
//       )
//       }
//     </>
//   )
// }

// Task-2 - Fetch multiple users
//------------------------------
// export default function App(){
//   const [user,setUser] = useState([]);
//   const [loading,setLoading] = useState(true);
//   const [error,setError] = useState(null);

//   async function getUserDeatils(){
//     try{
//       const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
//       setUser(resp.data);
//       console.log(resp.data);
      
//     } catch(error){
//       setError(error.message);
//     } finally{
//       setLoading(false);
//     }
//   }

//   useEffect(()=>{
//     getUserDetails();
//   },[])

//   if(loading){
//     return(<p>Loading...</p>)
//   }

//   if(error){
//     return(<p>{error}</p>)
//   }
  
  
//   return(
//     <>
//       {user.map((usr)=>{
//         return(
//         <div key={usr.id}>
//           <p>{usr.name}</p>
//           <p>{usr.email}</p>
//         </div>)
        
//       })}
//     </>
//   )
// }

// Task-3 - POST 
//--------------
export default function App(){
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [post,setPost] = useState(null);
  const [successMessage, setSuccessDetails] = useState("");

  async function postDetails() {
    try{
      setLoading(true);
      const resp = await axios.post("https://jsonplaceholder.typicode.com/posts",{title,body});
      setPost(resp.data);
      setSuccessDetails("Posted successfully")
      console.log(resp.data);
      
    } catch(error){
        setError(error.message);
    }finally{
        setLoading(false);
    }
  }

  if(loading){
    return(<>Loading...</>)
  }

  if(error){
    return(<>{error}</>)
  }

  return(
    <>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" onChange={(e)=>setBody(e.target.value)} />
      <button onClick={()=>{title.length===0 || body.length===0 ? setError("Title or body cannot be empty") : postDetails()}}>Submit</button>
      {
        post &&
        <>
        <p>{post.title}</p>
        <p>{post.body}</p>
        </>
        
      }
    </>
  )
}
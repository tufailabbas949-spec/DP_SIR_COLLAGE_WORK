import { useEffect, useState } from "react"
import Userinfo from "./components/Userinfo"
function App(){
    const [User,setUser] = useState([])

   useEffect(()=>{
     async function api(params) {
       const res = await fetch("https://jsonplaceholder.typicode.com/users")
       const data = await res.json()
       console.log(data)
       setUser(data)
     }
     api()
   },[])
  
   return (
    <>
     <h1>API CALLS</h1>
     <div style={{display:'flex',
      flexWrap:'wrap',
      alignItems:'center',
      justifyContent:'center',
      gap:'30px',
      padding:'30px',
      width:'100vw',
      backgroundColor:'red'
     }}>
     {
      User.map((user,index)=>{
        return <div key={index}>
          <Userinfo 
          name={user.name} 
          username={user.username} 
          e_mail={user.email}
          address = {user.address.city}
          index= {user.index}
            />
        </div>
      })
    
     }</div>
      
     </>
   )

}
export default App
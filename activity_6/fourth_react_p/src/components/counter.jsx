import { useState } from "react"

function Counter(){
    const [num,setnum] = useState(0)
  function increment(){
    console.log("inc")
    setnum(num+1)
  }
   function reset(){
    console.log("reset")
    setnum(0)
   }
    function decrement(){
      console.log("dec")
      setnum(num-1)
    }
    
  return(
    <>
    <div style={{background:"#6c7a14",height:"200px",width:"300px",display:"flex",
        flexDirection:"column",alignItems:"center",justifyContent:"space-evenly", padding:'30px',
        borderRadius:"20px"
    }}>
      <h1>counter</h1>
      <p>{num}</p>
      <div>
        <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>decrement</button>
      </div>
    </div>
      
    </>
  )
}
 export default Counter
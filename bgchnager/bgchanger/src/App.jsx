import { useState } from 'react'


function App() {
  const [Color, setcolor] = useState("black")

  return (
    <>
    <h1> background color change useing usestate</h1>
       <div style={{
        height: "100vh",
        width: '100wh',
        backgroundColor:Color
      }}>
         <div style={{
          display:'flex',
          gap:'30px',
          paddingTop:'30px'
         }}>
          <button onClick={()=>{setcolor("black")}}>black</button>
          <button onClick={()=>{setcolor("red")}}>red</button>
          <button onClick={()=>{setcolor("blue")}}>blue</button>
          <button onClick={()=>{setcolor("pink")}}>pink</button>
          <button onClick={()=>{setcolor("yellow")}}>yellow</button>
        </div>
      </div> 



    </>
  )
}

export default App

function Clook(){
 const time = new Date()
  let day = time.toLocaleString('en-us',{weekday:'long'})
  let date = time.getDate()
  let month = time.toLocaleString('en-us',{month:'long'})
  let years = time.getFullYear()
  return (
    <>
    <div style={{backgroundColor:'#e5c6ff', width:'350px',height:'400px', display:'flex',flexDirection:'column', alignItems:"center",
      gap:'40px'
    }}>
      <h1 style={{ width:'100%',backgroundColor:'red', textAlign:'center',textTransform:'capitalize'}}>calender</h1>
      <div style={{
        backgroundColor:'#70ce12',
        height:'70%',
        width:'60%',
        textAlign:'center',
        padding:'0'
      }}>
        <p style={{backgroundColor:'skyblue',fontSize:'30px'}}>{month}</p>
        <p  style={{fontSize:'15px'}}>{day}</p>
        <p style={{fontSize:'30px'}}>{date}</p>
        <p style={{fontSize:'30px'}}>{years}</p>
      </div>
    </div>
    </>
    )
}
export default Clook;
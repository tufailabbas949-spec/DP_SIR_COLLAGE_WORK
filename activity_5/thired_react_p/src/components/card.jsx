function Card(props){

  return(
       <>
       <div style={{backgroundColor:"#b5c5f4",height:'300px', width:'350px', borderRadius:'20px', display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'space-evenly',
         margin:'10px'
       }}>
      <img src={props.img}
       alt="user pic" 
       style={{height:'150px',width:'150px',backgroundColor:'blue', borderRadius:'50%'}} />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      <p>{props.expe}</p>
     </div>
       </>
  )
}
export default Card
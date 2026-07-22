function App(){
  function submit(e){
    e.preventDefault
    console.log("form submit ok done")
  }
  return (

      <>
         <div>
          <form onSubmit={(e)=>{submit(e.target.value)}}>
              <input type="text" placeholder="enter your name" name="" />
              <input type="text" name="" id=""  placeholder="enter your number"/>
              <button type="submit">submit</button>
          </form>
         </div>
      </>
  )
}
 export default App
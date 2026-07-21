async function userdata() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data =  await res.json()
     //console.log(data)
     return data
}
 async function main(){
    const array =  await userdata()
   const nameall = array.map((i)=>{
        return  i.userId
   })
    console.log(nameall)
  }
  main()
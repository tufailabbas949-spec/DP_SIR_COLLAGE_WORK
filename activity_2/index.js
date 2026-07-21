// activity 2 
//part A
// map filter reduce
const student = [
    { name: "tufail abbas", mark: 80 },
    { name: "saniya zhara", mark: 100 },
    { name: "ali nawaz", mark: 89 },
    { name: "arman abbas", mark: 85 },
    { name: "saniya bano", mark: 10 },
    { name: "ali abbas", mark: 65 },
    { name: "ayan khan ", mark: 45 }
]
 let pass_student = student.filter((s)=>{
            return s.mark > 70
 }).map((s) =>{
    return s.name
 })
 console.log(pass_student)

 let total_m = student.reduce((t,s)=>{
        return t+s.mark
 },0)
  console.log(total_m)
  const avg = total_m/student.length
  console.log(avg)
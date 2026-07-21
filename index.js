//activity 1
// sum function add two number normal function and arrow function
//1.1
function add(a,b){
    return a+b
}
let res = add(20,30)
console.log(`result is ${res}`)

// arrow function + default parameter

 let sum = (a=0,b=0)=>{
    return a+b
 }
res = sum(30,40)
console.log(`new result arrow function ${res}`);

// square function

function squ(x){
    return x*x
}
let res1 = squ(10)
console.log(`squre is ${res1}`)
 
//arrow function 

const square = (x)=>{
    return x*x
}
res1 =  square(15)
console.log(`square new arrow function is ${res1}`)

//1.2
// const let +template literals

// old
var name = "tufail"
var age = 18
var mes = "my name is "+name+"my age is " + age
console.log(mes)

// new way 
let name1 = "tufail abbas";
let age1 = 18;
 let message = `name is ${name1} and age is ${age1}`
 console.log(message)
 // use const 
 const name2 = "tufail abba rizvi"
 const age2 = 18
 const mes2 = `my name is saiyad ${name2} and my age is ${age2}`
 console.log(mes2)

// destucturing  object
//old 
let student = {
    name : "tufailabbas",
    age : 18
}
let s_nmae = student.name;
let s_age = student.age
console.log(s_nmae,s_age)
// new method 
const{named,aged}= student;
console.log(name,age)

// destucturing  array
 // old way
 const namelist = ["tufail","abbas","rizvi","ali"]
const fisrtname = namelist[0]
const secondname = namelist[1]
const thiredname = namelist[2]
console.log(fisrtname)
console.log(secondname)
console.log(thiredname)
 console.log(namelist)

 // new way 
 const [f_name,s1_name,t_name] = namelist
 console.log(f_name)
 console.log(s1_name)
 console.log(t_name)

 //array map filter
 let number =  [1,2,3,4,5,6]
 let new_num = []
 for(let i = 0; i<=(number.length-1) ; i++){
    new_num.push(number[i]+2)
 }
 console.log(new_num)
 console.log(typeof(number))

 // use map 
 let new_array =  number.map((n)=>{
                return n+2
  })
   console.log(new_array)

// use filter 
  let n = number.filter((n)=>{
        return n>=5
 })
  console.log(n)

  // spread operator
  //old way
  function sumallnum(...val){
        let sum = 0
         for(let i=0;i<=val.length-1; i++){
            sum = sum + val[i]
         }
        console.log(sum)
  }
sumallnum(10,20,50)
import React from 'react'
import {useState,useEffect} from 'react'
function App() {

const [name, setName] = useState(()=>{
  return localStorage.getItem('name') || '';
});
const [email, setEmail] = useState(()=>{
  return localStorage.getItem('email') || '';
});
const [password, setPassword] = useState(()=>{
  return localStorage.getItem('password') || '';
});
useEffect(() => {
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
}, [name, email, password]);
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', { name, email, password });
};
  return (
    <>
      <h1 className='text-center bg-red-500 font-bold'>form enter your details</h1>
      <form className='flex flex-col items-center justify-center mt-10' onSubmit={(e) => handleSubmit(e)}>
        <input value={name} onChange={(e) => setName(e.target.value)}
          type="text" placeholder='Enter your name' className='border-2 border-gray-300 rounded-md p-2 mb-4 w-1/3' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' className='border-2 border-gray-300 rounded-md p-2 mb-4 w-1/3' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' className='border-2 border-gray-300 rounded-md p-2 mb-4 w-1/3' />
        <button type="submit"
         className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600'>Submit</button>
      </form>
      <div className='mt-10 text-center'>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </>
  )
}

export default App

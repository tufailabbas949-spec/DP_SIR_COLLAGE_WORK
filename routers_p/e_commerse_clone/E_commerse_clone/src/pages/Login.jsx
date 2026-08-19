import React from 'react'
import { useEffect,useState } from 'react'
export const Login = () => {
    const [loginData, setLoginData] = useState(( )=>{
        return {
            email: localStorage.getItem('email') || '',
            password: localStorage.getItem('password') || ''
        }
    })
    useEffect(() => {
    localStorage.setItem('email', loginData.email)
    localStorage.setItem('password', loginData.password)
}, [loginData])
   
    const loginHandler = (e)=>{
        e.preventDefault()
        console.log('login data:', loginData)
    }
  return (
    <div className='w-full h-150 bg-amber-50 flex items-center justify-center'>
        <div className='sm:w-120 sm:h-100 p-5 bg-green-500 flex flex-col justify-start text-center gap-5'>
            <div className='uppercase font-bold text-4xl'>Login </div>
            <form  className='flex flex-col gap-5' onSubmit={(e)=>{loginHandler(e)}}>
           < input  value={loginData.email} onChange={(e)=>{setLoginData({...loginData, email: e.target.value})}} className="bg-white p-1 text-black placeholder:text-gray-500 w-full" type="text" placeholder='Enter your email' />
          < input value={loginData.password} onChange={(e)=>{setLoginData({...loginData, password: e.target.value})}} className="bg-white p-1 text-black placeholder:text-gray-500 w-full" type="password" placeholder='Enter your password' />
          <button type='submit' className='w-full bg-blue-700 text-xl uppercase hover:bg-blue-800'>Login</button>
        </form>
        <div> email: {loginData.email} </div>
        <div> password: {loginData.password} </div>
        </div>
    </div>
    
  )
}

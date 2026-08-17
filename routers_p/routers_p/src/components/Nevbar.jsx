import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Nevbar = () => {
  const nav = useNavigate()
  return (
   <nav className='flex gap-7 justify-between px-22 bg-amber-200'>
    <div>logo</div>
    <div className='flex gap-5 text-2xl uppercase'>
       <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/contact'}>CONTACT</Link>
        <Link to={'/login'}>LOgIN</Link>
    </div>
    <div>
      <button onClick={()=>{
        nav(-1)
      }}>pre</button>
      <button 
      onClick={()=>{
        nav(+1)
      }}>next</button>
    </div>
   </nav>
  )
}

export default Nevbar
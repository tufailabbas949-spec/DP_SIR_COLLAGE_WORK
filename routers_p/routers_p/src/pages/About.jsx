import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const About = () => {
  const {id} = useParams()
  return (
    <>
    <div className='flex items-center justify-center h-100 text-5xl' >About
    {id}</div>
    <Link  className=' block text-center text-xl bg-amber-200'to={'details'}>defails</Link>
    <Outlet />
    </>
  )
}

export default About
import React from 'react'
import { useParams } from 'react-router-dom'

const Login = () => {
  const { id } = useParams()
  return (
    <div className='flex items-center justify-center  h-screen text-5xl'>Login id : {id}</div>
  )
}

export default Login
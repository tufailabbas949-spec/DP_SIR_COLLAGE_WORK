import React from 'react'
import { useParams } from 'react-router-dom'

const Contect = () => {
  const {id} = useParams()
  return (
    <div  className='flex items-center justify-center  
    h-screen text-5xl'>Contect {id}</div>
  )
}

export default Contect
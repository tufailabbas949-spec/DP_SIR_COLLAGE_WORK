import React from 'react'
import { Link } from 'react-router-dom'

export const Navigate = () => {
  return (
    <div className="w-full h-6 bg-white text-black flex items-center justify-center gap-10 px-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">product</Link>
      <Link to="/context"> context</Link>
    </div>
  )
}
export default Navigate

import React from 'react'

export const Card = ({ img, title, description, price }) => {
  return (
    <div className='bg-red-400 h-90 w-78 p-4 flex flex-col gap-2'>
      <img src={img}
        alt="product image" />
      <div>{title}</div>
      <div>{description}</div>
      <div>${price.toFixed(2)}</div>
      <div className='flex justify-between'>
        <button className='bg-blue-600  hover:bg-blue-800 text-white w-30 p-1 text-center capitalize'>buy</button>
        <button className='bg-blue-600 hover:bg-blue-800 text-white w-30 p-1 capitalize text-center'>add card</button>
      </div>
    </div>
  )
}

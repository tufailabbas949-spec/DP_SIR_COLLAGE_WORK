import React from 'react'

export const Navbar_1 = () => {
  return (
    <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between gap-6 sm:gap-0 sm:justify-around  px-4">
      <div className="flex items-center ">
        <p className="text-4xl font-bold text-red-600">e</p>
        <p  className="text-4xl font-bold text-blue-300">d</p>
        <p  className="text-4xl font-bold text-yellow-300">a</p>
        <p  className="text-4xl font-bold text-green-300">y</p>
      </div>
      <select className="text-white-500 bg-gray-600 hidden sm:block">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option5">Option 5</option>
      </select>
      <div className="flex items-center gap-1 sm:gap-x-4">
        <input type="text" placeholder="Search..." className="px-2 py-1 rounded bg-white text-black w-full md:w-100 sm:w-50 lg:w-160 xl:w-200" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Search
        </button>
      </div>
      <button className='hidden md:block'>advanced</button>
    </div>
  )
}
export default Navbar_1

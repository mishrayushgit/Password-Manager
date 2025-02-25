import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-gray-800 text-white '>
      <div className="mycontainer py-4 flex justify-between items-center h-15">
        <div className='logo text-2xl font-bold'>
          <span className='text-green-500'>&lt;</span>
          Pass<span className='text-green-500'>G</span>har
          <span className='text-green-500'>/&gt;</span>
          </div>
        <button className='text-white ring-1 ring-white bg-green-500 my-4 rounded-full flex justify-between items-center cursor-pointer'>
          <img className='invert w-10 p-1' src="/public/github.svg" alt="" />
          <span className='font-bold px-2'>Github</span>
          </button>
        </div>
    </nav>
  )
}

export default navbar
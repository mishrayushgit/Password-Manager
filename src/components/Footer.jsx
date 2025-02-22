import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
    <div className='text-xl font-bold'>  <span className='text-green-500'>&lt;</span>
    Pass<span className='text-green-500'>G</span>har
    <span className='text-green-500'>/&gt;</span>
    </div>
    <div className='flex items-center'>Created with <img className='w-7 mx-2' src="/public/heart.png" alt="" /> by Ayush Mishra</div>
    </div>
  )
}

export default Footer
import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-black text-white '>
      <div className="mycontainer py-4 flex justify-between items-center h-15">
        <div className='logo text-2xl font-bold'>
          <span className='text-green-500'>&lt;</span>
          Pass<span className='text-green-500'>G</span>har
          <span className='text-green-500'>/&gt;</span>
          </div>
        <ul>
            <li className=' flex gap-4'>
                <a className='hover:font-bold' href="">Home</a>
                <a className='hover:font-bold' href="">About</a>
                <a className='hover:font-bold' href="">Contact</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default navbar
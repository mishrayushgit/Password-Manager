import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-purple-300 flex justify-between items-center px-4 h-15'>
        <div className='logo font-bold'>PassGhar</div>
        <ul>
            <li className=' flex gap-4'>
                <a className='hover:font-bold' href="">Home</a>
                <a className='hover:font-bold' href="">About</a>
                <a className='hover:font-bold' href="">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default navbar
import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-purple-300'>
        <div className='logo font-bold'>PassGhar</div>
        <ul>
            <li>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default navbar
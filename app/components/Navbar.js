import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center p-3 px-5 md:px-24 bg-blue-900'>
        <div>
            <Link href={"/"}>
            <h1 className='text-xl md:text-2xl font-bold'>NotesWala!</h1>
            </Link>
        </div>
        <div>
            <ul className='hidden md:flex gap-3'>
                <Link href={'/explore'} className=' border border-white p-[1px] px-2 rounded-xl hover:text-gray-300 hover:border-gray-300'><li>Notes</li></Link>
                <Link href={'/explore'} className=' border border-white p-[1px] px-2 rounded-xl hover:text-gray-300 hover:border-gray-300'><li>Assignments</li></Link>
                <Link href={'/explore'} className=' border border-white p-[1px] px-2 rounded-xl hover:text-gray-300 hover:border-gray-300'><li>Notifications</li></Link>
                <Link href={'/contact'} className=' border border-white p-[1px] px-2 rounded-xl hover:text-gray-300 hover:border-gray-300'><li>Contact</li></Link>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar

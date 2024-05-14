import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='text-white text-sm p-2 text-center bg-blue-900 flex flex-col'>
            <ul className='flex gap-2 text-center items-center justify-center md:hidden'>
                <Link href={'/explore'} className='underline hover:text-gray-400'><li>Notes</li></Link>
                <Link href={'/explore'} className='underline hover:text-gray-400'><li>Assignment</li></Link>
                <Link href={'/explore'} className='underline hover:text-gray-400'><li>Notifications</li></Link>
                <Link href={'/about'} className='underline hover:text-gray-400'><li>About us</li></Link>
                <Link href={'/contact'} className='underline hover:text-gray-400'><li>Contact us</li></Link>
            </ul>
            <span className='pt-3 md:pt-0'>
                All right reserved &copy; by
            </span>
            <span>
                <span className='hover:text-gray-300'>
                    <Link href="http://www.oucde.net/">PGRRCDE, Osmania University </Link>
                </span>
                &
                <span className='hover:text-gray-300'>
                    <Link href="https://github.com/Hemraj-7"> Hemraj-7</Link>
                </span>
            </span>
        </div>
    )
}

export default Footer

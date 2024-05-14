import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <div className="w-[80%] md:w-1/3 min-h-[85vh] mx-auto flex flex-col gap-5 md:gap-3 items-center text-justify">
                <div>
                    <h1 className='font-bold text-4xl p-5 pt-12'>
                        About Us
                    </h1>
                </div>
                <div className='text-lg'>
                    <span className='text-2xl font-bold'>W</span>elcome to <span className='font-bold text-xl text-blue-800'>NotesWala!</span> Your one-stop destination for all your MCA study needs. Here, you will find comprehensive notes, helpful assignments, and important notifications to assist you in your academic journey at PGRRCDE, Osmania University. Dive in and enhance your learning experience with us!
                </div>
                <div className='text-lg'>
                    <span className='pr-2'>
                        Official Website :-
                    </span>
                    <Link href={'http://www.oucde.net/'} className='text-blue-800 hover:text-gray-600'>
                        Prof G. Ram Reddy Center of Distance Education, Osmania University, Hyderabad
                    </Link>
                </div>
                <div className='flex gap-5 py-10'>
                    <button><Link href={'https://github.com/Hemraj-7'}><FaGithub className='text-3xl' /></Link></button>
                    <button><Link href={'https://www.linkedin.com/in/hem-raj-862624202/'}><FaLinkedin className='text-3xl' /></Link></button>
                    <button><Link href={'https://www.instagram.com/hemraj__parihar/'}><FaInstagram className='text-3xl' /></Link></button>
                </div>
            </div>
        </div>
    )
}

export default page

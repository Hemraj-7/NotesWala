import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div>
      <h2 className='text-center m-7 font-bold text-2xl'>MCA Semester 1</h2>
    </div>
      <div className="w-[85%] m-7 mx-auto flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className='w-full min-h-[500px] border border-black p-2 rounded-lg'>
          <h2 className='text-xl font-bold text-center p-3'>Notes</h2>
          <div className='p-2'>
            <h3 className='font-bold pt-1'>THEORY</h3>
            <ul className='flex flex-col gap-2 p-3'>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Mathematical Foundations of Computer Science</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Data Structures using C</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Object Oriented Programming using Java</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Computer Architecture</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Probability & Statistics</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Managerial Economics and Accountancy</Link></li>
            </ul>
            <h3 className='font-bold pt-3'>PRACTICALS</h3>
            <ul className='flex flex-col gap-2 p-3'>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Data Structures using C Lab</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Java Programming Lab</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Soft Skills Lab</Link></li>
            </ul>
          </div>
        </div>
        <div className='w-full min-h-[500px] border border-black p-2 rounded-lg'>
          <h2 className='text-xl font-bold text-center p-3'>Assignments</h2>
            <ul className='flex flex-col gap-2 p-3 px-5'>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Mathematical Foundations of Computer Science</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Data Structures using C</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Object Oriented Programming using Java</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Computer Architecture</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Probability & Statistics</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Managerial Economics and Accountancy</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Data Structures using C Lab</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Java Programming Lab</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Soft Skills Lab</Link></li>
            </ul>
        </div>
        <div className='w-full min-h-[500px] border border-black p-2 rounded-lg'>
          <h2 className='text-xl font-bold text-center p-3'>Notifications</h2>
            <ul className='flex flex-col gap-2 p-3 px-5'>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Assignments Realese</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/'}>Weekend Classes Time Table</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'./notify/MCA_Syllabus.pdf'}>MCA Syllabus</Link></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default page

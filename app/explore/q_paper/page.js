import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div>
                <h2 className='text-center m-5 font-bold text-2xl'>MCA Semester 1</h2>
            </div>
            <div className="w-[90%] md:h-[517px] md:w-1/3 m-2 mx-auto flex flex-col md:flex-row gap-7 md:gap-5 items-center justify-between mb-7">
                <div className='w-full md:min-h-[500px] border border-black p-2 rounded-lg'>
                    <h2 className='text-xl font-bold text-center p-3'>Previous Year Qustion Papers</h2>
                    <div className='p-2 px-3'>
                        <div className='text-center font-bold text-sm pb-2 text-slate-700'>These papers are of last years regular college students. Not of distance education centre students.</div>
                        <ul className='flex flex-col gap-3 p-3'>
                            <li className='text-slate-500 hover:text-black'><Link href={'/notify/q_paper/mfcs previous papers.pdf'}>Mathematical Foundations of Computer Science</Link></li>
                            <li className='text-slate-500 hover:text-black'><Link href={'/notify/q_paper/DS previous Question papers.pdf'}>Data Structures using C</Link></li>
                            <li className='text-slate-500 hover:text-black'><Link href={'/notify/q_paper/Java previous paper.pdf'}>Object Oriented Programming using Java</Link></li>
                            <li className='text-slate-500 hover:text-black'><Link href={'/notify/q_paper/ca previous papers.pdf'}>Computer Architecture</Link></li>
                            <li className='text-slate-500 hover:text-black'><Link href={'/notify/q_paper/p&s previous papers.pdf'}>Probability & Statistics</Link></li>
                            <li className='text-slate-500 hover:text-black'><Link href={'/notify/q_paper/mea previous papers.pdf'}>Managerial Economics and Accountancy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

// https://drive.google.com/drive/folders/1NOLws02gyKBPVNkFLvP-ceI96ZUHZN0f
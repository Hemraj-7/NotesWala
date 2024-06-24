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
                        <ul className='flex flex-col gap-3 p-3'>
                        <li className='text-slate-500 hover:text-black'><Link href={'/notify/MCA Year 2023 Question Papers.pdf'}>MCA Year 2023 Question Papers</Link></li>
                        <li className='text-slate-500 hover:text-black'><Link href={'/notify/MCA Year 2022 Question Papers.pdf'}>MCA Year 2022 Question Papers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

// https://drive.google.com/drive/folders/1NOLws02gyKBPVNkFLvP-ceI96ZUHZN0f
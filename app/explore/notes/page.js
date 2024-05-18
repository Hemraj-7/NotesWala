import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div>
                <h2 className='text-center m-7 font-bold text-2xl'>MCA Semester 1 Notes</h2>
            </div>
            <div className="w-[90%] md:w-1/2 m-7 mx-auto flex flex-col md:flex-row gap-7 md:gap-5 items-center justify-between">
                <div className='w-full md:min-h-[500px] border border-black p-2 rounded-lg'>
                    <h2 className='text-xl font-bold text-center p-3'>Notes</h2>
                    <div>
                        <ul className='flex flex-col gap-2 p-2'>
                            {/* <li className='text-slate-500 hover:text-black font-bold'><Link href={'/'}>Mathematical Foundations of Computer Science</Link></li> */}
                            {/* <li className='text-slate-500 hover:text-black font-bold'><Link href={'/'}>Data Structures using C</Link></li> */}
                            {/* <li className='text-slate-500 hover:text-black font-bold'><Link href={'/'}>Object Oriented Programming using Java</Link></li> */}
                            {/* <li className='text-slate-500 hover:text-black font-bold'><Link href={'/'}>Computer Architecture</Link></li> */}
                            <li className='text-slate-500 hover:text-black'><span className='font-bold'>Probability & Statistics</span>
                                <ul className='p-1 px-3'>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/Probability and Statistics.pdf'}>Probability & Statistics</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/Fp&s(unit-2) .pdf'}>Probability & Statistics Unit 2</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/Fp&s(unit-2(probs)) .pdf'}>Probability & Statistics Unit 2 Probs</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/Fp&s(unit-2(binomialprobs)) .pdf'}>Probability & Statistics Unit 2 Binomialprobs</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/unit-3(p&s) .pdf'}>Probability & Statistics Unit 3</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/Unit-3(p&s) -1.pdf'}>Probability & Statistics Unit 3 part-2</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/Unit-4(p&s) .pdf'}>Probability & Statistics Unit 4</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/Unit-4(exa) .pdf'}>Probability & Statistics Unit 4 Exa</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/ps/Unit-5(p&s) .pdf'}>Probability & Statistics Unit 5</Link></li>
                                </ul>
                            </li>
                            <li className='text-slate-500 hover:text-black'><span className='font-bold'>Managerial Economics and Accountancy</span>
                            <ul className='p-1 px-3'>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/mea/MEA U-1.pptx'}>Managerial Economics and Accountancy Unit 1</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/mea/unit-2Demand analysis.pptx'}>Managerial Economics and Accountancy Unit 2 Demand Analysis</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/mea/Methods of Capital Budgeting.pdf'}>Methods of Capital Budgeting</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/mea/modrn methds capital bdgtng.pdf'}>Mordern Methods</Link></li>
                                    <li className='text-slate-500 hover:text-black'><Link href={'/notes/mea/BE MEA BEP ANALYSIS.pptx'}>BE MEA BEP ANALYSIS</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

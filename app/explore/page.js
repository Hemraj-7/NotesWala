import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div>
      <h2 className='text-center m-5 font-bold text-2xl'>MCA Semester 1</h2>
    </div>
    {/* <marquee behavior="" direction=""><p className='p-1 pb-2 text-red-600 font-bold text-sm'>*Notes of some subjects are not available yet, they will be uploaded soon. Thank you!</p></marquee> */}
      <div className="w-[90%] md:h-[537px] m-2 mx-auto flex flex-col md:flex-row gap-7 md:gap-5 items-center justify-between">
        <div className='w-full md:min-h-[500px] border border-black p-2 rounded-lg'>
          <h2 className='text-xl font-bold text-center p-3'>Notes</h2>
          <div className='p-1 px-2'>
            <h3 className='font-bold pt-1'>THEORY</h3>
            <ul className='flex flex-col gap-2 p-3'>
              <li className='text-slate-500 hover:text-black'><Link href={'/notes/mfcs/MFCS notes.pdf'}>Mathematical Foundations of Computer Science</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notes/c/C Programming Handwritten Notes.pdf'}>Data Structures using C</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notes/java/Full Java notes .pdf'}>Object Oriented Programming using Java</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notes/csa/Computer System Architecture-Morris Mano third edition.pdf'}>Computer Architecture</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/explore/notes'}>Probability & Statistics</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/explore/notes'}>Managerial Economics and Accountancy</Link></li>
            </ul>
            <h3 className='font-bold pt-3'>PRACTICALS</h3>
            <ul className='flex flex-col gap-2 p-3'>
              <li className='text-slate-500 hover:text-black'><Link href={'/notes/theory/DS USING C.pdf'}>Data Structures using C Lab</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notes/theory/java lab record final for pint.pdf'}>Java Programming Lab</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notes/theory/Softskills Lab Record.pdf'}>Soft Skills Lab</Link></li>
            </ul>
          </div>
        </div>
        <div className='w-full md:min-h-[500px] border border-black p-2 rounded-lg'>
          <h2 className='text-xl font-bold text-center p-3'>Assignments</h2>
            <ul className='flex flex-col gap-2 p-3 px-5'>
              <li className='text-slate-500 hover:text-black'><Link href={'/assignment/Mathematical Foundations of Computer Science Assignment Set-1 and Set-2.pdf'}>Mathematical Foundations of Computer Science Assignment Set 1 and Set 2</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/assignment/Data Structures using C Assignment Set-1 and Set-2.pdf'}>Data Structures using C Assignment Set1 and Set2</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/assignment/Object Oriented Programming using Java Assignment Set-1 and Set-2.pdf'}>Object Oriented Programming using Java Assignment Set 1</Link></li>
              {/* <li className='text-slate-500 hover:text-black'><Link href={'/assignment/ASSIGNMENT OOPS JAVA.pdf'}>Object Oriented Programming using Java Assignment Set 1 and Set 2</Link></li> */}
              <li className='text-slate-500 hover:text-black'><Link href={'/assignment/Computer Architecture Set-1 and Set-2.pdf'}>Computer Architecture Assignment Set 1 and Set 2</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/assignment/Probability Statistics Assignment Set 1 and 2.pdf'}>Probability & Statistics Assignment Set 1 and Set 2</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/assignment/Managerial Economics and Accountancy Assignment Set-1 and Set-2.pdf'}>Managerial Economics and Accountancy Assignment Set 1 and Set 2</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/assignment/Soft Skills Lab Assignment Set-1 and Set-2.pdf'}>Soft Skills Lab Assignment Set 1 and Set 2</Link></li>
            </ul>
        </div>
        <div className='w-full md:min-h-[500px] border border-black p-2 rounded-lg mb-4 md:mb-0'>
          <h2 className='text-xl font-bold text-center p-3'>Notifications</h2>
            <ul className='flex flex-col gap-2 p-3 px-5'>
              <li className='text-slate-500 hover:text-black'><Link href={'/notify/Front Page of Assignment.pdf'}>Front Page of Assignment</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notify/MCA Year 2023 Question Papers.pdf'}>MCA Year 2023 Question Papers</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notify/MCA Year 2022 Question Papers.pdf'}>MCA Year 2022 Question Papers</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notify/MCA I Semester assignment.pdf'}>MCA 1st Semester Assignment Notification</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notify/IMPQuestions_Sem1.pdf'}>All Subjects Important Quetions </Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notify/MEA important questions.pdf'}>MEA Important Quetions </Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notify/ME Sem 1 Important question 2021.pdf'}>MEA Important Quetions </Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'/notify/Time Table.pdf'}>Weekend Classes Time Table</Link></li>
              <li className='text-slate-500 hover:text-black'><Link href={'./notify/MCA_Syllabus.pdf'}>MCA Syllabus</Link></li>
            </ul>
        </div> 
      </div>
    </>
  )
}

export default page

// https://drive.google.com/drive/folders/1NOLws02gyKBPVNkFLvP-ceI96ZUHZN0f

// https://docs.google.com/document/d/1I7lQUfMXFtiCWNefNj1gFw3K7LXNGN5t2GXYLGlVDyg/edit?usp=sharing
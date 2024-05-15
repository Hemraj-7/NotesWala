import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <div className="w-[85%] md:w-[47%] min-h-[85vh] mx-auto flex flex-col gap-5 md:gap-3 items-center">
                <div>
                    <h1 className='font-bold text-4xl p-4 pt-7'>
                        Contact Us
                    </h1>
                </div>
                <div className='text-lg'>
                    Welcome to <span className='font-bold text-xl text-blue-800'>NotesWala!</span>, your premier resource hub for all your MCA study essentials! We value your feedback, queries, and suggestions. Feel free to get in touch with us through any of the following channels:
                    <h3 className='font-bold pt-2'>General Inquiries</h3>
                    <p>Have questions about our study materials, assignments, or notifications? Reach out to our team for prompt assistance. We are here to ensure your academic journey is smooth and successful.</p>
                    <h3 className='font-bold pt-2'>Technical Support</h3>
                    <p>Encountering technical issues while accessing our website? Our dedicated support team is ready to help you troubleshoot any problems and ensure you have uninterrupted access to our resources.</p>
                    <h3 className='font-bold pt-2'>Collaboration Opportunities</h3>
                    <p>Interested in collaborating with NotesWala for academic projects, content creation, or partnerships? Lets explore opportunities to work together and create value for MCA students at PGRRCDE, Osmania University.</p>
                    <h3 className='font-bold pt-2'>Feedback and Suggestions</h3>
                    <p>We highly value your feedback and suggestions to improve our platform and better serve your needs. Share your thoughts with us, and together, lets make NotesWala the ultimate destination for MCA study support.</p>
                </div>
                <div className='text-lg'>
                    <span className='pr-2'>
                        Official Website :-
                    </span>
                    <Link href={'http://www.oucde.net/'} className='text-blue-800 hover:text-gray-600'>
                        Prof G. Ram Reddy Center of Distance Education, Osmania University, Hyderabad
                    </Link>
                </div>
                <div className='flex gap-5 py-8'>
                    <button><Link href={'https://github.com/Hemraj-7'}><FaGithub className='text-3xl' /></Link></button>
                    <button><Link href={'https://www.linkedin.com/in/hem-raj-862624202/'}><FaLinkedin className='text-3xl' /></Link></button>
                    <button><Link href={'https://www.instagram.com/hemraj__parihar/'}><FaInstagram className='text-3xl' /></Link></button>
                    <button><Link href={'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrsqmDLQBMpkLMjSzHWqhHstgXzLKHBBqMsvDNqfLDlxWCSJhMNmpXBmZnFmgghsrrsqB'}><CgMail className='text-[38px]' /></Link></button>
                </div>
            </div>
        </div>
    )
}

export default page

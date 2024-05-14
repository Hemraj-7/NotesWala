import React from 'react'

const Footer = () => {
    return (
        <div className='text-white text-sm p-2 text-center bg-blue-900 flex flex-col'>
            <span>
                All right reserved &copy; by
            </span>
            <span>
                PGRRCDE, Osmania University & 
                <span className='hover:text-gray-300'>
                    <a href="https://github.com/Hemraj-7"> Hemraj-7</a>
                </span>
            </span>
        </div>
    )
}

export default Footer

import React from 'react'

const SubFooter = () => {
  return (
    <div className='w-full bg-black text-white-200 '>
    <div
    className='w-full   flex text-sm justify-between max-w-7xl  px-4 sm:px-6 lg:px-8 self-center mx-auto  text-center py-4'
    >
        <p className='text-sm'>
            All Rights Reserved
        </p>
        <p className='text-sm'>
            &copy; glamerc 2024  
        </p>
       <p>Developed by{' '}
            {/* <a
            href='xanahealth.io'
            className='text-gray-200 font-bold'
            >
            Karisimbi Technologies Solutions
            </a> */}

            {/* open new tab with new link */}
            <a
            href='https://xanahealth.io'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-200 font-bold'
            >
            XanaHealth
            </a>


            </p> 
        
    </div>
    </div>
  )
}

export default SubFooter
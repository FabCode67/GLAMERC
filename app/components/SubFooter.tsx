import React from 'react'

const SubFooter = () => {
  return (
    <div className='w-full bg-black text-white-200 '>
    <div
    className='w-full px-4  flex text-sm justify-between max-w-7xl self-center mx-auto  text-center py-4'
    >
        <p className='text-sm'>
            All Rights Reserved
        </p>
        <p className='text-sm'>
            &copy; glamerc 2024  
        </p>
       <p>Developed by{' '}
            <a
            href='xanahealth.io'
            target='_blank'
            rel='noreferrer'
            className='text-gray-200 font-bold'
            >
            Karisimbi Technologies Solutions
            </a>
            </p> 
        
    </div>
    </div>
  )
}

export default SubFooter
import React from 'react'

const NavLogo = () => {
    return (
        <div className='navforLogsOnly flex justify-between m-auto py-1 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
            <img src="/glamericlogo.png" alt="Medico Logo" className="md:h-20 md:w-48 h-16 w-40 " />
            <img src="/dentallogo.png" alt="Medico Logo" className="h-20 w-32 " />
        </div>
    )
}

export default NavLogo